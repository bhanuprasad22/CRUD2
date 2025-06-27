import { todo } from '../models/todo.js';

//create
export const createtodo = async (req, res) => {
    try {
        const { title, description } = req.body;
        const newtodo = await todo.create({ title, description });
        res.status(201).json(newtodo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//read all

export const gettodo=async (req,res) => {
    try {
        const todos=await todo.find();
        res.status(201).json(todos)
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
//read one
export const gettodobyid = async (req, res) => {
    try {
        const singleTodo = await todo.findById(req.params.id);
        res.status(201).json(singleTodo);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

//update
export const updatetodo = async (req, res) => {
    try {
        const updated = await todo.findByIdAndUpdate(req.params.id,req.body,{ new: true });
        res.status(201).json(updated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
//delete
export const deletetodo = async (req, res) => {
    try {
        const deleted = await todo.findByIdAndDelete(req.params.id);
        res.status(201).json({ message: "Todo deleted" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};