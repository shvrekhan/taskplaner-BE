import Joi from "joi";

export const userSignUpSchema = Joi.object({
    email: Joi.string().email().required(),
    userName: Joi.string().alphanum().min(4),
    password: Joi.string().alphanum().min(8).required(),
})