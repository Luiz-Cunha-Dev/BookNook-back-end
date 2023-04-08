import Joi from "joi";

const entertainmentSchema = Joi.object({
   name: Joi.string().required().max(20),
    imageUrl: Joi.string().required(),
    typeId: Joi.number().required(),
    category1Id: Joi.number(),
    category2Id: Joi.number(),
    category3Id: Joi.number(),
    grade: Joi.number(),
    comment: Joi.string()
})

export default entertainmentSchema;