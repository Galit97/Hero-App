import { error } from "console";
import { TodoModel } from "../../model/todo/todoModel";
import { Request, Response } from "express";

export async function getTodos(req: Request, res: Response) {
    try {
        const todos = await TodoModel.find();
        if (todos) {
            res.status(200).json({todos});
        } else {
            res.status(404).json({ message: "No todos found", error:"Not found" });
    }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}