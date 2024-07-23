import { User } from "../models/user.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token)
    return res.status(404).json({ success: "false", message: "login first" });

  const decodeData = jwt.verify(token, process.env.JWT_SECRET); //GET USER ID}
  req.user = await User.findById(decodeData);
  next();
};
