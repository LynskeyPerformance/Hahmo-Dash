/*importing necessary dependencies*/
import express, { application } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';


import clientRoutes from "./routes/client.js"
import salesRoutes from "./routes/sales.js"
import generalRoutes from "./routes/general.js"
import managementRoutes from "./routes/management.js"

// data imports 
import User from "./models/User.js"
import Product from "./models/Product.js"
import ProductStat from "./models/ProductStat.js"
import { dataUser, dataProduct, dataProductStat } from "./data/index.js"

/*Configurations*/
dotenv.config();
const app = express(); // why do we need parenthesis after some configs but not others? -- Ans: shows that your dealing with functions, lets the compiler know to treat the line as a function
app.use(express.json())
app.use(helmet());
//the use of helmet with crossorigin is to protect the http calls from other servers 
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"})) //allows cross origin if you want to make api calls from other servers 
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())

/*Routes aka how the dashboard will be split by api*/
app.use("/client", clientRoutes); 
app.use("/sales", salesRoutes);
app.use("/general", generalRoutes);
app.use("/management", managementRoutes);

//defining port number
const PORT = process.env.API_PORT|| 8080;    
console.log("spinning up the server")


//connecting to mongo atlas database, if connects successfully it will console listen on port 
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
}).then(() => {
    //starting the server
app.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`);

// only add data one time, so we do not have duplicate data 
    //Product.insertMany(dataProduct)
   // ProductStat.insertMany(dataProductStat)
   // User.insertMany(dataUser); 
});
})
.catch((err) => {
    console.log("database connection failed. Server not started");
    console.error(err);
  }); 