import { Router, request, response } from "express";

import loginUser from "../controller/loginController";

const loginRouter: Router = Router();

loginRouter.post("/", loginUser);

export default loginRouter;
