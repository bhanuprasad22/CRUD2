import mongoose from 'mongoose';

const todoschema= new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description : String,
    completed : {
        type : Boolean,
        default : false
    }
},{
    timestamps : true
})


export const todo=mongoose.model("todo",todoschema);