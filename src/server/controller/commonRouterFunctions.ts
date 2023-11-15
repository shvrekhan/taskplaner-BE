import User from "../interface/authInterface";
import pool from "../model/connection";
let { authQuery, CRUDQueries } = require("../model/queries")
let bcrypt = require("bcrypt");
let { v4: uuidv4 } = require('uuid');
let jwt = require("jsonwebtoken");
var cryptoJS = require('crypto-js');


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

export const saveUserData = async (userId: string, userInfo: { email: string, userName: string }, hashPassword: string, created_at: Date) => {
    try {
        let { email, userName } = userInfo;
        let signInfo = await pool.query(authQuery.saveCredOnSignUp, [userId, email, userName, hashPassword, created_at, created_at]);
        return signInfo;
    } catch (error) {
        console.error("Error saving user info", error);
        throw error;
    }
};

export const generateAuthToken = (username: string) => {
    return jwt.sign({ username: username }, process.env.SECRET_KEY, { expiresIn: '24h' })
};

export const mapUserInfoInResponseObject = (userId: string, userInfo: { email: string, username: string }, last_login: Date) => {
    let { email, username } = userInfo;
    return {
        "user_id": userId,
        "email": email,
        "username": username,
        "last_login": last_login
    }
}

export const storeGeneratedTokenInDb = async (user_id: string, token: string) => {
    return await pool.query(authQuery.saveToken, [user_id, token,])
}

export const encryptJwt = (value: string) => {
    const encryptedJwt = cryptoJS.AES.encrypt(value.toString(), process.env.CRYPTO_SECRET_KEY).toString()
    return encryptedJwt;
}

export const decryptJwt = (value: string) => {
    console.log(value.toString().split('=')[1], "poiuytre")
    const decryptJwt = cryptoJS.AES.decrypt(value.toString().split('=')[1], process.env.CRYPTO_SECRET_KEY);
    // console.log(value, "     op   ", decryptJwt, "oiuyt")
    return decryptJwt;
}

export const getAutCookie = (value: string, cookieName: string) => {
    return value.split(';').find((currentCookie) => {
        return currentCookie.trim().startsWith(cookieName + '=');
    })

}

export const getAllBoardsFn = async (userId: string) => {
    try {
        let boards = await pool.query(CRUDQueries.getAllBoards, [userId]);
        return boards.rows;
    } catch (error) {
        console.log("Checking if boars exist.");
        throw error;
    }
}

export const addBoardToDb = async (id: string, user_id: string, boardName: string, created_at: Date) => {
    try {
        let addedBoard = pool.query(CRUDQueries.addBoard, [id, user_id, boardName, created_at]);
        return addedBoard;
    } catch (error) {
        console.error(error);
        return error;
    }
}

export const removeBoardFn = async (id: String) => {
    try {
        console.log("pooiuytyuity")
        let removeBoard = await pool.query(CRUDQueries.removeBoard, [id]);
        console.log(removeBoard, "okokokok");
        return removeBoard;
    } catch (error) {
        console.error(error);
        return error;
    }
}