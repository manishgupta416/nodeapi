import express from "express";
import { getAllUsers, register, getUserDetails } from "../controllers/user.js";

const router = express.Router();

router.get("/users/all", getAllUsers);
router.post("/users/new", register);
router.get("/userid/:id", getUserDetails);

export default router;
