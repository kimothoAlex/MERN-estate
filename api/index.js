import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();

dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to DB successfully");
  })
  .catch((err) => {
    console.log(`An error occured ${err}`);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
