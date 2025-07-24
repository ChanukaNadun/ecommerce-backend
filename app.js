const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");

// Load environment variables
dotenv.config();

// Connect to DB
const connectDB = require("./config/db");
connectDB(); 

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));

// Basic route
app.get("/", (req, res) => {
  res.send("E-commerce API");
});

module.exports = app;
