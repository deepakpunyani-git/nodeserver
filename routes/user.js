const express = require('express');
const router = express.Router();
const { users,singleuser , updateuser , deleteuser } = require('../controllers/user');


router.get("/", users);

router.route("/:id").get(singleuser).delete(deleteuser).patch(updateuser).post(async (req,res) =>{
    return res.json({"name":"teppst","id":req.params.id});
});
 

module.exports = router;