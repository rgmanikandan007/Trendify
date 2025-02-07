const products = require('../data/product.json')
const Product = require('../models/productModel')
const dotenv = require('dotenv')
const connectDatabase = require('../config/db')

dotenv.config({path:"config/config.env"})
connectDatabase()

const seedProducts = async () => {
    try{
        await Product.deleteMany();
        console.log("Products deleted")
        await Product.insertMany(products);
        console.log("All Products added!")
    } catch(err){
        console.log("error:", err.message)
    }
}

seedProducts();

