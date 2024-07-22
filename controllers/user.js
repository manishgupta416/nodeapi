import { User } from "../models/user.js";

export const getAllUsers = async (req, res) => {
  const users = await User.find({});
  const keyword = req.query;
  console.log(keyword);

  return res.json({ success: true, users: users });
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  const users = await User.create({
    name,
    email,
    password,
  });

  return res
    .status(201)
    .cookie("temp", "temp")
    .json({ success: true, message: "created successfully" });
};

export const getUserDetails = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  res.json({
    success: true,
    user,
  });
};
