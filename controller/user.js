const { StatusCodes } = require('http-status-codes');
const user = require('../model/user');


const signUp = async(req, res) => {
    const { username, email, password } = req.body;
    try {
        let newUser = await user.findOne({email});
        if(newUser){
            return res.status(404).json({
                success:false,
                message:"User already has an account!",
                data:{}
            });
        }
            newUser = new user(req.body);
            await newUser.save();
            res.status(StatusCodes.CREATED).json({
                success:true,
                StatusCode:StatusCodes.CREATED,
                message:"User SignedUp successfully...",
                data:newUser
            });

    } catch (error) {
        console.log(error.message);
        res.status(StatusCodes.BAD_REQUEST).json({
            success:false,
            StatusCode:StatusCodes.BAD_REQUEST,
            message:error.message,
            data:{}
        });
    }
};

const logIn = async(req, res) => {
    const {email, password} = req.body;
    try {
        let userDetails = await user.findOne({email});
        const userPassword = userDetails.password;
        if(!userDetails){
            return res.status(404).json({
                success:false,
                message:"User does not exist",
                data:{}
            });
        } 
        if(password !== userPassword){
            return res.status(404).json({
                success:false,
                message:"Incorrect Password",
                data:{}
            }); 
        } 
            return res.status(200).json({
                success:true,
                message:"User exist, LogedIn Successfully",
                data:`Welcome ${userDetails.username}`
            });
            
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({
            success:false,
            StatusCode:StatusCodes.BAD_REQUEST,
            message:error.message,
            data:{}
        });
}
}

module.exports = {signUp, logIn};