import express from "express";
import { config } from "dotenv";
import cors from "cors";
import OpenAI from "openai";

config();

const app = express();
app.use(express.json());
app.use(cors());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const droneData = [
  {
    image_id: "001",
    timestamp: "2024-09-24 14:31:05",
    latitude: "44.4280° N",
    longitude: "110.5885° W",
    altitude_m: 50,
    battery_level_pct: 98,
    image_tags: ["Geyser", "Steam"],
    file_name: "YNP_001.jpg",
  },
  {
    image_id: "002",
    timestamp: "2024-09-24 14:33:22",
    latitude: "44.4279° N",
    longitude: "110.5890° W",
    altitude_m: 75,
    battery_level_pct: 95,
    image_tags: ["Forest", "River"],
    file_name: "YNP_002.jpg",
  },
  {
    image_id: "003",
    timestamp: "2024-09-24 14:36:47",
    latitude: "44.4275° N",
    longitude: "110.5888° W",
    altitude_m: 100,
    battery_level_pct: 91,
    image_tags: ["Wildlife", "Elk"],
    file_name: "YNP_003.jpg",
  },
  {
    image_id: "004",
    timestamp: "2024-09-24 14:40:13",
    latitude: "44.4277° N",
    longitude: "110.5882° W",
    altitude_m: 120,
    battery_level_pct: 88,
    image_tags: ["Mountain", "Sky"],
    file_name: "YNP_004.jpg",
  },
  {
    image_id: "005",
    timestamp: "2024-09-24 14:44:56",
    latitude: "44.4282° N",
    longitude: "110.5879° W",
    altitude_m: 80,
    heading_deg: 315,
    file_name: "YNP_005.jpg",
  },
];

app.post("/query", async (req, res) => {
  const { query } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content: `Given the drone dataset, find data entries relevant to: ${query}`,
        },
      ],
      max_tokens: 50,
    });

    const interpretation = completion.choices[0].message.content;

    const filteredData = droneData.filter((data) => {
      const lat = parseFloat(data.latitude);
      const lon = parseFloat(data.longitude);

      return (
        (lat &&
          lon &&
          (lat.toString().includes(query) || lon.toString().includes(query))) ||
        data.image_tags.some((tag) =>
          tag.toLowerCase().includes(query.toLowerCase())
        )
      );
    });

    res.json({ interpretation, results: filteredData });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Error processing the query.");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
