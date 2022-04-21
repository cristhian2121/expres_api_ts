import Joi from "joi"

const id = Joi.string();
const name = Joi.string().alphanum().min(3).max(15);
const price = Joi.number().integer().min(10);

export const createProductORM = Joi.object({
  name: name.required(),
  price: price.required(),
});

export const updateProductORM = Joi.object({
  name: name,
  price: price,
});

export const getProductORM = Joi.object({
  id: id.required(),
});
