import authService from "../services/authService.js";
import jwtUtils from "../utils/jwtUtils.js";
import ApiResponse from "../utils/apiResponse.js";

export const register = async (req, res) => {
  const { role, email, password } = req.body;
  try {
    const user = await authService.register({ role, email, password });
    ApiResponse.sendSuccess(res, 201, user, "User registered successfully");
  } catch (error) {
    ApiResponse.sendError(res, 500, error.message);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const tokens = await authService.login({ email, password });
    ApiResponse.sendSuccess(res, 200, tokens, "Login successful");
  } catch (error) {
    ApiResponse.sendError(res, 400, error.message);
  }
};

export const refreshTokens = async (req, res) => {
  const { refreshToken } = req.body;
  if (!refreshToken)
    return ApiResponse.sendError(res, 400, "Refresh token is required");

  try {
    const user = jwtUtils.verifyRefreshToken(refreshToken);
    const newAccessToken = jwtUtils.generateAccessToken(user);
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
