import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 60,
    },
    description: {
      type: String,
      required: true,
      maxLength: 160,
    },
    img: {
      type: String,
      required: true,
    },
    price: {
      type: [Number],
      required: true,
    },
    extraOptions: {
      type: [
        {
          text: { type: String, required: true },
          price: { type: Number, required: true },
        },
      ],
    },
  },
  { timestamps: true }
);
export default mongoose.models.Product || mongoose.model("Product", ProductSchema);

// it is used to check if it is already craeted model
// mongoose.models.Product  