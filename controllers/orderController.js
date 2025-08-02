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

exports.getOrders = async (req, res) => {

  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
}

exports.getOrderById = async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ msg: "Order not found" });
    }

    res.status(200).json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
};