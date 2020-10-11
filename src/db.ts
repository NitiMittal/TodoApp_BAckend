import mongoose from "mongoose"

export class DB{

    constructor(){}

    public static connectionString: string ="mongodb://localhost:27017/TodoApp"
    public static ConnectMongoDB(){
        mongoose.connect(this.connectionString,(err)=>{
            if(err){
                console.log("error while connecting to mongodb");
            }else{
                console.log("Connected to MongoDB");
            }
        })
    }
}