import Joi from "joi";

const userSchema = Joi.object({
    pictureUrl: Joi.string(),
    email: Joi.string().required().email(),
    username: Joi.string().required()
})

export default userSchema;