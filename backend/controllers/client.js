import Product from "../models/Product.js"
import ProductStat from "../models/ProductStat.js"
//import User from "../models/User.js"

export const getProducts = async (req,res) => {
    try {
        const products = await Product.find() // cycling through all the products that are received
       
        const productsWithStats = await Promise.all( 
        products.map(async(product) => {
            // api call to the database 
            const stat = await ProductStat.find({ // for every single product we want to find the stat of it using the id
                productId: product._id
            })
            return { //then returning an array of objects with product and stat info combining into one big object 
                ...product._doc,
                stat, 
            }
        })
     );

       res.status(200).json(productsWithStats) //return to the frontend 
    } catch (error) {
        res.status(404).json({message: error.message}); 
    }
}

// essentially grabbing every product along with its id 