const mongoose = require('mongoose');

const user_Schema = new mongoose.Schema({
name:{
    type: String,
    required: true
},
password:{
    type: String,
    required: true
}
});

const User = mongoose.model("INSTA", user_Schema);
module.exports = User;