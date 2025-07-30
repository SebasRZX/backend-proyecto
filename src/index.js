const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const usuariosRoutes = require('./routes/usuarios');
const categoriasRouter = require('./routes/categorias');
const productosRoutes = require('./routes/productos');
const ventasRoutes = require('./routes/ventas');
const comandasRoutes = require('./routes/comandas');
const eventosRoutes = require('./routes/eventos');
const turnosRoutes = require('./routes/turnos');
const cajaRoutes = require('./routes/caja');

require('dotenv').config();

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true, // permite enviar cookies
}));
app.use(express.json());
app.use(cookieParser());

app.use('/api/usuarios', usuariosRoutes);
app.use('/api/categorias', categoriasRouter);
app.use('/api/productos', productosRoutes);
app.use('/api/ventas', ventasRoutes);
app.use('/api/comandas', comandasRoutes);
app.use('/api/eventos', eventosRoutes);
app.use('/api/turnos', turnosRoutes);
app.use('/api/caja', cajaRoutes);

// Servir imágenes u otros archivos estáticos (opcional)
app.use('/uploads', express.static('uploads'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

