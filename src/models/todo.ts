import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  priority: { type: String },
  completed: { type: Boolean },
});

export const todoModel = mongoose.model("todo", todoSchema);
