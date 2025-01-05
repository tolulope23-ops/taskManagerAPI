const express = require('express');
const cors = require("cors");
require('dotenv').config();

const connectDB = require('./db/config');
const todayRoute = require("./router/today");
const upcomingRoute = require("./router/upcoming");
const stickyRoute = require("./router/sticky");


const userRoute = require("./router/user");
const {errorHandlerMiddleware} = require('./middleware/errorHandler')

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/v2", userRoute);


app.use("/api/v2/today", todayRoute);
app.use("/api/v2/sticky", stickyRoute);
app.use("/api/v2/upcoming", upcomingRoute);

app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;

const server = async() => {
    try {
        await connectDB();
        app.listen(PORT, ()=>{
            console.log(`Server Listening at port ${PORT}`);
        })
    } catch (error) {
        console.log(error.message);
           
    }
}

server();