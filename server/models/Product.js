import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Please add name'],
  },
  description: {
    type: String,
    trim: true,
    required: [true, 'Please add description'],
  },
  price: {
    type: Number,
    required: [true, 'Please enter number'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Product', ProductSchema);
