import express from 'express';
import { addRating } from '../../controllers/rating/setRatings';
import { getMyRatings, getRatings } from '../../controllers/rating/getRatings'; 

const router = express.Router();

router.post('/add-rating', addRating);
router.get('/my-ratings', getMyRatings);
router.get('/get-all-ratings', getRatings);

export default router;
