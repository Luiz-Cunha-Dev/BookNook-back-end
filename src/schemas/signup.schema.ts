import Joi from "joi";

const signupSchema = Joi.object({
   username: Joi.string().required().max(20),
    email: Joi.string().required().email(),
    password: Joi.string().required(),
    pictureUrl: Joi.string()
})

export default signupSchema;