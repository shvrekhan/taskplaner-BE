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
Object.defineProperty(exports, "__esModule", { value: true });
const commonRouterFunctions_1 = require("../commonRouterFunctions");
const bcrypt = require("bcrypt");
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = req.body;
        const usersList = yield (0, commonRouterFunctions_1.checkIfUserExists)(req.body);
        if (usersList.length === 0) {
            return res.status(404).json({ msg: "User not found" });
        }
        const storedPassword = usersList[0].password;
        const isPasswordValid = yield bcrypt.compare(password, storedPassword);
        if (isPasswordValid) {
            const token = (0, commonRouterFunctions_1.generateAuthToken)(username);
            return res.status(200).json({ status: 'Success', token });
        }
        else {
            return res.status(401).json({ status: 'Fail', msg: 'Password mismatch' });
        }
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({ status: 'Error', msg: 'Something went wrong' });
    }
});
exports.default = loginUser;
//# sourceMappingURL=loginController.js.map