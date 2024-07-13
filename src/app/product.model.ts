import { model, Schema } from "mongoose";

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: [20, "Name can not be more than 20 characters"],
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  ratings: {
    type: Number,
    required: false,
    default: 5.0,
  },
  quantity: {
    type: Number,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

export const Product = model("Product", ProductSchema);
