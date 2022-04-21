import Joi from "joi"

const id = Joi.string()
const name = Joi.string().alphanum().max(258);
const email = Joi.string().email()
const password = Joi.string().max(30)

export const createUserORM = Joi.object({
  name: name.required(),
  email: email.email().required(),
  password: password.required()
})

export const getUserORM = Joi.object({
  id: id.required()
})

export const updateUserORM = Joi.object({
  name: name,
  email: email.email(),
  password: password
})

