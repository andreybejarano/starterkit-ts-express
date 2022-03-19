import httpStatus from 'http-status';

/**
 * @extends Error
 */
class ExtendableError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(String(arguments));
    this.name = this.constructor.name;
    this.message = Array.isArray(message) ? message : message.toString();
    this.status = status;
    Error.captureStackTrace(this, Function(this.constructor.name));
  }
}

/**
 * Class representing an HttpError error.
 * @extends ExtendableError
 */
class HttpError extends ExtendableError {
  /**
   * Creates an HttpError error.
   * @param {string} message - Error message.
   * @param {number} status - HTTP status code of error.
   */
  constructor(
    message: string,
    status = httpStatus.INTERNAL_SERVER_ERROR,
  ) {
    super(message, status);
  }
}

export default HttpError;
