import Product from "../models/Product.js"
import ProductStat from "../models/ProductStat"
import User from "../models/User.js"

export const getProducts = async (req,res) => {
    try {
        const products = await Product.find(
        products.map(async(product) => {
            // api call to the database 
            const stat = await ProductStat.find({
                productId: product._id
            })
        })
        );

        const productsWithStats = await Promise.all(); 
    } catch (error) {
        res.status(404).json({message: error.message}); 
    }
}