
function timeLog(){
    return (req, res, next) => {
        console.log('Time:', Date.now())
        next();
        //return res.send("sdfsdf");
    }
}

module.exports  = {
    timeLog,
}
