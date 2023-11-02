import { config } from "dotenv";
import { env } from "process";

config();

export const port = process.env.PORT;
export const user = env.USERNAME;
export const password = env.PASSWORD;
export const database = env.DATABASE;
export const host = env.HOST;
