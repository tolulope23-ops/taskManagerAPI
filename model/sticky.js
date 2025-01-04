const mongoose = require('mongoose');
const stickyschema = new mongoose.Schema(
    {
        title:{
            type: String,
            required:true,
        },

        content:{
            type: String,
            required:true
        }
    }
);

const sticky = mongoose.model("sticky", stickyschema);
module.exports = sticky; 