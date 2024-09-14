import categoryService from "../services/categoryService";
import ApiResponse from "../utils/apiResponse";
import { Request, Response, NextFunction } from "express";
import createError from "http-errors";

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await categoryService.getCategories();
    ApiResponse.sendSuccess(res, 200, categories);
  } catch (error:any) {
    ApiResponse.sendError(res, 500, error.message);
  }
};

export const addCategory = async (req: Request, res: Response) => {
  try {
    const category = await categoryService.addCategory(req.body);
    ApiResponse.sendSuccess(res, 201, category, "Category added successfully");
  } catch (error:any) {
    ApiResponse.sendError(res, 500, error.message);
  }
};

export const updateCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;
    if (!categoryId)
      throw new createError.BadRequest("Please provide caategory id");
    const category = await categoryService.updateCategory(
      Number(categoryId),
      req.body
    );
    ApiResponse.sendSuccess(
      res,
      200,
      category,
      "Category updated successfully"
    );
  } catch (error:any) {
    ApiResponse.sendError(res, 500, error.message);
  }
};

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;
    if (!categoryId)
      throw new createError.BadRequest("Please provide caategory id");
   
    await categoryService.deleteCategory(Number(categoryId));
    ApiResponse.sendSuccess(res, 200, null, "Category deleted successfully");
  } catch (error:any) {
    ApiResponse.sendError(res, 500, error.message);
  }
};
