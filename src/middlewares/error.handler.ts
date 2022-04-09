import { Request, Response, NextFunction } from "express"; "express"

type Middleware = {
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
}

export function logErrors(err: Error, req: Request, res: Response, next: NextFunction) {
  console.log('err: ', err);
  next(err)
}

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  console.log('err: ', err);
  if(err) {
    res.status(500).json({
      message: err.message,
      stack: err.stack
    })
  }
  next(err)
}