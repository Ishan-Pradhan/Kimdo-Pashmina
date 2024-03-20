import mongoose, { Schema } from "mongoose";

const generalCategory = ["shawl", "muffler", "poncho", "blanket"];
const genderCategory = ["men", "women"];

const productSchema = new Schema(
  {
    productImg: {
      type: String,
    },
    productName: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    generalCategory: {
      type: String,
      enum: generalCategory,
      default: "shawl",
    },
    genderCategory: {
      type: String,
      enum: genderCategory,
      default: "women",
    },
    stock: {
      type: Number,
      default: 1,
      required: true,
    },
    composition: {
      type: String,
      required: true,
    },
    weight: {
      type: String,
      rquired: true,
    },
    size: {
      type: String,
      required: true,
    },
    quantitySold: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
