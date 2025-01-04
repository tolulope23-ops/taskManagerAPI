const mongoose = require('mongoose');
const upcomingSchema = new mongoose.Schema(
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

const upcoming = mongoose.model("Upcoming", upcomingSchema);
module.exports = upcoming;