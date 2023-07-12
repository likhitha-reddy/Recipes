import mongoose from "mongoose";

const CheckSchema = new mongoose.Schema({
  userGain: { type: Number },
  year: { type: Number },
  
});

export const CheckModel2 = mongoose.model("check2", CheckSchema);