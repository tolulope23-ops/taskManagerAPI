const mongoose = require('mongoose');
const todaySchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required:true,
        },

        content:{
            type: String,
        },

        todoType:{
            type:String,
            required:true
        },

        dueDate:{
            type: Date,
            required: true
        }
    }
);

const today = mongoose.model("today", todaySchema);
module.exports = today; 
