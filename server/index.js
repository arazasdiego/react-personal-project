import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import mongoDbConnect from './config/db.js';
import products from './routes/product.js';
import cart from './routes/cart.js';

dotenv.config({ path: './config/config.env' });
mongoDbConnect();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/products', products);
app.use('/cart', cart);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on PORT: ${PORT}`.yellow.bold));
