const express = require('express');
const { Configuration, OpenAIApi } = require('openai');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


const droneData = [
  {
    image_id: "001",
    timestamp: "2024-09-24 14:31:05",
    latitude: "44.4280° N",
    longitude: "110.5885° W",
    altitude_m: 50,
    battery_level_pct: 98,
    image_tags: ["Geyser", "Steam"],
    file_name: "YNP_001.jpg"
  },
  {
    image_id: "002",
    timestamp: "2024-09-24 14:33:22",
    latitude: "44.4279° N",
    longitude: "110.5890° W",
    altitude_m: 75,
    battery_level_pct: 95,
    image_tags: ["Forest", "River"],
    file_name: "YNP_002.jpg"
  },
  {
    image_id: "003",
    timestamp: "2024-09-24 14:36:47",
    latitude: "44.4275° N",
    longitude: "110.5888° W",
    altitude_m: 100,
    battery_level_pct: 91,
    image_tags: ["Wildlife", "Elk"],
    file_name: "YNP_003.jpg"
  },
  {
    image_id: "004",
    timestamp: "2024-09-24 14:40:13",
    latitude: "44.4277° N",
    longitude: "110.5882° W",
    altitude_m: 120,
    battery_level_pct: 88,
    image_tags: ["Mountain", "Sky"],
    file_name: "YNP_004.jpg"
  },
   { 
    image_id: "005",
    timestamp: "2024-09-24 14:44:56", "latitude": "44.4282° N",
    longitude: "110.5879° W",
    altitude_m: 80,
    heading_deg: 315,
    file_name: "YNP_005.jpg",

  }
];


app.post('/api/query', async (req, res) => {
  const { query } = req.body;

  try {
    
    const completion = await openai.createCompletion({
      model: "gpt-3.5-turbo",
      prompt: `Given the drone dataset, find data entries relevant to: ${query}`,
      max_tokens: 50,
    });

    const interpretation = completion.data.choices[0].text;

   
    const filteredData = droneData.filter((data) =>
      data.latitude.includes(query) ||
      data.image_tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );

    res.json({ interpretation, results: filteredData });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error processing the query.");
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));