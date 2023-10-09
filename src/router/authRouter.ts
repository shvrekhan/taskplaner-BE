import { Router, request, response } from "express";

import loginUser from "../controller/authController/loginController";
import signUpUser from "../controller/authController/signUpController";

const authRouter: Router = Router();

authRouter.post("/signUp", signUpUser);
authRouter.post("/login",loginUser);

export default authRouter;
