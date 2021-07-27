import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    content: { type: String, required: true },

  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model('Product', postSchema);

export default Product;
