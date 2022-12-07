import mongoose from "mongoose";
import { settings } from "../config";

export const connectToDatabase = () => {
  try {
    mongoose.set("strictQuery", false);

    return mongoose.connect(settings.DB_URL);
  } catch (error) {
    console.error(
      "🚀 ~ file: connectToDatabase.ts:7 ~ connectToDatabase ~ error",
      error
    );
  }
};
