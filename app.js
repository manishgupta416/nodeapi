import express from "express";
import userRouter from "./routes/users.js";
import taskRouter from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { errMiddleware } from "./middlewares/error.js";
import cors from "cors";

export const app = express();

//for connecting
config({ path: "./config.env" });

app.use(express.json()); // using middleware to accesss json value
app.use(cookieParser());
// app.use(cors); // we can pass options of object like method domain [reson speciifed kar skte hai]
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "PUT", "DELETE", "POST"],
    credentials: true, // off rahgea toh frontended pe header kuch nhi pahucheg a like cookies
  })
);

app.use(userRouter); // ye niche hona chhaiye
app.use(taskRouter);

app.get("/", (req, res) => {
  return res.send("nice");
});
app.use(errMiddleware);
