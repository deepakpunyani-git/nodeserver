const http = require('http');
const express = require('express');
const app = express();

const {connectDB} = require('./connection.js');
connectDB("mongodb://0.0.0.0:27017/myprojects")


const {timeLog} = require('./middlewares');
app.use(express.urlencoded({extended:false}))
app.use(timeLog());


const userRoutes = require('./routes/user');
app.use("/user",userRoutes);


const PORT = 8080;
app.listen(PORT,(req, res) => {
    console.log(`http://localhost:${PORT}/`);
});