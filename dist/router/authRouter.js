"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginController_1 = __importDefault(require("../controller/authController/loginController"));
const signUpController_1 = __importDefault(require("../controller/authController/signUpController"));
const resetPasswordController_1 = __importDefault(require("../controller/authController/resetPasswordController"));
const authRouter = (0, express_1.Router)();
authRouter.post("/signUp", signUpController_1.default);
authRouter.post("/login", loginController_1.default);
authRouter.get("/refreshToken");
authRouter.get('/refreshToken', resetPasswordController_1.default);
exports.default = authRouter;
//# sourceMappingURL=authRouter.js.map