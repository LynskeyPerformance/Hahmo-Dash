const express = require('express');
const http = require('http');
var helmet = require('helmet');// security headers 
//import { Logtail } from "@logtail/node";

/*
const cookieParser = require('cookie-parser');
const sessions = require('express-session');

var passport = require('passport');
var LocalStrategy = require('passport-local');
*/






//requiring path 
const path = require('path');

//mongoose creates the connection with the database 
const mongoose = require('mongoose');

require('dotenv').config();
//define that an express application is being created
var app = express();
app.use(helmet());
const authRoutes = require('./routes/authRoutes')
const cors = require('cors');

//winston logging




//defining port number
const PORT = process.env.API_PORT|| 8080    

//middleware , express.json parses incoming JSON requests and puts the parsed data in req.body bc u are sending data. think about a twitter post
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// register the routes
app.use("/api/auth", authRoutes);

console.log("spinning up the server")
const server = http.createServer(app)

//connecting to mongo atlas database, if connects successfully it will console listen on port 
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    //starting the server
server.listen(PORT, () =>{
    console.log(`listening on port ${PORT}`);
});
})
.catch((err) => {
    console.log("database connection failed. Server not started");
    console.error(err);
  });