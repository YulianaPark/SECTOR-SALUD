const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Order = require('./Order');

const Group = sequelize.define('Group', {
  nombre_grupo: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Group.belongsTo(Order, { foreignKey: 'orden_id' });

module.exports = Group;
