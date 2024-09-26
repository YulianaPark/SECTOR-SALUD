const app = require('./app');
const sequelize = require('./config/db');

// Sincronizar con la base de datos y escuchar en el puerto
const PORT = process.env.PORT || 3000;

sequelize.sync({ force: false }).then(() => {
  console.log('Conectado a la base de datos');
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
}).catch((err) => {
  console.error('Error conectando a la base de datos:', err);
});
