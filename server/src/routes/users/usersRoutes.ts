import express from 'express';
import { login, register } from '../../controllers/users/setUser';
import { getUserById, getAllUsers } from '../../controllers/users/getUser';

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/:id", getUserById);
router.get("/", getAllUsers);

export default router;
