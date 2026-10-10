require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

connectDB();

app.get("/", (req, res) => {
  res.send("Cineora API is running");
});



app.listen(5000, () => {
  console.log("server is running on port 5000");
});