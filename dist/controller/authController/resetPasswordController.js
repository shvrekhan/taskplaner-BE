"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = require('nodemailer');
const message = {
    from: "your_name noreplaytaskplaner@gmail.com",
    to: "recipient_name shvrekhan@gmail.com",
    subject: "Your email subject",
    text: "Your email message",
};
const resetPassword = (req, res) => {
    console.log(req, "poiu");
};
exports.default = resetPassword;
//# sourceMappingURL=resetPasswordController.js.map