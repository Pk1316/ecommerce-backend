import { JwtPayload } from "jsonwebtoken";
import productService from "../services/productService";
// import sellerService from "../services/sellerService";
import createError from "http-errors";
import { Request, Response, NextFunction } from "express";
import ApiResponse from "../utils/apiResponse";

export const searchProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.searchProducts(req.body);
    ApiResponse.sendSuccess(res, 200, products, "Product fectched");
  } catch (error:any) {
    ApiResponse.sendError(res, 400, error.message);
  }
};

export const searchProductById = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!id) throw new createError.BadRequest("please provides product-id");
  try {
    const product = await productService.searchProductById(id);
    if (!product) throw new createError.NotFound("product not found");
 
    ApiResponse.sendSuccess(res, 201, product, "Product fetched successfully");
  } catch (error:any) {
    ApiResponse.sendError(res, 400, error.message);
  }
};
