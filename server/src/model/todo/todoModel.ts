import { stat } from "fs";
import { model, Schema } from "mongoose";

export const TodoSchema = new Schema({
  title: { type: String, required: true },
  done: { type: Boolean, required: true, default:false },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

export const TodoModel = model("Todo", TodoSchema);