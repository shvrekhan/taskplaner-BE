"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = __importDefault(require("pg"));
const config_1 = require("../config/config");
const { Pool } = pg_1.default;
const pool = new Pool({
    host: config_1.host,
    user: config_1.user,
    password: config_1.password,
    database: config_1.database,
});
// const pool = new Pool({
//   connectionString: process.env.POSTGRES_URL + "?sslmode=require",
// })
exports.default = pool;
//# sourceMappingURL=connection.js.map