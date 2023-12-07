const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:String,
    LastName:String
})

const Users = mongoose.model('test',userSchema);

module.exports = Users;