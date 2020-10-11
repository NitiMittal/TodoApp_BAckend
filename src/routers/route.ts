import express from "express"
import {TodoService} from "../services/todoservice"


export class Routes{
    constructor(){}
    public static RegisterAPIs(app:express.Application){
        
        app.get("/",TodoService.GetAllTodos);
        app.get("/:todoId",TodoService.GetTodoByID);
        app.post("/createTodo",TodoService.CreateTodo);
        
        app.delete("/todo/:todoId",TodoService.DeleteTodo);
        app.put("/todo/:todoId",TodoService.UpdateTodo);
        
        

    }
}