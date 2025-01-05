const { StatusCodes } = require('http-status-codes');
const User = require('../model/user');


const signUp = async(req, res) => {
    const { firstName, lastName, email, password} = req.body;
    try {
        const userExist = await User.findOne({email});
        if(userExist){
            return res.status(StatusCodes.BAD_REQUEST).json({
                success:false,
                message:"User already has an Account!",
                data:{}
            });
        }
            const user = new User(req.body);
            await user.save();
            res.status(StatusCodes.CREATED).json({
                success:true,
                StatusCode:StatusCodes.CREATED,
                message:"User SignedUp successfully...",
                data:{
                    firstName,
                    lastName,
                    email,
                    password
                }
            });

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({
            success:false,
            StatusCode:StatusCodes.BAD_REQUEST,
            message:error.message,
            data:{}
        });
    }
};

const signIn = async(req, res) => {
    const {email, password} = req.body;
    try {
        const emailAlreadyExist = await User.findOne({email}); 
        if(!emailAlreadyExist){
            return res.status(404).json({
                status:StatusCodes.NOT_FOUND,
                message:"User does not exist",
                data:{}
            });
        } 
        if(password !== emailAlreadyExist.password){
            return res.status(400).json({
                status:StatusCodes.BAD_REQUEST,
                message:"Incorrect Password",
                data:{}
            }); 
        } 
            res.status(200).json({
               status:StatusCodes.OK,
                message:"User exist, LogedIn Successfully",
                data: {
                    email,
                    password
                }
            });
            
    } catch (error) {
        res.status(400).json({
            status:StatusCodes.BAD_REQUEST,
            message:error.message,
            data:{}
        });
}
}

module.exports = {signUp, signIn};