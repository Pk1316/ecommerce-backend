import { JwtPayload } from "jsonwebtoken";
import sellerService from "../services/sellerService";
import ApiResponse from "../utils/apiResponse";
import createError from 'http-errors'
import { Request,Response, NextFunction } from "express";

export const getSellerProducts = async (req:Request, res:Response) => {
  try {
    const products = await sellerService.getSellerProducts((req.user as JwtPayload).id);
    ApiResponse.sendSuccess(res, 200, products);
  } catch (error:any) {
    ApiResponse.sendError(res, 500, error.message);
  }
};

export const addProduct = async (req:Request, res:Response) => {
  try {
    
    const product = await sellerService.addProduct((req.user as JwtPayload).id, req.body);
    ApiResponse.sendSuccess(res, 201, product, 'Product added successfully');
  } catch (error:any) {
    ApiResponse.sendError(res, 500, error.message);
  }
};

export const updateProduct = async (req:Request, res:Response) => {
  try {
    const {productId}= req.params;
    if(!productId) throw new createError.BadRequest("Product id missing")
    const product = await sellerService.updateProduct((req.user as JwtPayload).id,Number(productId), req.body);
    ApiResponse.sendSuccess(res, 200, product, 'Product updated successfully');
  } catch (error:any) {
    ApiResponse.sendError(res, 500, error.message);
  }
};

export const deleteProduct = async (req:Request, res:Response) => {
  try {
    const {productId}= req.params;
    if(!productId) throw new createError.BadRequest("Product id missing")
    await sellerService.deleteProduct((req.user as JwtPayload).id,Number(productId));
    ApiResponse.sendSuccess(res, 200, null, 'Product deleted successfully');
  } catch (error:any) {
    ApiResponse.sendError(res, 500, error.message);
  }
};
