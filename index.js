const http = require('http');
const PORT = 8080;
//const mFun =  require('./MathsFun');
const {minus,sums} =  require('./MathsFun');
const url = require('url'); 

const FinalServer = http.createServer((req, res) => {
    // res.writeHead(200, {'Content-Type': 'text/plain'});
    console.log("Server Run",req.url);
    //console.log(`${mFun}`);
    //console.log(mFun(5,8));
    //console.log(mFun.sums(5,8));
    console.log(minus(5,8));
    console.log(url.parse(req.url))

    if(req.url == "/" || req.url == "/home"){
        res.write('Home Page');

    }else if( req.url == "/about"){
        res.write('About Page');

    }else{
        res.write('404 Page');
    }
    res.end("Server End");
});

FinalServer.listen(PORT,(req, res) => {
    console.log(`http://localhost:${PORT}/`);
});