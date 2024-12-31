const mongoose = require('mongoose');
const baseSchema = require('./todo');
const stickyschema = new mongoose.Schema(
    {
        updatedAt:{
            type:Date,
            default:Date.now
        }
    }
);
stickyschema.add(baseSchema);
const sticky = mongoose.model("sticky", stickyschema);
module.exports = sticky; 