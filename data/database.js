import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      dbName: "nodeproject",
    })
    .then(() => console.log("db is connected"))
    .catch((e) => console.error(e));
};
