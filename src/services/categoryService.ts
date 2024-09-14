import Category from "../entities/Category";
import { categorySchema } from "../validators/categoryValidator";

const getCategories = async () => {
  return await Category.find();
};

const addCategory = async (categoryData: any) => {
  const { name, description } = categoryData;
  const category = Category.create({ name, description });
  await category.save();
  return category;
};

const updateCategory = async (categoryId: number, categoryData: any) => {
  const category = await Category.findOne({ where: { id: categoryId } });
  if (!category) throw new Error("Category not found");

  Object.assign(category, categoryData);
  await category.save();
  return category;
};

const deleteCategory = async (categoryId: number) => {
  const category = await Category.findOne({ where: { id: categoryId } });
  if (!category) throw new Error("Category not found");

  await category.remove();
};

export default {
  getCategories,
  addCategory,
  updateCategory,
  deleteCategory,
};
