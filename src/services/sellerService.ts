import Product from "../entities/Product";
import User from "../entities/User";

const getSellerProducts = async (sellerId: number) => {
  return await Product.find({
    where: { seller: { id: sellerId } },
    relations: ["category"],
  });
};

const addProduct = async (sellerId: number, productData: any) => {
  const seller = await User.findOneBy({ id: sellerId });
  const product = Product.create({ ...productData, seller: seller });
  await product.save();
  return product;
};

const updateProduct = async (
  sellerId: number,
  productId: number,
  productData: any
) => {
  const product = await Product.findOne({
    where: { id: productId, seller: { id: sellerId } },
  });
  if (!product) throw new Error("Product not found");

  Object.assign(product, productData);
  await product.save();
  return product;
};

const deleteProduct = async (sellerId: number, productId: number) => {
  const product = await Product.findOne({
    where: { id: productId, seller: { id: sellerId } },
  });
  if (!product) throw new Error("Product not found");

  await product.remove();
};

export default {
  getSellerProducts,
  addProduct,
  updateProduct,
  deleteProduct,
};
