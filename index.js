const http = require('http');
const express = require('express');
const app = express();
const path = require('path');

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views',path.resolve("./views"));


const {connectDB} = require('./connection.js');
connectDB("mongodb://0.0.0.0:27017/myprojects").then((err) =>{
    console.log("mongoDB connected")
})


const {timeLog} = require('./middlewares');
app.use(express.urlencoded({extended:false}))
app.use(timeLog());


const userRoutes = require('./routes/user');
app.use("/user",userRoutes);


const PORT = 8080;
app.listen(PORT,(req, res) => {
    console.log(`http://localhost:${PORT}/`);
});