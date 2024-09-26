const Order = require('../models/Order');

// Obtener todas las órdenes
exports.getAllOrders = async (req, res) => {
  const orders = await Order.findAll();
  res.json(orders);
};

// Crear una nueva orden
exports.createOrder = async (req, res) => {
  const order = await Order.create(req.body);
  res.json(order);
};
