const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Group = require('./Group');

const Exam = sequelize.define('Exam', {
  nombre_examen: {
    type: DataTypes.STRING,
    allowNull: false
  },
  resultado: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

Exam.belongsTo(Group, { foreignKey: 'grupo_id' });

module.exports = Exam;
