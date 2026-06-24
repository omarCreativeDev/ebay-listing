interface GenerateDescriptionResponse {
  text?: string;
  error?: string;
}

/**
 * Sends a prompt to the local API server to generate an eBay item description.
 * @param title The title of the item being sold.
 * @returns A promise resolving to the clean text response or undefined.
 */
export const generateAiDescription = async (title: string): Promise<string | undefined> => {
  const response = await fetch('http://localhost:5001/api/generate-description', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      prompt: `give me a description to sell ${title} on ebay without html, icons or emojis. max 2 paragraphs only. 

      CRITICAL INSTRUCTIONS:
      - Do NOT include any conversational introduction like "Here is your description".
      - Do NOT repeat the item title or include any bold markdown headers at the start.
      `
    })
  });

  if (!response.ok) {
    throw new Error(`API server responded with status: ${response.status}`);
  }

  const data: GenerateDescriptionResponse = await response.json();

  return data.text;
};
