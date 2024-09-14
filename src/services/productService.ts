import Category from "../entities/Category";
import Product from "../entities/Product";
const searchProducts = async ({ id, category, name }: any) => {
  var whereConditions: { id: any; category: any; name: any } = {
    category: undefined,
    name: undefined,
    id: undefined,
  };
  if (category)
    whereConditions.category = await Category.find({ where: { id: category } });
  if (id) whereConditions.name = id;
  if (name) whereConditions.name = name;
  return await Product.find({ where: whereConditions });
};
const searchProductById = async ({ id }: any) => {
  return await Product.findOne({ where: { id } });
};

export default { searchProducts, searchProductById };
