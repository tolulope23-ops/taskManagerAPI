const mongoose = require('mongoose');
const baseSchema = require('../model/todo');
const todaySchema = new mongoose.Schema(
    {
        todoType:{
            type:String,
            required:true
        },

        dueDate:{
            type: Date,
            required: true
        }
    },

    {timestamps: true}
);

todaySchema.add(baseSchema);
const today = mongoose.model("today", todaySchema);
module.exports = today; 
