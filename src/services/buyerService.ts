import Cart from "../entities/Cart.";
import Product from "../entities/Product.";
import createError from "http-errors";

const addToCart = async (userId, productId) => {
  const product = await Product.findOne({ where: { id: productId } });
  if (!product) {
    throw new createError.NotFound("Product not found");
  }

  let cartItem = await Cart.findOne({ where: { userId, productId } });

  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cartItem = Cart.create({ userId, productId, quantity: 1 });
  }

  await cartItem.save();

  return cartItem;
};

const removeFromCart = async (userId, productId) => {
  const cartItem = await Cart.findOne({ where: { userId, productId } });

  if (!cartItem) {
    throw createError.NotFound("Cart item not found");
  }

  await cartItem.remove();

  return { message: "Product removed from cart" };
};

export default { addToCart, removeFromCart };
