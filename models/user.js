const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/testapp1");

const userSchema=mongoose.Schema({
    name:String,
    email:String,
    imageurl:String
})

module.exports=mongoose.model('user',userSchema);