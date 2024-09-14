import Joi from "joi";

export const productSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  category: Joi.number().required(),
  description: Joi.string().min(10).max(1000).required(),
  price: Joi.number().min(0).required(),
  discount: Joi.number().min(0).max(100).optional(),
  isAvailable: Joi.boolean().required(),
});
