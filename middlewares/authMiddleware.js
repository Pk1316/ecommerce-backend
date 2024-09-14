import jwt from "jsonwebtoken";
import config from "../config/config.js";
import httpError from "http-errors";
import jwtUtils from "../utils/jwtUtils.js";

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) next(new httpError.Unauthorized("Access token required"));

  try {
    const decoded = jwtUtils.verifyAccessToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    next(new httpError.Forbidden("Invalid access token"));
  }
};

export default authMiddleware;
