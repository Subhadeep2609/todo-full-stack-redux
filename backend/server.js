import express from "express";
import dotenv from "dotenv/config";
import dbConnect from "./src/config/dbConnect.js";
import todoRoute from "./src/route/todoRoute.js";
import cors from "cors";

const port = process.env.PORT
const app = express()

app.use(express.json());
app.use(cors())
app.use("/",todoRoute)
dbConnect()

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})


