const http = require('http');
const express = require('express');
const app = express();
app.use(express.urlencoded({extended:false}))
app.use((req, res, next) => {
    console.log('Time:', Date.now())
    next()
    //return res.send("sdfsdf");

  })
const PORT = 8080;
const users = [
    [1,'Sada','Oloshkin','soloshkin0@geocities.jp','Female'],
    [2,'Vance','Showalter','vshowalter1@nature.com','Male'],
    [3,'Adan','McLice','amclice2@whitehouse.gov','Female'],
    [4,'Benjy','Lohoar','blohoar3@issuu.com','Male'],
    [5,'Ario','Pynner','apynner4@moonfruit.com','Male'],
    [6,'Alva','Trevan','atrevan5@lycos.com','Genderfluid'],
]

app.get("/",(req,res) =>{
    return res.send("Hocme");
});

app.get("/about",(req,res) =>{
    return res.send("about pageh");
});


app.get("/apis/users",(req,res) =>{
    console.log(req.body);
    return res.status(265).json(users);
});

// app.get("/apis/users/:id",(req,res) =>{
//     return res.json({"name":"test","id":req.params.id});
// });
 
// app.delete("/apis/users/:id",(req,res) =>{
//     return res.json({"name":"test","id":req.params.id});
// });
 
// app.patch("/apis/users/:id",(req,res) =>{
//     return res.json({"name":"test","id":req.params.id});
// });

// app.post("/apis/users/:id",(req,res) =>{
//     return res.json({"name":"test","id":req.params.id});
// });


app.route("/apis/users/:id").get((req,res) =>{
    return res.json({"name":"test","id":req.params.id});
}).delete((req,res) =>{
    return res.json({"name":"tdest","id":req.params.id});
}).patch((req,res) =>{
    return res.json({"name":"tpest","id":req.params.id});
}).post((req,res) =>{
        return res.json({"name":"teppst","id":req.params.id});
    });
 

// const FinalServer = http.createServer(app);

// FinalServer.listen(PORT,(req, res) => {
//     console.log(`http://localhost:${PORT}/`);
// });

app.listen(PORT,(req, res) => {
    console.log(`http://localhost:${PORT}/`);
});