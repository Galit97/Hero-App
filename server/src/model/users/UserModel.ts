import { Schema, model } from 'mongoose';

export const UsersSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

export const UserModel = model("User", UsersSchema);
