"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = __importDefault(require("pg"));
const { Pool } = pg_1.default;
// const pool = new Pool({
//   host: host,
//   user: user,
//   password: password,
//   database: database,
// });
const pool = new Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
});
exports.default = pool;
//# sourceMappingURL=connection.js.map