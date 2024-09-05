import mongoose from "mongoose";
const { Schema } = mongoose;

// Define the schema for a product
const productSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    imgUrl: { type: String, required: true },
    price: { type: Number, required: true },
    discountedPrice: { type: Number },
    discountPercentage: { type: Number },
    category: { type: String, required: true }, // E.g., T-shirts, Mobile Covers, etc.
    genderCategory: { type: String, required: true }, // E.g., Men, Women, Unisex, Kids
    section: { type: String, required: true }, // E.g., Top Sellers, New Arrivals, Best Picks, etc.
    tags: [String], // E.g., "Trending", "Limited Edition", etc.
    inStock: { type: Boolean, default: true },
    sizesAvailable: [String], // E.g., ["S", "M", "L", "XL"]
    colorsAvailable: [String], // E.g., ["Red", "Blue", "Black"]
    ratings: {
      averageRating: { type: Number, default: 0 },
      totalReviews: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
