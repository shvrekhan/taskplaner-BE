"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = __importDefault(require("../model/connection"));
const queries_1 = __importDefault(require("../model/queries"));
const loginUser = (req, res) => {
    console.log("login route");
    connection_1.default.query(queries_1.default.create, (error, data) => {
        if (!error) {
            console.log("mooj ho gyi guis");
            res.status(200).json("mooj ho gyi guis");
        }
        else {
            console.log("code fat gya", error);
        }
    });
};
exports.default = loginUser;
//# sourceMappingURL=loginController.js.map