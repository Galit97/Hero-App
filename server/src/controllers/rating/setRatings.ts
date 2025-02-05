import { Request, Response } from 'express';
import RatingModel from '../../model/ratings/ratingModel'; 

export const addRating = async (req: any, res:any) => {
    try {
        const { rating, hero, user } = req.body;

        if (!rating || !hero || !user) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        if (rating < 1 || rating > 5) {
            return res.status(400).json({ message: 'Rating must be between 1 and 5' });
        }

        const existingRating = await RatingModel.findOne({ hero, user });
        if (existingRating) {
            return res.status(400).json({ message: 'User has already rated this hero' });
        }

        const newRating = new RatingModel({ rating, hero, user });
        await newRating.save();

        res.status(201).json({ message: 'Rating added successfully', rating: newRating });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
