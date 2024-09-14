import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";
import config from "../config/config";
import httpError from "http-errors";
import jwtUtils from "../utils/jwtUtils";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) next(new httpError.Unauthorized("Access token required"));

  try {
    const decoded = jwtUtils.verifyAccessToken(token!);
    req.user = decoded;
    next();
  } catch (err) {
    next(new httpError.Forbidden("Invalid access token"));
  }
};

export default authMiddleware;
