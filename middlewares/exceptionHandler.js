import { HttpError } from "http-errors";
import ApiResponse from "../utils/apiResponse.js";
import config from "../config/config.js";

const exceptionHandlerMiddleware = (err, req, res, next) => {
  if (config.mode === "development") console.error(err.stack);
 
  if (err instanceof HttpError) {
    return ApiResponse.sendError(res, err.statusCode, err.message);
  }

  console.error("Internal Server Error:", err);
  return ApiResponse.sendError(res, 500);
};

export default exceptionHandlerMiddleware;
