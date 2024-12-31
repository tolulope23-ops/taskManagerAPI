const mongoose = require('mongoose');
require('dotenv').config();

const DATABASE_URL = process.env.DATABASE_URL;
const connectDB = async (req, res) =>{
    try {
        await mongoose.connect(DATABASE_URL);
        console.log("Connected to Database");
    } catch (error) {
        console.log(error.message);
           
    }
}

module.exports = connectDB;