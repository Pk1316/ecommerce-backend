import categoryService from '../services/categoryService.js';
import ApiResponse from '../utils/ApiResponse.js';

export const getCategories = async (req, res) => {
  try {
    const categories = await categoryService.getCategories();
    ApiResponse.sendSuccess(res, 200, categories);
  } catch (error) {
    ApiResponse.sendError(res, 500, error.message);
  }
};

export const addCategory = async (req, res) => {
  try {
    const category = await categoryService.addCategory(req.body);
    ApiResponse.sendSuccess(res, 201, category, 'Category added successfully');
  } catch (error) {
    ApiResponse.sendError(res, 500, error.message);
  }
};

export const updateCategory = async (req, res) => {
  try {
    const category = await categoryService.updateCategory(req.params.categoryId, req.body);
    ApiResponse.sendSuccess(res, 200, category, 'Category updated successfully');
  } catch (error) {
    ApiResponse.sendError(res, 500, error.message);
  }
};

export const deleteCategory = async (req, res) => {
  try {
    await categoryService.deleteCategory(req.params.categoryId);
    ApiResponse.sendSuccess(res, 200, null, 'Category deleted successfully');
  } catch (error) {
    ApiResponse.sendError(res, 500, error.message);
  }
};
