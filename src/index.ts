import express from "express";
import { settings } from "./config";
import { connectToDatabase } from "./database/connectToDatabase";

const { PORT } = settings;

const app = express();
app.use(express.json());

app.get("/", (req, res) => res.json("API is up."));

const run = async () => {
  await connectToDatabase();
  console.log("Connected to the database.");

  app.listen(PORT, () => console.log(`Server running on port: ${PORT}.`));
};

run();
