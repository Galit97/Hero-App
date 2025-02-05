import { Request, Response } from 'express';
import RatingModel from '../../model/ratings/ratingModel';

export const getRatings = async (req: any, res: any) => {
    try {
        const ratings = await RatingModel.find();
        res.status(200).json(ratings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

export const getMyRatings = async (req: any, res: any) => {
    try {
        const { user } = req.query;

        if (!user) {
            return res.status(400).json({ message: 'User ID is required' });
        }

        const ratings = await RatingModel.find({ user });
        res.status(200).json(ratings);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};
