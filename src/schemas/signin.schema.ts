import Joi from "joi";

const signinSchema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required()
})

export default signinSchema;