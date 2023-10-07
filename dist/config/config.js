"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.host = exports.database = exports.password = exports.user = exports.port = void 0;
const dotenv_1 = require("dotenv");
const process_1 = require("process");
(0, dotenv_1.config)();
exports.port = process.env.PORT;
exports.user = process_1.env.USERNAME;
exports.password = process_1.env.PASSWORD;
exports.database = process_1.env.DATABASE;
exports.host = process_1.env.HOST;
//# sourceMappingURL=config.js.map