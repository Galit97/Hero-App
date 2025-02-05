import { stat } from "fs";
import { model, Schema } from "mongoose";

export const HeroSchema = new Schema({
  name: { type: String, required: true },
  ImageUrl: { type: String, required: true },
  Role: { type: String, required: true },
  Rating: { type: String, required: true },

  user: { type: Schema.Types.ObjectId, ref: "User" },
});

export const HeroModel = model("Hero", HeroSchema);