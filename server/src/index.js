import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";
import dotenv from 'dotenv'
import { checkRouter } from "./routes/check.js";
dotenv.config()
const app = express();
app.use(express.json());
app.use(cors());


app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);
app.use("/check", checkRouter);
//app.use("/uploads", express.static("uploads"));


mongoose.connect(
  process.env.DATABASE_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const connectionResult = mongoose.connection;

connectionResult.on('error', ()=>{
    console.log('Error connecting to database');
});
connectionResult.on('connected'  , ()=>{
    console.log(`connected to mongoDB dataase ${mongoose.connection.host}`);
});

app.listen(3001, () => console.log("Server started"));