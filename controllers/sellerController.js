import sellerService from '../services/sellerService.js';
import ApiResponse from '../utils/ApiResponse.js';

export const getSellerProducts = async (req, res) => {
  try {
    const products = await sellerService.getSellerProducts(req.user.id);
    ApiResponse.sendSuccess(res, 200, products);
  } catch (error) {
    ApiResponse.sendError(res, 500, error.message);
  }
};

export const addProduct = async (req, res) => {
  try {
    const product = await sellerService.addProduct(req.user.id, req.body);
    ApiResponse.sendSuccess(res, 201, product, 'Product added successfully');
  } catch (error) {
    ApiResponse.sendError(res, 500, error.message);
  }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await sellerService.updateProduct(req.user.id, req.params.productId, req.body);
    ApiResponse.sendSuccess(res, 200, product, 'Product updated successfully');
  } catch (error) {
    ApiResponse.sendError(res, 500, error.message);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await sellerService.deleteProduct(req.user.id, req.params.productId);
    ApiResponse.sendSuccess(res, 200, null, 'Product deleted successfully');
  } catch (error) {
    ApiResponse.sendError(res, 500, error.message);
  }
};
