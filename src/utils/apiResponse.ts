import { Request, Response, NextFunction } from "express";
export default class ApiResponse {
  status: number;
  message: string;
  data: any;
  constructor(status = 500, message = "", data = null) {
    this.status = status;
    this.message =
      message || (status >= 500 ? "Internal Server Error" : "Success");
    this.data = data;
  }

  static sendSuccess(
    res: Response,
    status = 200,
    data: any,
    message = "Success"
  ) {
    return res.status(status).json(new ApiResponse(status, message, data));
  }

  static sendError(res:Response, status = 500, message = "Internal Server Error") {
    return res.status(status).json(new ApiResponse(status, message));
  }
}
