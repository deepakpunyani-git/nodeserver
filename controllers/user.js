


async function users(req , res){
    //return res.status(265).json({"name":"test"});
    let users = [1,2,4,9,8,23,2,33];
    return res.render('home',{users:users});

}

async function singleuser(req , res){
    return res.json({"name":"test","idf":req.params.id});

}

async function updateuser(req , res){
    return res.json({"name":"updateuser","idf":req.params.id});

}

async function deleteuser(req , res){
    return res.json({"name":"delete","idf":req.params.id});

}


module.exports  = {
    users,
    singleuser,
    updateuser,
    deleteuser
}
