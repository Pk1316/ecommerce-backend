import express from 'express';
import { getCategories, addCategory, updateCategory, deleteCategory } from "../controllers/categoryController";
import { adminGuard } from "../middlewares/adminGuard";
import { validateInput } from "../utils/validateInput";
import { categorySchema } from "../validators/categoryValidator";
import { Request,Response, NextFunction } from "express";

const router = express.Router();

router.get('/', getCategories);
router.post('/',adminGuard, (req:Request, res:Response, next:NextFunction) => {
  try {
    validateInput(categorySchema, req.body);
    next();
  } catch (error) {
    next(error);
  }
}, addCategory);

router.put('/:categoryId', adminGuard,updateCategory);
router.delete('/:categoryId', adminGuard, deleteCategory);

export default router;
