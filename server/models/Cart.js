import mongoose from 'mongoose';

const CartSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: [true, 'Please put a product id'],
  },
  productName: {
    type: String,
    required: [true, 'Please put a product name'],
  },
  price: {
    type: Number,
    required: [true, 'Please enter a price'],
  },
  quantity: {
    type: Number,
    required: [true, 'Please enter a quantity'],
  },
});

export default mongoose.model('Cart', CartSchema);
