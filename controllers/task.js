import { Task } from "../models/task.js";

export const newTask = async (req, res, next) => {
  const { title, description } = req.body;
  console.log("working");

  await Task.create({ title, description, user: req.user });

  res.status(201).json({ success: true, message: "task created successfully" });
};

export const getMyTasks = async (req, res) => {
  const loggedInUser = req.user._id;
  console.log(loggedInUser);

  const tasks = await Task.find({ user: loggedInUser });
  console.log(tasks);

  res.status(200).json({
    success: true,
    tasks,
  });
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const tasks = await Task.findById(id);
  tasks.isCompleted = !tasks.isCompleted;
  await tasks.save();

  res.status(200).json({
    success: true,
    message: "Task updated",
  });
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  const tasks = await Task.findById(id);
  if (!tasks) return next(new Error("not exist"));
  await tasks.deleteOne();

  res.status(200).json({
    success: true,
    message: "Task deleted",
  });
};
