const Order = require("../models/Order");

exports.createOrder = async (req, res) => {
  try {
    const { items, total } = req.body;
    const newOrder = new Order({ items, total });
    await newOrder.save();
    res.status(201).json({ msg: "Order placed successfully", order: newOrder });
  } catch (err) {
     console.error(err);
     res.status(500).json({ msg: "Server error" });
  }
};