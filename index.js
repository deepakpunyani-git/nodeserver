const http = require('http');
const express = require('express');
const app = express();
const path = require('path');
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix+'.png')
    }
  })
  
  const upload = multer({ storage: storage })

// set the view engine to ejs
app.set('view engine', 'ejs');
app.set('views',path.resolve("./views"));


const {connectDB} = require('./connection.js');
connectDB("mongodb://0.0.0.0:27017/myprojects").then((err) =>{
    console.log("mongoDB connected")
})


app.post('/uploads', upload.single('avatar'), function (req, res, next) {
    console.log(req.file, req.body)
    console.log(req.file)

    next();
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
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