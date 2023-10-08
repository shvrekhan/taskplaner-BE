import { Request, Response } from "express";
import Joi from "joi";
import { checkIfUserExists, hashUserPassword, generateUUID, saveUserData, generateAuthToken } from "../commonRouterFunctions"
const signUpUser = async (req: Request, res: Response) => {

  try {
    let { first_name, last_name, email, username, password } = req.body;
    let isUserPresent = await checkIfUserExists(req.body);
    if (isUserPresent) {
      res.status(400).json("User already exists.")
    } else {
      const hashPassword = await hashUserPassword(password);
      const userId = generateUUID();
      const created_at = new Date;
      const user = await saveUserData(userId, req.body, hashPassword, created_at);
      const token = generateAuthToken(username);
      res.status(200).json({ accessToken: token });
    }
  } catch (error) {
    console.error("Error during user registration:", error);
    res.status(500).json({ error: "An internal server error occurred." });
  }
};

export default signUpUser;




