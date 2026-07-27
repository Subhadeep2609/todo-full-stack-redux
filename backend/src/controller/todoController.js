import todoSchema from "../model/todoSchema.js";

export const createTodo = async (req,res)=>{
    try{
        const {title} = req.body;
        const newTodo = await todoSchema.create({title});
        return res.status(201).json({
            success:true,
            message:"Todo created successfully",
            data:newTodo
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Todo not created"
        })
    }
}
export const getAllTodo = async (req,res)=>{
    try{
        const getAll = await todoSchema.find({});
        return res.status(200).json({
            success:true,
            message:"Todo fetched successfully",
            data:getAll
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Todo not fetched"
        })
    }
}
export const getSingleTodo = async (req,res)=>{
    try{
        const {id} = req.params;
        const getTodo = await todoSchema.findById({_id:id});
        if(!getTodo){
            return res.status(404).json({
                success:false,
                message:"Todo not found"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Todo fetched successfully",
            data:getTodo
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Todo not fetched"
        })
    }
}
export const deleteTodo = async (req,res)=>{
    try{
        const {id} = req.params;
        const delTodo = await todoSchema.findByIdAndDelete({_id:id});
        if(!delTodo){
            return res.status(404).json({
                success:false,
                message:"Todo not found"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Todo deleted successfully",
            data:delTodo
        })
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Todo not deleted"
        })
    }
}
export const updateTodo = async (req,res)=>{
    try{
        const {id} = req.params;
        const {title} = req.body
        const newTodo = await todoSchema.findByIdAndUpdate(id,{title:title},{new:true});
        if(!newTodo){
            return res.status(404).json({
                success:false,
                message:"Todo not found"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Todo updated successfully",
            data:newTodo
        });
    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Todo not updated"
        })
    }
}