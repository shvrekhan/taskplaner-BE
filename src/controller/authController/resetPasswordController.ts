const nodemailer = require('nodemailer');
import { Request, Response } from "express";



const message = {
    from: "your_name noreplaytaskplaner@gmail.com",
    to: "recipient_name shvrekhan@gmail.com",
    subject: "Your email subject",
    text: "Your email message",
};

const resetPassword = (req: Request, res: Response) => {
    console.log(req, "poiu");

}

export default resetPassword;