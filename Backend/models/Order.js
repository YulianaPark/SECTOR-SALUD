const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Order = sequelize.define('Order', {
  numero_orden: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  fecha_orden: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  codigo_documento: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Order.belongsTo(User, { foreignKey: 'usuario_id' });

module.exports = Order;
