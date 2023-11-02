import User from "../interface/authInterface";
import pool from "../model/connection";
let { authQuery } = require("../model/queries")
let bcrypt = require("bcrypt");
let { v4: uuidv4 } = require('uuid');
let jwt = require("jsonwebtoken");

export const checkIfUserExists = async (userInfo: { email: string }): Promise<User[]> => {
    try {
        let { email } = userInfo;
        let users: any = await pool.query(authQuery.checkEmailInLoginTable, [email]);
        return users.rows;
    } catch (error) {
        console.error('Error checking if user exists:', error);
        throw error;
    }
};

export const hashUserPassword = async (password: string) => {
    return await bcrypt.hash(password, 12);
};

export const generateUUID = () => {
    return uuidv4();
};

export const saveUserData = async (userId: string, userInfo: { email: string }, hashPassword: string, created_at: Date) => {
    try {
        let { email } = userInfo;
        let signInfo = await pool.query(authQuery.saveCredOnSignUp, [userId, email, hashPassword, created_at, created_at]);
        return signInfo;
    } catch (error) {
        console.error("Error saving user info", error);
        throw error;
    }
};

export const generateAuthToken = (username: string) => {
    return jwt.sign({ username: username }, process.env.SECRET_KEY)
};

export const mapUserInfoInResponseObject = (userId: string, userInfo: { first_name: string, last_name: string, email: string, username: string }, last_login: Date) => {
    let { first_name, last_name, email, username } = userInfo;
    return {
        "userId": userId,
        "first_name": first_name,
        "last_name": last_name,
        "email": email,
        "username": username,
        "last_login": last_login
    }
}

export const storeGeneratedTokenInDb = async (user_id: string, token: string) => {
    return await pool.query(authQuery.saveToken, [user_id, token,])
}