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
const schema_1 = require("../../schema/schema");
const signUpUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { error } = schema_1.userSignUpSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }
        let { first_name, last_name, email, username, password } = req.body;
        let isUserPresent = (yield (0, commonRouterFunctions_1.checkIfUserExists)(req.body)).length;
        if (isUserPresent) {
            res.status(400).json("User already exists.");
        }
        else {
            const hashPassword = yield (0, commonRouterFunctions_1.hashUserPassword)(password);
            const userId = (0, commonRouterFunctions_1.generateUUID)();
            const created_at = new Date;
            const user = yield (0, commonRouterFunctions_1.saveUserData)(userId, req.body, hashPassword, created_at);
            const token = (0, commonRouterFunctions_1.generateAuthToken)(username);
            const userInfo = (0, commonRouterFunctions_1.mapUserInfoInResponseObject)(userId, req.body, created_at);
            res.status(200).json({ accessToken: token, user: userInfo });
        }
    }
    catch (error) {
        console.error("Error during user registration:", error);
        res.status(500).json({ error: "An internal server error occurred." });
    }
});
exports.default = signUpUser;
//# sourceMappingURL=signUpController.js.map