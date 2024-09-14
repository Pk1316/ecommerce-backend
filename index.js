import 'reflect-metadata';
import express from "express";
import database from "./database.js";
import cors from "cors";
import config from "./config/config.js";
import exceptionHandlerMiddleware from "./middlewares/exceptionHandler.js";
import authMiddleware from "./middlewares/authMiddleware.js";

import authRoutes from "./routers/authRoutes.js";
import productRoutes from "./routers/productRoutes.js";
import buyerRoutes from "./routers/buyerRoutes.js";
import sellerRoutes from "./routers/sellerRoutes.js";
import categoryRoutes from "./routers/categoryRoutes.js";

const bootstrap = async () => {
  const expressApp = express();
  expressApp.use(express.json());
  expressApp.use(cors());

  await database();

  expressApp.use("/api/auth", authRoutes);
  expressApp.use("/api/products", authMiddleware, productRoutes);
  expressApp.use("/api/buyer", authMiddleware, buyerRoutes);
  expressApp.use("/api/seller", authMiddleware, sellerRoutes);
  expressApp.use('/api/categories', authMiddleware, categoryRoutes); 


  expressApp.use(exceptionHandlerMiddleware);

  expressApp.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`);
  });
};

bootstrap();
