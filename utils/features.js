import jwt from "jsonwebtoken";

export const sendToken = (user, res, message, stausCode = 200) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  res
    .status(stausCode)
    .cookie("token", token, { httpOnly: true, maxAge: 15 * 60 * 1000 })
    .json({ success: true, message: message });
};
