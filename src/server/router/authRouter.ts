import { Router, request, response } from "express";

import loginUser from "../controller/authController/loginController";
import signUpUser from "../controller/authController/signUpController";
import resetPassword from "../controller/authController/resetPasswordController";
import tokenValidation from "../controller/authController/tokenValidation";

const authRouter: Router = Router();

authRouter.post("/signUp", signUpUser);
authRouter.post("/login", loginUser);
authRouter.get("/isTokenValid", tokenValidation)
authRouter.get('/refreshToken', resetPassword)

export default authRouter;
