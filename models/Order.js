// models/Order.js (Mongoose Schema Example)
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  items: [
    {
      id: String,
      title: String,
      quantity: Number,
      price: Number,
      image: String,
    },
  ],
  total: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);
