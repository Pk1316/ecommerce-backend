import productService from '../services/productService.js';

export const addProduct = async (req, res) => {
  const { name, category, description, price, discount } = req.body;
  try {
    const product = await productService.addProduct({
      name,
      category,
      description,
      price,
      discount,
      sellerId: req.user.id,
    });
    res.status(201).json({ message: 'Product added', product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const editProduct = async (req, res) => {
  const { productId } = req.params;
  const updatedData = req.body;
  try {
    const product = await productService.editProduct(productId, updatedData);
    res.status(200).json({ message: 'Product updated', product });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
