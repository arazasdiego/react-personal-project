import Product from '../models/Product.js';

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(200).json({
      success: true,
      data: products,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }
    return res.status(200).json({
      success: true,
      data: product,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
};

export const addProduct = async (req, res) => {
  try {
    const product = req.body;
    const newProduct = new Product({ ...product });

    await newProduct.save();
    return res.status(201).json({
      success: true,
      data: newProduct,
    });
  } catch (e) {
    if (e.name === 'ValidationError') {
      const messages = Object.values(e.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        message: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: 'Server error',
      });
    }
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'No product found',
      });
    }
    const updatedProduct = { name, description, price };
    await Product.findByIdAndUpdate(id, updatedProduct, { new: true });

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (e) {
    if (e.name === 'ValidationError') {
      const messages = Object.values(e.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        message: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: 'Server error',
      });
    }
  }
};
