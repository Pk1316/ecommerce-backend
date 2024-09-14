import express from 'express';
import { searchProducts, addToCart, removeFromCart } from "../controllers/buyerController";

const router = express.Router();
 
router.get('/search', (req, res, next) => {
  try {
    searchProducts(req, res);
  } catch (error) {
    next(error);
  }
});
  
router.post('/cart', (req, res, next) => {
  try {
    addToCart(req, res);
  } catch (error) {
    next(error);
  }
});
 
router.delete('/cart', (req, res, next) => {
  try {
    removeFromCart(req, res);
  } catch (error) {
    next(error);
  }
});

export default router;
