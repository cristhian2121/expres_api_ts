import Boom from "@hapi/boom";
import joi, {Schema } from "joi"
import { NextFunction, Request, Response } from "express";

type Property = "body"| "params" | "query"

export function validatorHandler(schema: Schema, property: Property) {
  return (req: Request, res: Response ,next: NextFunction) => {
    const data = req[property]
    const { error } = schema.validate(data, { abortEarly: false })
    if(error) {
      next(Boom.badRequest(error.message))
    }
    next()
  }
}