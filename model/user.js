const mongoose = require('mongoose');
// const validator = require('validator');
const userSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            required:true,
        },

        email: {
            type:String,
            required:true,
            unique:true,
        },
        
        password:{
            type:String,
            required: true,
           
        }
    }
);

const user = new mongoose.model("user", userSchema);
module.exports = user;