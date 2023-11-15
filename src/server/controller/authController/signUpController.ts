import { Request, Response } from "express";
import { checkIfUserExists, hashUserPassword, generateUUID, saveUserData, generateAuthToken, mapUserInfoInResponseObject, encryptJwt } from "../commonRouterFunctions"
import { userSignUpSchema } from "../../schema/schema";

const signUpUser = async (req: Request, res: Response) => {

  try {
    const { error } = userSignUpSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    let { email, password } = req.body;
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
      const encryptedJwtToken = encryptJwt(token);
      res.cookie("27_YYYYY_GGGGG", token, { expires: new Date(Date.now() + 1000 * 60 * 60), httpOnly: true, secure: false })
      res.cookie("23_AAAAA_888888", userInfo, { expires: new Date(Date.now() + 1000 * 60 * 60 * 60), httpOnly: true, secure: false })
      res.status(200).json({ msg: "Success" });
    }
  } catch (error) {
    res.status(500).json({ error: "An internal server error occurred." });
  }
};

export default signUpUser;




