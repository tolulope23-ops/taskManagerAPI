const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        firstName:{
            type: String,
            required:true,
        },

        lastName:{
            type: String
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