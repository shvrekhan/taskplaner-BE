import { Request, Response } from "express";
import { checkIfUserExists, hashUserPassword, generateUUID, saveUserData, generateAuthToken, mapUserInfoInResponseObject } from "../commonRouterFunctions"
import { userSignUpSchema } from "../../schema/schema";

const signUpUser = async (req: Request, res: Response) => {

  try {
    const { error } = userSignUpSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    let { email, password, userName } = req.body;
    let isUserPresent = (await checkIfUserExists(req.body)).length;
    if (isUserPresent) {
      res.status(400).json("User already exists.")
    } else {
      const hashPassword = await hashUserPassword(password);
      const userId = generateUUID();
      const created_at = new Date;
      const user = await saveUserData(userId, req.body, hashPassword, created_at);
      const token = generateAuthToken(email);
      const userInfo = mapUserInfoInResponseObject(userId, req.body, created_at);
      res.status(200).json({ accessToken: token, user: userInfo });
    }
  } catch (error) {
    console.error("Error during user registration:", error);
    res.status(500).json({ error: "An internal server error occurred." });
  }
};

export default signUpUser;




