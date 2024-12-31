const mongoose = require('mongoose');
const baseSchema = require('../model/todo');
const upcomingSchema = new mongoose.Schema(
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

upcomingSchema.add(baseSchema);
const upcoming = mongoose.model("Upcoming", upcomingSchema);
module.exports = upcoming;