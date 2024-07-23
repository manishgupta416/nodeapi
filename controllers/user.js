import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendToken } from "../utils/features.js";
import jwt from "jsonwebtoken";

export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  const keyword = req.query;
  console.log(keyword);

  return res.json({ success: true, users: users });
};

export const getUserDetails = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  res.json({
    success: true,
    user,
  });
};
export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user)
    return res
      .status(404)
      .json({ success: false, message: "Invalid email and password" });

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch)
    return res
      .status(404)
      .json({ success: false, message: "Invalid email and password" });
  sendToken(user, res, `welcome back ${user.name}`, 200);
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  let user = await User.findOne({ email });

  if (user)
    return res.status(404).json({ success: false, message: "user exist" });

  const hashedPassword = await bcrypt.hash(password, 10);
  user = await User.create({ name, email, password: hashedPassword });
  sendToken(user, res, "registered Successfully", 201);
};

export const getMyDetails = (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};

export const logout = (req, res) => {
  res
    .status(200)
    .cookie("token", "", { expires: new Date(Date.now()) })
    .json({
      success: true,
      user: req.user,
    });
};
