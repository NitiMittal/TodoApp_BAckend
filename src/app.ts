import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import {DB} from "./db"
import {Routes} from "./routers/route"

class TodoApp{

    app:express.Application;

    constructor(){
        this.app=express();
        this.app.listen(7000,"localhost",()=>{
            console.log("Server listening on port 7000");
        })
        
        DB.ConnectMongoDB();
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended : false}));
        Routes.RegisterAPIs(this.app);
      
    }
}
let blog=new TodoApp();