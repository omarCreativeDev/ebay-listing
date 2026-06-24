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

app.post('/api/generate-description', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const response = await ai.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
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
