import { Request, Response } from "express";
import { Hash } from "crypto";

const loginUser = (req: Request, res: Response) => {
    let { username, email, password } = req.body;
    
};

export default loginUser;
