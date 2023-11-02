import { Request, Response } from "express";
import { checkIfUserExists, generateAuthToken } from "../commonRouterFunctions";
import User from "../../server/interface/authInterface";
const bcrypt = require("bcrypt");

const loginUser = async (req: Request, res: Response) => {
    try {
        const { username, email, password } = req.body;
        const usersList: User[] = await checkIfUserExists(req.body);

        if (usersList.length === 0) {
            return res.status(404).json({ msg: "User not found" });
        }

        const storedPassword = usersList[0].password;
        const isPasswordValid = await bcrypt.compare(password, storedPassword);

        if (isPasswordValid) {
            const token = generateAuthToken(username);
            return res.status(200).json({ status: 'Success', token });
        } else {
            return res.status(401).json({ status: 'Fail', msg: 'Password mismatch' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 'Error', msg: 'Something went wrong' });
    }
};

export default loginUser;
