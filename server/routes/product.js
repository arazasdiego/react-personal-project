import express from 'express';

import {
  getProducts,
  getProduct,
  addProduct,
  updateProduct,
} from '../controllers/product.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', addProduct);
router.patch('/:id', updateProduct);

export default router;
