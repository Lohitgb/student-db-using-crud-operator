const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required: true,
    },
   last_name:{
        type: String,
        required: true,
    },
   middle_name :{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true,
    },
    state:{
        type: String,
        required: true,
    },
    pincode:{
        type: Number,
        default: 0,
    },
    dob:{
        type: Date,
        default: 0
    },
});

const User = mongoose.model("User",UserSchema);

module.exports = User;