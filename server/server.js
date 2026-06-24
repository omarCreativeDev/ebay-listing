import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Enable CORS so your React app (e.g., localhost:3000) can make requests to this server
app.use(cors());
app.use(express.json());

// Initialize the official Google Gen AI SDK
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// The proxy endpoint called by your React app
app.post('/api/generate-description', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    // Request generation using the standard gemini-2.5-flash model
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt
    });

    // The SDK exposes the generated text directly on the response object
    res.json({ text: response.text });
  } catch (error) {
    console.error('Error generating content from Ai:', error);
    res.status(500).json({ error: 'Failed to generate description from Ai' });
  }
});

app.listen(PORT, () => {
  console.log(`Secure Proxy Server running on http://localhost:${PORT}`);
});
