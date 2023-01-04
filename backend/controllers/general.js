import User from "../models/User.js";

export const getUser = async(req, res) => { // a request or req is where you get the params or body where the res is whats used to send back information to the frontend 
try { 
const { id } = req.params; //based on the params of the ID we will try to find the user and that will grab the info, if any errors send error block if not send info to frontend 
const user = await User.findById(id); // id comes from routes/general.js
res.status(200).json(user)
} catch(error) {
res.status(404).json({ message: error.message })
}
}