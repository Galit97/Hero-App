import express from 'express';
import { addUser, login, register } from '../../controllers/users/setUserts';
const router = express.Router();

router.post("/add-user", addUser).post("/register", register).post("/login", login);


export default router