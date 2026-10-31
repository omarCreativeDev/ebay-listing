import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// Initialize OpenAI client with explicit custom compression headers overridden
const ai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY || 'placeholder-key',
  baseURL: 'https://api.groq.com/openai/v1',
  defaultHeaders: {
    'Accept-Encoding': 'identity' // <-- This forces clear-text payloads, stopping the Gzip premature close crash
  }
});

// Words that show up in listing titles but aren't part of the card's actual
// name, stripped out so the remainder can be used as a search query against
// the card databases below.
const TITLE_NOISE_WORDS = [
  'pokemon',
  'pokémon',
  'tcg',
  'ccg',
  'ptcg',
  'trading card game',
  'card',
  'cards',
  'psa',
  'cgc',
  'bgs',
  'graded',
  'near mint',
  'mint',
  'light played',
  'lp',
  'holofoil',
  'reverse holo',
  'non holo',
  'nonholo',
  'holo',
  'first edition',
  '1st edition',
  'unlimited',
  'shadowless',
  'full art',
  'alt art',
  'alternate art',
  'secret rare',
  'ultra rare',
  'rare',
  'common',
  'uncommon',
  'promo',
  'english',
  'japanese',
  'new',
  'sealed',
  'authentic',
  'genuine',
  'lot',
  'set',
  'deck',
  'booster',
  'box',
  'leader',
  'one piece',
  'optcg'
];

const ONE_PIECE_CODE_RE = /\b([A-Z]{1,4}\d{0,2}-\d{1,4})\b/i;

const cleanTitleForSearch = (title) => {
  let cleaned = title;

  // card codes (OP01-001, ST01-001) and fraction numbers (41/111)
  cleaned = cleaned.replace(/\b[a-z]{1,4}\d{0,2}-\d{1,4}\b/gi, ' ');
  cleaned = cleaned.replace(/\b\d{1,4}\s*\/\s*\d{1,4}\b/g, ' ');

  for (const word of TITLE_NOISE_WORDS) {
    const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    cleaned = cleaned.replace(new RegExp(`\\b${escaped}\\b`, 'gi'), ' ');
  }

  return cleaned
    .replace(/[:,\-|]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

// Progressively shorter prefixes of the cleaned title, so a search for e.g.
// "Charizard VMAX Darkness Ablaze" that fails as a whole still gets a hit on
// "Charizard VMAX" once trailing (likely set-name) words are dropped.
const queryCandidates = (cleaned) => {
  const words = cleaned.split(' ').filter(Boolean).slice(0, 5);
  const candidates = [];
  for (let n = words.length; n >= 1; n--) {
    candidates.push(words.slice(0, n).join(' '));
  }
  return [...new Set(candidates)];
};

const detectGame = (title) =>
  ONE_PIECE_CODE_RE.test(title) || /one\s*piece/i.test(title) ? 'onepiece' : 'pokemon';

const lookupPokemonCard = async (title) => {
  const cleaned = cleanTitleForSearch(title);
  if (!cleaned) return null;

  for (const candidate of queryCandidates(cleaned)) {
    try {
      const url = new URL('https://api.pokemontcg.io/v2/cards');
      url.searchParams.set('q', `name:"${candidate}"`);
      url.searchParams.set('pageSize', '1');

      const response = await fetch(url, { signal: AbortSignal.timeout(4000) });
      if (!response.ok) continue;

      const data = await response.json();
      if (data?.data?.length) return data.data[0];
    } catch (err) {
      console.error('Pokemon TCG API lookup failed:', err.message);
    }
  }

  return null;
};

const lookupOnePieceCard = async (title) => {
  const codeMatch = title.match(ONE_PIECE_CODE_RE);

  if (codeMatch) {
    try {
      const response = await fetch(
        `https://optcgapi.com/api/sets/card/${codeMatch[1].toUpperCase()}/`,
        { signal: AbortSignal.timeout(4000) }
      );
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data.length) return data[0];
      }
    } catch (err) {
      console.error('OPTCG API code lookup failed:', err.message);
    }
  }

  const cleaned = cleanTitleForSearch(title.replace(/one\s*piece/gi, ' '));
  if (!cleaned) return null;

  for (const candidate of queryCandidates(cleaned)) {
    try {
      const url = new URL('https://optcgapi.com/api/sets/filtered/');
      url.searchParams.set('card_name', candidate);

      const response = await fetch(url, { signal: AbortSignal.timeout(4000) });
      if (!response.ok) continue;

      const data = await response.json();
      if (Array.isArray(data) && data.length) return data[0];
    } catch (err) {
      console.error('OPTCG API name lookup failed:', err.message);
    }
  }

  return null;
};

const buildPokemonFactsBlock = (card) =>
  [
    `Name: ${card.name}`,
    card.set?.name &&
      `Set: ${card.set.name}${card.set.series ? ` (${card.set.series} series)` : ''}`,
    card.number &&
      `Card number: ${card.number}${card.set?.printedTotal ? `/${card.set.printedTotal}` : ''}`,
    card.rarity && `Rarity: ${card.rarity}`,
    card.hp && `HP: ${card.hp}`,
    card.types?.length && `Type: ${card.types.join('/')}`,
    card.evolvesFrom && `Evolves from: ${card.evolvesFrom}`,
    card.attacks?.length && `Attacks: ${card.attacks.map((a) => a.name).join(', ')}`
  ]
    .filter(Boolean)
    .join('\n');

const buildOnePieceFactsBlock = (card) =>
  [
    `Name: ${card.card_name}`,
    card.set_name && `Set: ${card.set_name}`,
    card.card_set_id && `Card number: ${card.card_set_id}`,
    card.rarity && `Rarity: ${card.rarity}`,
    card.card_type && `Card type: ${card.card_type}`,
    card.card_color && `Color: ${card.card_color}`,
    card.card_cost && `Cost: ${card.card_cost}`,
    card.card_power && `Power: ${card.card_power}`,
    card.life && `Life: ${card.life}`,
    card.attribute && `Attribute: ${card.attribute}`
  ]
    .filter(Boolean)
    .join('\n');

const buildPrompt = (
  title,
  factsBlock,
  playsetSize
) => `give me a description to sell ${title} on ebay without html, icons or emojis. max 2 paragraphs only.
${
  factsBlock
    ? `\nVERIFIED CARD FACTS (use these to stay accurate - do not state anything that contradicts them, and do not just list them out like a spec sheet):\n${factsBlock}\n`
    : ''
}
${
  playsetSize
    ? `\nThis listing is a PLAYSET of ${playsetSize} copies of this card (x${playsetSize}). Make it clear in the description that the buyer is getting ${playsetSize} copies of the card, not a single card.\n`
    : ''
}
      CRITICAL INSTRUCTIONS:
      - Do NOT include any conversational introduction like "Here is your description".
      - Do NOT repeat the item title or include any bold markdown headers at the start.
      - Do NOT mention anything about shipping, returns, or payment.
      - Do NOT include any HTML tags, icons, or emojis in the description.
      - Do NOT talk about condition, authenticity, or warranty. Let the pictures speak for themselves.
      `;

app.post('/api/generate-description', async (req, res) => {
  const { title, playset } = req.body;

  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }

  const playsetSize = [2, 3, 4].includes(playset) ? playset : null;

  let factsBlock = null;
  try {
    const game = detectGame(title);
    const card =
      game === 'onepiece' ? await lookupOnePieceCard(title) : await lookupPokemonCard(title);
    if (card) {
      factsBlock =
        game === 'onepiece' ? buildOnePieceFactsBlock(card) : buildPokemonFactsBlock(card);
    }
  } catch (err) {
    console.error('Card lookup failed, continuing without verified facts:', err.message);
  }

  const prompt = buildPrompt(title, factsBlock, playsetSize);

  try {
    const response = await ai.chat.completions.create({
      model: 'openai/gpt-oss-20b',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7
    });

    res.json({ text: response.choices[0].message.content });
  } catch (error) {
    console.error('Groq API Error:', error.message);
    res
      .status(500)
      .json({ error: 'Failed to generate description from AI due to gateway connection lag.' });
  }
});

app.listen(PORT, () => {
  console.log(`Secure Local Proxy Server running on http://localhost:${PORT}`);
});
