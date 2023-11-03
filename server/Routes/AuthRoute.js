import express from "express";
import UserModel from "../Models/UserModel.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password, firstName, lastName } = req.body;
  const newUser = new UserModel(req.body);
  try {
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ Message: error.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ Message: error.message });
  }
});

export default router