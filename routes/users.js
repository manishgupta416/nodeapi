import express from "express";
import {
  getAllUsers,
  register,
  getUserDetails,
  login,
  getMyDetails,
  logout,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.get("/api/v1/users/all", getAllUsers);
router.get("/api/v1/me", isAuthenticated, getMyDetails);
router.post("/api/v1/users/register", register);
router.post("/api/v1/users/login", login);
router.get("/api/v1/users/logout", logout);

export default router;
