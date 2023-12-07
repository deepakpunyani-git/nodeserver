const express = require('express');
const router = express.Router();


router.get("/", async (req,res) =>{
    console.log(req.body);
    return res.status(265).json({"name":"test"});
});

router.route("/:id").get(async (req,res) =>{
    return res.json({"name":"test","id":req.params.id});
}).delete(async (req,res) =>{
    return res.json({"name":"tdest","id":req.params.id});
}).patch(async (req,res) =>{
    return res.json({"name":"tpest","id":req.params.id});
}).post(async (req,res) =>{
    return res.json({"name":"teppst","id":req.params.id});
});
 

module.exports = router;