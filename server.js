import express from 'express';
import OpenAI from 'openai';
import 'dotenv/config';

const app = express();
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post('/query', async (req, res) => {
  const { query } = req.body;

  try {
    
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { "role": "user", "content": query }
      ]
    });

   
    res.json({ response: completion.choices[0].message.content.trim() });
  } catch (error) {
    console.error("Error fetching response", error.message);

    const mockResponse = `This is a mock response for your query: "${query}"`;
    res.json({ response: mockResponse });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});