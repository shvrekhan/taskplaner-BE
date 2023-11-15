import { Request, Response } from "express";
const jwt = require('jsonwebtoken');

export const authMiddleware = (req: Request, res: Response, next: any) => {
    try {
        const token = req.cookies['27_YYYYY_GGGGG']
        if (jwt.verify(token, process.env.SECRET_KEY)) {
            next();
        }
    } catch (error) {
        res.status(400).json({ msg: "invalid Token" });
    }
}