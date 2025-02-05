import express from 'express';
import { addHero } from '../../controllers/hero/setHero';
import { getHeros } from '../../controllers/hero/getHero';
const router = express.Router();

router
    .post("/add-hero", addHero)
    .get("/get-hero", getHeros);




export default router;