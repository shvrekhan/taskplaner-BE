import { Request, Response } from 'express';
let jwt = require("jsonwebtoken");

const tokenValidation = async (req: Request, res: Response) => {
    try {
        const token = req.cookies['27_YYYYY_GGGGG']
        if (jwt.verify(token, process.env.SECRET_KEY)) {
            res.status(200).json({ msg: 'success' })
        }

    } catch (error) {
        res.status(400).json({ msg: 'Token missing' });

    }
}

export default tokenValidation;