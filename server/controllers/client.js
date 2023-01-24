import Product from "../models/Product.js"
import ProductStat from "../models/ProductStat.js"
import Transaction from "../models/Transaction.js"
import User from "../models/User.js"
import getCountryIso3 from "country-iso-2-to-3"

export const getProducts = async (req, res) => {
    try {
      const products = await Product.find();
  
      const productsWithStats = await Promise.all(
        products.map(async (product) => {
          const stat = await ProductStat.find({
            productId: product._id,
          });
          return {
            ...product._doc,
            stat,
          };
        })
      );
  
      res.status(200).json(productsWithStats);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  export const getCustomers = async(req,res) => {
    try {
      const customers = await User.find({ role: "user" }).select("-password"); // minus password so we dont send it to the frontend 

      res.status(200).json(customers);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  // essentially getting all that information from mongodb and sending it to the frontend 
  export const getTransactions = async (req, res) => {
    try {
      const {page = 1, pageSize = 20, sort = null, search = "" } = req.query
      const generateSort = () => {
        const sortParsed = JSON.parse(sort); // parse into object
        // then create object 
        const sortFormatted = {
          [ sortParsed.field ]: sortParsed.sort = 'asc' ? 1 : -1 
        }; 
        return sortFormatted;
      }
      const sortFormatted = Boolean(sort) ? generateSort() : {}

      const transactions = await Transaction.find({
        $or: [
          { cost: { $regex: new RegExp(search, "i") } },
          { cost: { $regex: new RegExp(search, "i") } }
        
        ], //search the cost of the value 
      })
      .sort(sortFormatted)
      .skip(page * pageSize)
      .limit(pageSize)

const total = await Transaction.countDocuments(({
  name: { $regex: search, $options: "i"}
}))



      res.status(200).json({
        transactions,
        total
      });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
// essentially grabbing every product along with its id 

export const getGeography = async (req, res) => {
  try {
    const users = await User.find();

    const mappedLocations = users.reduce((acc, { country }) => {
    const countryISO3 = getCountryIso3(country)
    if (!acc[countryISO3]){ 
    acc[countryISO3] = 0; 
    }
    acc[countryISO3]++ 
    return acc;
    }, {})

    const formattedLocations = object.entries(mappedLocations).map(
      ([ country, count ]) => {
        return { id: country, value: count }
      }
    )
    res.status(200).json(formattedLocations);
    
  } catch(error){
    res.status(404).json({ message: error.message })
  }
}