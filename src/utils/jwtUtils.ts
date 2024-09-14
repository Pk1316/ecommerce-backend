import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config/config";

const generateAccessToken = (user:JwtPayload) => {
  return jwt.sign(
    { id: user.id, role: user.role },
    config.ACCESS_TOKEN_SECRET,
    { expiresIn: "1d" }
  );
};

const generateRefreshToken = (user:JwtPayload) => {
  return jwt.sign(
    { id: user.id, role: user.role },
    config.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }
  );
};

const verifyAccessToken = (token:string) => {
  return jwt.verify(token, config.ACCESS_TOKEN_SECRET);
};

const verifyRefreshToken = (token:string) => {
  return jwt.verify(token, config.REFRESH_TOKEN_SECRET);
};

export default {
  generateAccessToken,
  generateRefreshToken,
  verifyAccessToken,
  verifyRefreshToken,
};
