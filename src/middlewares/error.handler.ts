import Boom from "boom";
import { Request, Response, NextFunction } from "express"; "express"

/**
 * Traking errors  
 */
export function logErrors(err: Error, req: Request, res: Response, next: NextFunction) {
  console.log('logErrors: ', err);
  next(err)
}

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  console.log('errorHandler: ', err);
  if(err) {
    res.status(500).json({
      message: err.message,
      stack: err.stack
    })
  }
  next(err)
}

/**
 * Manage error throw Bomm package
 */
export function boomErrorHandler(err: Boom, req: Request, res: Response, next: NextFunction) {
  if(err.isBoom) {
    const { output } = err
    res.status(output.statusCode).json(output.payload)
  }

  next(err)
}