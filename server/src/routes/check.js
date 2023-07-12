import express from "express";
import mongoose from "mongoose";
import { CheckModel } from "../models/Check.js";
import { CheckModel2 } from "../models/Check2.js";

const router = express.Router();

router.get("/checkitems", async (req, res) => {
  try {
    const result = await CheckModel.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/checkitems",  async (req, res) => {
    const recipe = new CheckModel({
      _id: new mongoose.Types.ObjectId(),
      userGain: req.body.userGain,
      year: req.body.year,
      
    });
    console.log(recipe);
  
    try {
      const result = await recipe.save();
      res.status(201).json({
        data: {
            userGain: result.userGain,
            year: result.year,
          _id: result._id,
        },
      });
    } catch (err) {
      // console.log(err);
      res.status(500).json(err);
    }
  });
  

router.get("/checkitems2", async (req, res) => {
  try {
    const result = await CheckModel2.find();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/checkitems2",  async (req, res) => {
    const recipe = new CheckModel2({
      _id: new mongoose.Types.ObjectId(),
      userGain: req.body.userGain,
      year: req.body.year,
      
    });
    console.log(recipe);
  
    try {
      const result = await recipe.save();
      res.status(201).json({
        data: {
            userGain: result.userGain,
            year: result.year,
          _id: result._id,
        },
      });
    } catch (err) {
      // console.log(err);
      res.status(500).json(err);
    }
  });
export { router as checkRouter };