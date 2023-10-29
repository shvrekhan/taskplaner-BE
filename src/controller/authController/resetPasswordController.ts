const nodemailer = require('nodemailer');
import { Request, Response } from "express";

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: "task planer",
        pass: "Taskplaner@987654321",
    },
});

const message = {
    from: "your_name noreplaytaskplaner@gmail.com",
    to: "recipient_name shvrekhan@gmail.com",
    subject: "Your email subject",
    text: "Your email message",
};

const resetPassword = (req: Request, res: Response) => {
    console.log(req, "poiu");
    transporter.sendMail(message, (err: any, info: any) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).json({ msg: 'email sent' });
            console.log("Email sent successfully!");
        }
    });
}

export default resetPassword;