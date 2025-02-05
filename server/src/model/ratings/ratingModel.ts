import mongoose, { Schema, Document } from 'mongoose';

interface Rating extends Document {
    rating: number;
    hero: string;
    user: string;
}

const RatingSchema: Schema = new Schema({
    rating: { type: Number, required: true, min: 1, max: 5 },
    hero: { type: String, required: true },
    user: { type: String, required: true, unique: true }
}, {
    timestamps: true
});

const RatingModel = mongoose.model<Rating>('Rating', RatingSchema);

export default RatingModel;