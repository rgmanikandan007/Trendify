const Product = require('../models/productModel')

exports.getProducts = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "This route will show all products in database"
    })
}

// Create Product - /api/v1/product/new
exports.newProduct = async (req, res, next) => {
  const product = await Product.create(req.body);
  res.status(201).json({
    success: true,
    product
  })
}  