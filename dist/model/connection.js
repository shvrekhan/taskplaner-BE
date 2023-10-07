"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    connectionString: process.env.POSTGRES_URL + "?sslmode=require",
});
exports.default = pool;
//# sourceMappingURL=connection.js.map