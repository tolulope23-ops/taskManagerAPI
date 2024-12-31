const mongoose = require('mongoose');
const baseSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required:true,
        },

        content:{
            type: String,
        },

        createdAt:{
            type:Date,
            default:Date.now
        },
        
        discriminator:{
            type:String,
            enum:['upcoming','today', 'sticky']
        }
    },

    {timestamps: true}
);

module.exports = baseSchema;