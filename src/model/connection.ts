import pg from "pg";
import { password, user, database, host } from "../config/config";

const { Pool } = pg;

const pool = new Pool({
  host: host,
  user: user,
  password: password,
  database: database,
});

export default pool;
