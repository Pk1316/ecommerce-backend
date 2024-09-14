import { HttpError } from "http-errors";
import ApiResponse from "../utils/apiResponse";
import config from "../config/config";
import { Request, NextFunction, Response } from "express";
const exceptionHandlerMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (config.mode === "development") console.error(err.stack);

  if (err instanceof HttpError) {
    return ApiResponse.sendError(res, err.statusCode, err.message);
  }

  console.error("Internal Server Error:", err);
  return ApiResponse.sendError(res, 500);
};

export default exceptionHandlerMiddleware;
