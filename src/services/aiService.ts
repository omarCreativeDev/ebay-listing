interface GenerateDescriptionResponse {
  text?: string;
  error?: string;
}

/**
 * Sends a title to the local API server to generate an eBay item description.
 * The server looks up verified card facts (Pokemon TCG / One Piece TCG APIs)
 * before prompting the AI, so the description stays grounded in real card data.
 * @param title The title of the item being sold.
 * @returns A promise resolving to the clean text response or undefined.
 */
export const generateAiDescription = async (title: string): Promise<string | undefined> => {
  const response = await fetch('http://localhost:5001/api/generate-description', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title })
  });

  if (!response.ok) {
    throw new Error(`API server responded with status: ${response.status}`);
  }

  const data: GenerateDescriptionResponse = await response.json();

  return data.text;
};
