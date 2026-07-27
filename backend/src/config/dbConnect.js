import mongoose from "mongoose";
import dotenv from "dotenv/config"

const url = process.env.URL;

export default async function dbConnect(){
    try{
        await mongoose.connect(url);
        console.log("MongoDb connected")
    }catch(error){
        console.log("MongoDB not connected",error)
    }
}