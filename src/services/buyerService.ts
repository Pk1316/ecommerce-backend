import Cart from "../entities/Cart";
import Product from "../entities/Product";
import createError from "http-errors";

export const getCartItems = async (userId: number) => {
  const cartItems = await Cart.find({
    where: { user: { id: userId } },
    relations:["product"]
  });

  return cartItems;
};

const addToCart = async (userId: number, productId: number) => {
  const product = await Product.findOne({ where: { id: productId } });
  if (!product) {
    throw new createError.NotFound("Product not found");
  }

  let cartItem = await Cart.findOne({
    where: { user: { id: userId }, product: { id: productId } },
  });

  if (cartItem) {
    cartItem.quantity += 1;
  } else {
    cartItem = Cart.create({
      user: { id: userId },
      product: { id: productId },
      quantity: 1,
    });
  }

  await cartItem.save();

  return cartItem;
};

const reduceProductQuatityFromCart = async (userId: number, productId: number) => {
  const cartItem = await Cart.findOne({
    where: { user: { id: userId }, product: { id: productId } },
  });

  if (!cartItem) {
    throw createError.NotFound("Cart item not found");
  } else {
    cartItem.quantity += 1;
  }

  await cartItem.save();

  return null
};

const removeFromCart = async (userId: number, productId: number) => {
  const cartItem = await Cart.findOne({
    where: { user: { id: userId }, id: productId },
  });

  if (!cartItem) {
    throw createError.NotFound("Cart item not found");
  }  

  await cartItem.remove();

  return null
};

export default { addToCart, removeFromCart , getCartItems,reduceProductQuatityFromCart };
