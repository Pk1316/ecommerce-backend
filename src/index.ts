import "reflect-metadata";
import express from "express";
import database from "./database";
import cors from "cors";
import config from "./config/config";
import exceptionHandlerMiddleware from "./middlewares/exceptionHandler";
import authMiddleware from "./middlewares/authMiddleware";

import authRoutes from "./routers/authRoutes";
import productRoutes from "./routers/productRoutes";
import buyerRoutes from "./routers/buyerRoutes";
import sellerRoutes from "./routers/sellerRoutes";
import categoryRoutes from "./routers/categoryRoutes";
// import { JwtPayload } from 'jsonwebtoken';

import * as types from "./custom.d";
import ApiResponse from "./utils/apiResponse";

const bootstrap = async () => {
  const expressApp = express();
  expressApp.use(express.json());
  expressApp.use(cors());

  await database();
  expressApp.get("/", (req, res) => {
    ApiResponse.sendSuccess(res, 200, null, "Api working 🚀");
  });
  expressApp.use("/api/auth", authRoutes);
  expressApp.use("/api/products", productRoutes);
  expressApp.use("/api/buyer", authMiddleware, buyerRoutes);
  expressApp.use("/api/seller", authMiddleware, sellerRoutes);
  expressApp.use("/api/categories", authMiddleware, categoryRoutes);

  expressApp.use(exceptionHandlerMiddleware);

  expressApp.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`);
  });
};

bootstrap();
