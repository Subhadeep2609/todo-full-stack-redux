import express from "express";
import { createTodo, deleteTodo, getAllTodo, getSingleTodo, updateTodo } from "../controller/todoController.js";

const todoRoute = express.Router();

todoRoute.post("/create",createTodo)
todoRoute.get("/getAll",getAllTodo)
todoRoute.get("/getById/:id",getSingleTodo)
todoRoute.delete("/delete/:id",deleteTodo)
todoRoute.put("/update/:id",updateTodo)

export default todoRoute;