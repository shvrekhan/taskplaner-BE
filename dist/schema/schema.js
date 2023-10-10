"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSignUpSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.userSignUpSchema = joi_1.default.object({
    first_name: joi_1.default.string().required(),
    last_name: joi_1.default.string().required(),
    email: joi_1.default.string().email().required(),
    username: joi_1.default.string().alphanum().min(3).max(30).required(),
    password: joi_1.default.string().alphanum().min(8).required(),
});
//# sourceMappingURL=schema.js.map