"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const signUpController_1 = __importDefault(require("../controller/authController/signUpController"));
const authRouter = (0, express_1.Router)();
authRouter.post("/signUp", signUpController_1.default);
exports.default = authRouter;
//# sourceMappingURL=loginRouter.js.map