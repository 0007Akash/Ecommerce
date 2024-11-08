import express from "express";
import connection from "./config/db.js";
import cors from "cors";
import dotenv from "dotenv";
import Product from "./model/product.Schema.js";
import Banner from "./model/banner.Schema.js";
dotenv.config();
const PORT = process.env.PORT || 4001;
const server = express();
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Server is running fine now");
});

server.post("/add-product", async (req, res) => {
  const {
    title,
    description,
    imgUrl,
    price,
    discountedPrice,
    discountPercentage,
    category,
    genderCategory,
    section,
    tags,
    inStock,
    sizesAvailable,
    colorsAvailable,
    ratings,
  } = req.body;

  try {
    // Create a new product instance using the Product model
    const newProduct = new Product({
      title,
      description,
      imgUrl,
      price,
      discountedPrice,
      discountPercentage,
      category,
      genderCategory,
      section,
      tags,
      inStock,
      sizesAvailable,
      colorsAvailable,
      ratings,
    });

    // Save the new product to the database
    await newProduct.save();

    // Send a success response
    res.status(201).json({
      message: "Product added successfully",
      product: newProduct,
    });
  } catch (error) {
    // Handle any errors
    console.error("Error adding product:", error);
    res.status(500).json({
      message: "Failed to add product",
      error: error.message,
    });
  }
});

server.get("/get-products", async (req, res) => {
  try {
    // Extract query parameters
    const {
      category,
      genderCategory,
      section,
      limit,
      page = 1,
      sortBy = "price",
      order = "asc",
    } = req.query;

    // Create a query object
    let query = {};

    // Add filters to the query if they are provided
    if (category) {
      query.category = category;
    }
    if (genderCategory) {
      query.genderCategory = genderCategory;
    }
    if (section) {
      query.section = section;
    }

    // Fetch products with pagination, sorting, and limit
    const limitValue = parseInt(limit) || 100; // Default limit to 10
    const skipValue = (parseInt(page) - 1) * limitValue; // Pagination skip value

    // Sort by the provided field and order
    const sortOptions = {};
    sortOptions[sortBy] = order === "desc" ? -1 : 1;

    // Fetch the products from the database
    const products = await Product.find(query)
      .sort(sortOptions)
      .limit(limitValue)
      .skip(skipValue);

    // Fetch the total number of products for pagination info
    const totalProducts = await Product.countDocuments(query);

    // Send a success response with products and pagination info
    res.status(200).json({
      totalProducts,
      currentPage: parseInt(page),
      totalPages: Math.ceil(totalProducts / limitValue),
      products,
    });
  } catch (error) {
    // Handle any errors
    console.error("Error fetching products:", error);
    res.status(500).json({
      message: "Failed to fetch products",
      error: error.message,
    });
  }
});

server.get("/get-product/:id", async (req, res) => {
  try {
    const { id } = req.params; // Extract the id from the URL

    // Fetch the product by ID from the database
    const product = await Product.findById(id);

    // If the product is not found, return a 404 status
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Send the product data
    res.status(200).json(product);
  } catch (error) {
    // Handle errors (like invalid ID format or other database issues)
    console.error("Error fetching product by ID:", error);
    res
      .status(500)
      .json({ message: "Failed to fetch product", error: error.message });
  }
});

// Add a new banner
server.post("/add-banner", async (req, res) => {
  try {
    const { imgUrl, section, manufacturerBrand } = req.body;

    // Create a new banner
    const newBanner = new Banner({
      imgUrl,
      section,
      manufacturerBrand,
    });

    // Save the banner to the database
    await newBanner.save();

    // Send a success response
    res.status(201).json({
      message: "Banner added successfully",
      banner: newBanner,
    });
  } catch (error) {
    console.error("Error adding banner:", error);
    res.status(500).json({
      message: "Failed to add banner",
      error: error.message,
    });
  }
});

server.get("/get-banner", async (req, res) => {
  try {
    const { section } = req.query;

    // Create a query object
    let query = {};

    // Add filter to the query if section is provided
    if (section) {
      query.section = section;
    }

    // Fetch the banners from the database
    const banners = await Banner.find(query);

    // Send a success response with banners
    res.status(200).json({
      banners,
    });
  } catch (error) {
    console.error("Error fetching banners:", error);
    res.status(500).json({
      message: "Failed to fetch banners",
      error: error.message,
    });
  }
});

server.listen(PORT, async () => {
  try {
    await connection;
    console.log(`Server is running on port ${PORT} and connected to database`);
  } catch (error) {
    console.log(
      `Error while running server and connecting database ${error.message}`
    );
  }
});
