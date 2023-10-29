import { Router, request, response } from "express";

import loginUser from "../controller/authController/loginController";
import signUpUser from "../controller/authController/signUpController";
import resetPassword from "../controller/authController/resetPasswordController";

const authRouter: Router = Router();

authRouter.post("/signUp", signUpUser);
authRouter.post("/login", loginUser);
authRouter.get("/refreshToken",)
authRouter.get('/refreshToken', resetPassword)

export default authRouter;
