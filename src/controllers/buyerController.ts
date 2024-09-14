import buyerService from "../services/buyerService";

export const searchProducts = async (req, res) => {
  const { category, name } = req.query;
  try {
    const products = await buyerService.searchProducts({ category, name });
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addToCart = async (req, res) => {
  const { productId } = req.body;
  try {
    const cart = await buyerService.addToCart(req.user.id, productId);
    res.status(200).json({ message: 'Product added to cart', cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const removeFromCart = async (req, res) => {
  const { productId } = req.body;
  try {
    const cart = await buyerService.removeFromCart(req.user.id, productId);
    res.status(200).json({ message: 'Product removed from cart', cart });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
