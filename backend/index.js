import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRouter from './route/auth.js';
import fieldRouter from './route/field.js';
import subfieldRouter from './route/subfield.js';
import userRouter from './route/user.js';


const app = express();
dotenv.config();

mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("MongoDB connected");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);


app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/api/auth", authRouter);
app.use("/api/field", fieldRouter);
app.use("/api/subfield", subfieldRouter);
app.use("/api/user", userRouter);


app.listen(process.env.PORT, () => {
  connect();
  console.log("Listening PORT...");
});