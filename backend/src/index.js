import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

import connectDB from "./db/index.js";
import app from "./app.js";
import { Product } from "./models/product.models.js";

app.get("/", (req, res) => {
  res.status(200).json("Kimdo Pashmina");
});

// Test route to check DB connection and query
app.get("/test-db", async (req, res) => {
  try {
    // Check if the database returns some products (modify accordingly based on your DB schema)
    const products = await Product.find();
    res.status(200).json({
      status: "success",
      data: products, // This will return the product data from your database
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Database query failed",
      error: error.message,
    });
  }
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("error: ", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT}`);
    });
  })
  .catch((err) => console.log("MONGODB connection fail: ", err));
