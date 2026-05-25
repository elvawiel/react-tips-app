const mongoose = require("mongoose");

const tipSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },

  message: {
    type: String,
    required: true,
  },

  email: {
    type: String,
  },

  status: {
    type: String,
    default: "new",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Tip", tipSchema);
