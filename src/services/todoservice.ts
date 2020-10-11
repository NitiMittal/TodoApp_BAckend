import express from "express"
import  {todoModel}   from "../models/todo"
import {ResponseService} from "../utils/ResponseService"

export class TodoService{
    constructor(){}
    public static async CreateTodo(req:any,res:express.Response){
        try{
         
            let todoItem=new todoModel(req.body);
            await todoItem.save();
            res.status(200).json({'todo': 'todo added successfully'});
        }
        catch(err){
            res.status(400).send("Adding new todo failed");
        }
    }

    public static async GetAllTodos(req:any, res:express.Response){
       
        try{
            
            let allTodos=await todoModel.find();
            res.status(200).json(allTodos);
        }
        catch(err){
            res.status(400).send(err);
        }
    }

        public static async GetTodoByID(req:express.Request,res:express.Response){
            try{
                let todo:any=await todoModel.findById(req.params.todoId);
                res.status(200).json(todo);
            }
            catch(err){
                res.status(400).send(err);
            }
        }
   public static async UpdateTodo(req:express.Request,res:express.Response){
        try{
            let todo:any=await todoModel.findById(req.params.todoId);
            if(!todo){
                res.status(404).send("data is not found");
            }
            todo.description=req.body.description;
            todo.title=req.body.title;
            todo.priority=req.body.priority;
            todo.completed=req.body.completed
            todo.save();
            res.json('Todo updated!');
        }
        catch(err){
            res.status(400).send("Update not possible");
        }
    }

    public static async DeleteTodo(req:express.Request,res:express.Response){
        try{
            let todo=await todoModel.findByIdAndDelete(req.params.todoId);
           res.json("Todo Deleted")
        }
        catch(err){
            res.status(400).send("Todo Cannot be deleted");
        }
    }

    
}