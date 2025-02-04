import { Request, Response } from 'express';
import { TodoModel } from '../../model/todo/todoModel';

export function addTodo(req: Request, res: Response){
    try {
        const todo = req.body;

        const _todo = new TodoModel(todo);
        _todo.validateSync();
        _todo.save();
        
        res.status(201).json({message:"Todo created successfully"});


    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
}