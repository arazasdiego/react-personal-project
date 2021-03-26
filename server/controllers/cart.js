import Cart from '../models/Cart.js';

export const getCart = async (req, res) => {
  try {
    const cart = await Cart.find();
    return res.status(200).json({
      success: true,
      data: cart,
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
};

export const addToCart = async (req, res) => {
  try {
    const cart = req.body;
    const newCart = new Cart({ ...cart });

    await newCart.save();
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

export const updateCartItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { price, quantity } = req.body;

    const cartIem = await Cart.findById(id);
    if (!cartIem) {
      return res.status(404).json({
        success: false,
        message: 'No cart item found',
      });
    }

    const updatedCartItem = { price, quantity };
    await Cart.findByIdAndUpdate(id, updatedCartItem, { new: true });
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

export const deleteCartItem = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: 'No cart item found',
      });
    }
    await cart.remove();
    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
};
