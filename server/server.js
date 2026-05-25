const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const tipsRoutes = require("./routes/tips");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://admin:secret@localhost:27017/tipsdb?authSource=admin")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("API working");
});

app.use("/api/tips", tipsRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
