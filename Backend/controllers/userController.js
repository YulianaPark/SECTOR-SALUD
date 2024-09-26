const User = require('../models/User');

// Obtener todos los usuarios
exports.getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

// Crear un nuevo usuario
exports.createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
};
