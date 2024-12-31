const Todo = require('../model/sticky');
const {StatusCodes} = require('http-status-codes');


const addTodo = async (req, res, next) => {
    const {title, content} = req.body;
    try {
        const todo = new Todo(req.body);
        await todo.save();
        res.status(StatusCodes.CREATED).json({
            success: true,
            StatusCode:StatusCodes.CREATED,
            message:"Todo(s) sent successfully",
            data:{
                id: todo._id,
                title,
                content,
            }
        });
    } catch (error) {
        next(error);
    }
}

const displayTodos = async(req, res, next) => {
    const { title, content} = req.body;
    try {
        const todos = await Todo.find();
        if (!todos){
            res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                StatusCode:StatusCodes.NOT_FOUND,
                message:"No Todo(s) Found!",
                data:{}
            });
        }
        res.status(StatusCodes.OK).json({
            success: true,
            StatusCode:StatusCodes.OK,
            message:"Todo(s) displayed successfully",
            data:todos
        });
    } catch (error) {
       next(error);
    }
}

const displayTodo = async(req, res, next) =>{
    const { id } = req.params;
    try {
        const todo = await Todo.findById({_id:id});
        if(!todo){
            return res.status(StatusCodes.NOT_FOUND).json({
                success:false,
                StatusCode:StatusCodes.NOT_FOUND,
                message:"No Todo found",
                data:{}
            })
        }
        res.status(StatusCodes.OK).json({
            success: true,
            StatusCode:StatusCodes.OK,
            message:"Todo displayed successfully",
            data:{
                id: todo._id,
                title,
                content,
            }
        });

    } catch (error) {
        next(error);
    }
}

const updateTodo = async(req, res, next) => {
    const { id } = req.params;
    const { title, content} = req.body;
    try {
        const todo = await Todo.findByIdAndUpdate({_id: id}, {title, content}, {new: true});
        if(!todo){
            return res.status(StatusCodes.NOT_FOUND).json({
                success:false,
                StatusCode:StatusCodes.NOT_FOUND,
                message:`Todo not Found with the Id ${id}`,
                data:{}
            })
        }
        res.status(StatusCodes.OK).json({
            success:true,
            StatusCode:StatusCodes.OK,
            message:"Todo Updated Successfully",
            data:{
                id: todo._id,
                title,
                content,
            }
        })
    } catch (error) {
        next(error)
    }
}

const deleteTodo = async(req, res, next) => {
    const { id } = req.params;
    try {
        const todo = await Todo.findByIdAndDelete({_id: id});
        if(!todo){
            return res.status(StatusCodes.NOT_FOUND).json({
                success:false,
                StatusCode:StatusCodes.NOT_FOUND,
                message:`Todo not Found with the Id ${id}`,
                data:{}
            })
        }
        res.status(StatusCodes.OK).json({
            success:true,
            StatusCode:StatusCodes.OK,
            message:"Todo Deleted Successfully",
            data:todo
        })
    } catch (error) {
       next(error);
    }
}

module.exports = {addTodo, displayTodos, displayTodo, updateTodo, deleteTodo};