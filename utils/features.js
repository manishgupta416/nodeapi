import jwt from "jsonwebtoken";

export const sendToken = (user, res, message, stausCode = 200) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  res
    .status(stausCode)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
      sameSite: process.env.NODE_ENV === "Development" ? "lax" : none, // because of both front and backed url on different url
      secure: process.env.NODE_ENV === "Development" ? false : true,
    })
    .json({ success: true, message: message });
};

// "start": "set NODE_ENV=Production && node server.js",
// "dev": " set NODE_ENV=Development && nodemon server.js"
