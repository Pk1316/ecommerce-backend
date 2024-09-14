import express from "express";
import {
  searchProductById,
  searchProducts,
} from "../controllers/productController";
import { validateInput } from "../utils/validateInput";
import { productSchema } from "../validators/productValidator";

const router = express.Router();


router.get("/", (req, res, next) => {
  try {
    searchProducts(req, res);
  } catch (error) {
    next(error);
  }
});


router.get("/:id", (req, res, next) => {
  try {
    searchProductById(req, res);
  } catch (error) {
    next(error);
  }
});
export default router;
