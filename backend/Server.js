const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
app.use(cors());
app.use(express.json());
const authRoute = require("./routes/auth");
mongoose
  .connect("mongodb://localhost:27017/clothing")
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.use("/api/auth", authRoute);

app.listen(5001, (req, res) => {
  console.log("Running");
});