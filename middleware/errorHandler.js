const {StatusCodes} = require('http-status-codes');

const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err);
    
    let error = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        message: err.message || "Something went wrong, please try again later"
    }
    return error;
}

module.exports = {errorHandlerMiddleware};