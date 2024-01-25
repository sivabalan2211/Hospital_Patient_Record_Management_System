//creating HTTP Server
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const cons = require("consolidate");
const connectDB = require('./server/database/connection');
const session = require('express-session')
const{v4 :uuidv4} = require('uuid');
const app = express();

dotenv.config({path:'config.env'})
const PORT = process.env.PORT||8080

//log requests
app.use(morgan("tiny"));
//connect mongodb connect 
connectDB();




//parse request to body parser

app.use(bodyparser.urlencoded({extended :true}));

app.use(session({
    secret : uuidv4(),
    resave : false,
    saveUninitialized : true
}));
//set view enginee
 // app.set("view enginee",'html');
// app.set("views",path.resolve(__dirname,"views/html"));

// view engine setup
// app.engine('html', cons.swig)
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//load assests
app.use("/css",express.static(path.resolve(__dirname,"assests/css")));
app.use("/img",express.static(path.resolve(__dirname,"assests/img")));
app.use("/javascript",express.static(path.resolve(__dirname,"assests/javascript")));

//load router
app.use('/',require('./server/routes/route'));



app.listen("3000",()=>{
    console.log(`Server is running on :${PORT}`);
});