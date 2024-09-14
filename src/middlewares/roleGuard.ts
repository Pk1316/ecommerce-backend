import { Request, Response, NextFunction } from "express";
import { JwtPayload } from "jsonwebtoken";

export const roleGuard = (requiredRoles: [string]) => (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = req.user  as JwtPayload;

  if (!user || !requiredRoles.includes(user.role)) {
    return res
      .status(403)
      .json({ message: "Access Forbidden: Insufficient permissions" });
  }
  next();
};
