import { Product } from "../models/product.models.js";

import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const createProduct = async (req, res) => {
  try {
    const {
      productName,
      description,
      price,
      discount,
      featured,
      generalCategory,
      genderCategory,
      composition,
      weight,
      stock,
      size,
    } = req.body;

    console.log(productName, description, weight, stock);

    //validating
    // const requiredFields = [productName, description, price];
    // if (requiredFields.some((field) => !field)) {
    //   throw new ApiError(400, "Missing required fields");
    // }

    const existedProduct = await Product.findOne({ productName });
    if (existedProduct) {
      return res
        .status(400)
        .send({ message: "product with same name existed" });
    }
    const productImgLocalPath = req.files?.productImg[0]?.path;
    console.log(productImgLocalPath);

    if (!productImgLocalPath)
      return res.status(400).send({ message: "product image is required" });

    const productImg = await uploadOnCloudinary(productImgLocalPath);

    const newProduct = await Product.create({
      productImg: productImg.url,
      productName,
      description,
      price,
      discount,
      featured,
      generalCategory,
      genderCategory,
      composition,
      size,
      stock,
      weight,
    });

    res.status(200).send({
      success: true,
      message: "Product created successfullly",
      newProduct,
    });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).send({ message: "Problem creating the product" });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const getProductsById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).send({ message: "Product not found" });
    }

    res.status(200).send(product);
  } catch (error) {
    res.status(500).send("internal server error");
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).send({
      success: true,
      message: "product deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error deleting product",
      error,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const {
      productName,
      description,
      price,
      discount,
      featured,
      generalCategory,
      genderCategory,
      composition,
      weight,
      stock,
      size,
    } = req.body;

    const existingProduct = await Product.findById(req.params.id);
    if (!existingProduct) {
      return res.status(404).send({ message: "Product not found" });
    }

    const productImgLocalPath = req.files?.productImg?.[0]?.path;
    if (!productImgLocalPath) {
      existingProduct.productImg = existingProduct.productImg;
    }

    let productImg;

    if (productImgLocalPath) {
      productImg = await uploadOnCloudinary(productImgLocalPath);
      existingProduct.productImg = productImg.url;
    }

    existingProduct.productName = productName;
    existingProduct.description = description;
    existingProduct.price = price;
    existingProduct.discount = discount;
    existingProduct.featured = featured;
    existingProduct.generalCategory = generalCategory;
    existingProduct.genderCategory = genderCategory;
    existingProduct.composition = composition;
    existingProduct.size = size;
    existingProduct.stock = stock;
    existingProduct.weight = weight;

    const updatedProduct = await existingProduct.save();

    res.status(200).send({
      success: true,
      message: "Product updated successfully",
      updatedProduct,
    });
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).send({ message: "Problem updating the product" });
  }
};

const newArrivalProduct = async (req, res) => {
  try {
    const oneMonthAgo = new Date();
    oneMonthAgo.setDate(oneMonthAgo.getDate() - 30);
    const newArrivalProducts = await Product.find({
      createdAt: { $gte: oneMonthAgo },
    })
      .sort({ createdAt: -1 })
      .limit(10)
      .exec();
    res.send(newArrivalProducts);
  } catch (error) {
    res.status(500).send({ message: "Problem finding new arrivals product" });
  }
};

// const bestSellers = async (req, res) => {
//   try {
//     const orders = await Order.find();

//     const productSalesMap = new Map();

//     orders.forEach((order) => {
//       order.products.forEach((productData) => {
//         const productId = productData.identity;

//         if (productSalesMap.has(productId)) {
//           productSalesMap.set(
//             productId,
//             productSalesMap.get(productId) + productData.quantity
//           );
//         } else {
//           productSalesMap.set(productId, productData.quantity);
//         }
//       });
//     });

//     const productSalesArray = [...productSalesMap.entries()].map(
//       ([productId, quantitySold]) => ({
//         productId,
//         quantitySold,
//       })
//     );

//     productSalesArray.sort((a, b) => b.quantitySold - a.quantitySold);

//     const topSellingProducts = [];
//     for (let i = 0; i < Math.min(productSalesArray.length, 10); i++) {
//       const productData = productSalesArray[i];
//       const product = await Product.findById(productData.productId);
//       if (product) {
//         topSellingProducts.push({
//           productName: product.productName,
//           quantitySold: productData.quantitySold,
//         });
//       }
//     }

//     res.status(200).send(topSellingProducts);
//   } catch (error) {
//     console.error("Error retrieving top-selling products:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

export {
  createProduct,
  getProducts,
  getProductsById,
  deleteProduct,
  updateProduct,
  newArrivalProduct,
};
