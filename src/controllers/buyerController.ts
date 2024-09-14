import { JwtPayload } from "jsonwebtoken";
import buyerService from "../services/buyerService";
import productService from "../services/productService";
import { Request, Response, NextFunction } from "express";
import ApiResponse from "../utils/apiResponse";
import createError from 'http-errors'

export const searchProducts = async (req: Request, res: Response) => {
  const { category, name ,id} = req.query;
  try {
    const products = await productService.searchProducts({ id,category, name });
    
    ApiResponse.sendSuccess(
      res,
      200,
      products,
      "Prpducts fetched successfully"
    );
  } catch (error:any) {
    ApiResponse.sendError(res, 500, error.message);
  }
};
export const getCartItems = async (req: Request, res: Response) => {
  try {
    const user = req.user as JwtPayload;
    const products = await buyerService.getCartItems(user.id)
    
    ApiResponse.sendSuccess(
      res,
      200,
      products,
      "Products fetched successfully"
    );
  } catch (error:any) {
    ApiResponse.sendError(res, 500, error.message);
  }
};

export const addToCart = async (req: Request, res: Response) => {
  const { productId } = req.body;
  try {
    const cart = await buyerService.addToCart(
      (req.user as JwtPayload).id,
      productId
    );
     
    ApiResponse.sendSuccess(
      res,
      200,
      cart,
     "Product added to cart"
    );
  } catch (error:any) {
    ApiResponse.sendError(res, 500, error.message);
  }
};

export const reduceProductQuatityFromCart = async (req: Request, res: Response) => {
  const { productId } = req.body;
  try {
    const cart = await buyerService.reduceProductQuatityFromCart(
      (req.user as JwtPayload).id,
      productId
    );
   ApiResponse.sendSuccess(
      res,
      200,
      cart,
      "Product removed from cart"
    );
  } catch (error:any) {
    ApiResponse.sendError(res, 500, error.message);
  }
};

export const removeFromCart = async (req: Request, res: Response) => {
  const { productId } = req.params;
  try {
    if(!productId) throw new createError.BadRequest("Please pass Product id")
      
    const cart = await buyerService.removeFromCart(
      (req.user as JwtPayload).id,
      Number(productId)
    );
   ApiResponse.sendSuccess(
      res,
      200,
      cart,
      "Product removed from cart"
    );
  } catch (error:any) {
    ApiResponse.sendError(res, 500, error.message);
  }
};
