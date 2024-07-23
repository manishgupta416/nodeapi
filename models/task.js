import mongoose, { Schema } from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    unique: true,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // collection ka ref
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Task = mongoose.model("Task", TaskSchema);
