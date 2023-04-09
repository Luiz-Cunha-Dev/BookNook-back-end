import Joi from "joi";

const goalSchema = Joi.object({
    quantity: Joi.number().required().max(99),
    goal: Joi.number().required().max(99),
    typeId: Joi.number().required(),
    month: Joi.number().required(),
    year: Joi.number().required()
})

export default goalSchema;