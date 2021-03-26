import express from 'express';

import {
  getCart,
  addToCart,
  updateCartItem,
  deleteCartItem,
} from '../controllers/cart.js';

const router = express.Router();

router.get('/', getCart);
router.post('/', addToCart);
router.patch('/:id', updateCartItem);
router.delete('/:id', deleteCartItem);

export default router;
