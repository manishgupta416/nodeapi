import express from "express";
import router from "./routes/users.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
export const app = express();

//for connecting
config({ path: "./config.env" });

app.use(express.json()); // using middleware to accesss json value
app.use(cookieParser());
app.use(router); // ye niche hona chhaiye

app.get("/", (req, res) => {
  return res.send("nice");
});
