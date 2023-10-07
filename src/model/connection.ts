import { Pool } from "pg";
import { password, user, database, host } from "../config/config";

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
});

export default pool;
