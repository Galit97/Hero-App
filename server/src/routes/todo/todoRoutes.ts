import express from 'express';
import { addTodo } from '../../controllers/todo/setTodo';
import { getTodos } from '../../controllers/todo/getTodo';
const router = express.Router();

router
    .post("/add-todo", addTodo)
    .get("/get-todos", getTodos);




export default router;