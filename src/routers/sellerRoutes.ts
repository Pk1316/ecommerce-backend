import express from 'express';
import { getSellerProducts, addProduct, updateProduct, deleteProduct } from "../controllers/sellerController";
import { roleGuard } from "../middlewares/roleGuard";
import { validateInput } from "../utils/validateInput";
import { productSchema } from "../validators/productValidator";

const router = express.Router();

router.get('/products', roleGuard(['seller']), getSellerProducts);
router.post('/products', roleGuard(['seller']), (req, res, next) => {
  try {
    validateInput(productSchema, req.body);
    next();
  } catch (error) {
    next(error);
  }
}, addProduct);

router.put('/products/:productId', roleGuard(['seller']), updateProduct);
router.delete('/products/:productId', roleGuard(['seller']), deleteProduct);

export default router;
