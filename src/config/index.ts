import dotenv from "dotenv";
import process from "process";

dotenv.config();

export const settings = {
  PORT: Number(process.env.PORT) ?? 5000,
  DB_URL: process.env.DB_URL ?? "",
};
