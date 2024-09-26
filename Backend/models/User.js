const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  tipo_identificacion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  numero_identificacion: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  nombre_completo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha_nacimiento: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  sexo_biologico: {
    type: DataTypes.STRING,
    allowNull: false
  },
  direccion_residencia: {
    type: DataTypes.STRING,
    allowNull: false
  },
  numero_celular: {
    type: DataTypes.STRING,
    allowNull: false
  },
  correo_electronico: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  foto_perfil: {
    type: DataTypes.STRING,
    defaultValue: null
  }
});

module.exports = User;
