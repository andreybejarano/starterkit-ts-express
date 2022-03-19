import { Request, Response, NextFunction } from "express";
import httpStatus from 'http-status';

export default (req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).send({
    status: httpStatus.NOT_FOUND,
    Message: 'Resource not found'
  });
};
