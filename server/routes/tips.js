const express = require("express");
const router = express.Router();

const Tip = require("../models/Tip");

router.get("/", async (req, res) => {
  try {
    const tips = await Tip.find().sort({ createdAt: -1 });

    res.json(tips);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const newTip = new Tip({
      url: req.body.url,
      message: req.body.message,
      email: req.body.email,
    });

    const savedTip = await newTip.save();

    res.status(201).json(savedTip);
  } catch (err) {
    res.status(400).json({
      error: err.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Tip.findByIdAndDelete(req.params.id);

    res.json({
      message: "Tip deleted",
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const tip = await Tip.findById(req.params.id);

    res.json(tip);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

module.exports = router;
