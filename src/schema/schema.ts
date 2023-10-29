import Joi from "joi";

export const userSignUpSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().alphanum().min(8).required(),
})