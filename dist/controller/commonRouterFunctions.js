"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeGeneratedTokenInDb = exports.mapUserInfoInResponseObject = exports.generateAuthToken = exports.saveUserData = exports.generateUUID = exports.hashUserPassword = exports.checkIfUserExists = void 0;
const connection_1 = __importDefault(require("../model/connection"));
let { authQuery } = require("../model/queries");
let bcrypt = require("bcrypt");
let { v4: uuidv4 } = require('uuid');
let jwt = require("jsonwebtoken");
const checkIfUserExists = (userInfo) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { email, username } = userInfo;
        let users = yield connection_1.default.query(authQuery.checkEmailInLoginTable, [username, email]);
        return users.rows;
    }
    catch (error) {
        console.error('Error checking if user exists:', error);
        throw error;
    }
});
exports.checkIfUserExists = checkIfUserExists;
const hashUserPassword = (password) => __awaiter(void 0, void 0, void 0, function* () {
    return yield bcrypt.hash(password, 12);
});
exports.hashUserPassword = hashUserPassword;
const generateUUID = () => {
    return uuidv4();
};
exports.generateUUID = generateUUID;
const saveUserData = (userId, userInfo, hashPassword, created_at) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { first_name, last_name, email, username } = userInfo;
        let signInfo = yield connection_1.default.query(authQuery.saveCredOnSignUp, [userId, first_name, last_name, email, username, hashPassword, created_at, created_at]);
        return signInfo;
    }
    catch (error) {
        console.error("Error saving user info", error);
        throw error;
    }
});
exports.saveUserData = saveUserData;
const generateAuthToken = (username) => {
    return jwt.sign({ username: username }, process.env.SECRET_KEY);
};
exports.generateAuthToken = generateAuthToken;
const mapUserInfoInResponseObject = (userId, userInfo, last_login) => {
    let { first_name, last_name, email, username } = userInfo;
    return {
        "userId": userId,
        "first_name": first_name,
        "last_name": last_name,
        "email": email,
        "username": username,
        "last_login": last_login
    };
};
exports.mapUserInfoInResponseObject = mapUserInfoInResponseObject;
const storeGeneratedTokenInDb = (user_id, token) => __awaiter(void 0, void 0, void 0, function* () {
    return yield connection_1.default.query(authQuery.saveToken, [user_id, token,]);
});
exports.storeGeneratedTokenInDb = storeGeneratedTokenInDb;
//# sourceMappingURL=commonRouterFunctions.js.map