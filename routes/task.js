import express from "express";
import {
  deleteTask,
  getMyTasks,
  newTask,
  updateTask,
} from "../controllers/task.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/api/v1/new", isAuthenticated, newTask);
router.get("/api/v1/alltask", isAuthenticated, getMyTasks);
router.put("/api/v1/update/:id", isAuthenticated, updateTask);
router.delete("/api/v1/delete/:id", isAuthenticated, deleteTask);

export default router;
