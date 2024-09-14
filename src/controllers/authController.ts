import authService from "../services/authService";
import jwtUtils from "../utils/jwtUtils";
import ApiResponse from "../utils/apiResponse";
import { JwtPayload } from "jsonwebtoken";
import { Request,Response, NextFunction } from "express";
export const register = async (req:Request, res:Response) => {
  const { role, email, password, username} = req.body;
  try {
    const user = await authService.register({ role, email, password ,username});
    ApiResponse.sendSuccess(res, 201, user, "User registered successfully");
  } catch (error : any) {
    ApiResponse.sendError(res, 500, error.message);
  }
};

export const login = async (req:Request, res:Response) => {
  const { email, password } = req.body;
  try {
    const tokens = await authService.login({ email, password });
    ApiResponse.sendSuccess(res, 200, tokens, "Login successful");
  } catch (error: any) {
    ApiResponse.sendError(res, 400, error.message);
  }
};

export const refreshTokens = async (req:Request, res:Response) => {
  const { refreshToken } = req.body;
  if (!refreshToken)
    return ApiResponse.sendError(res, 400, "Refresh token is required");

  try {
    const user = jwtUtils.verifyRefreshToken(refreshToken);
    const newAccessToken = jwtUtils.generateAccessToken(user as JwtPayload);
    ApiResponse.sendSuccess(
      res,
      200,
      { accessToken: newAccessToken },
      "Access token refreshed"
    );
  } catch (error) {
    ApiResponse.sendError(res, 401, "Invalid refresh token");
  }
};
