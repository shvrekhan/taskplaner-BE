import pg from "pg";
import { password, user, database, host } from "../config/config";

const { Pool } = pg;

const pool = new Pool({
  host: host,
  user: user,
  password: password,
  database: database,
});
// const pool = new Pool({
//   connectionString: process.env.POSTGRES_URL + "?sslmode=require",
// })

export default pool;
