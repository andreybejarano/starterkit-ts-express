import HttpError from './HttpError';
import httpStatus from 'http-status';
import { Request, Response, NextFunction } from 'express';

/**
 * Try to convert all errors in the pipe to a common
 * interface aiming for better manipulation
 * If error is not an instanceOf HttpError, convert it.
 * @param err
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
const errorConverter = (err: any, req: Request, res: Response, next: NextFunction) => {
  let error = Object.assign(err);

  let status = err.status || httpStatus.INTERNAL_SERVER_ERROR;
  // Check for axios error since it swallows the real error code
  // of the request
  if (err.response) {
    err.message = `${err.message} ${err.response.data.message}`;
    status = err.response.status;
  }

  error = new HttpError(err.message, status);

  return res.status(error.status).json({ ...error, message: error.message });
};

export default errorConverter;
