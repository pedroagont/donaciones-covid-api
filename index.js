const express = require('express');
const app = express();
const PORT = process.env.PORT || 4080;
require('./database')

// Endpoints
app.get('/', (req, res) => res.json('¡Bienvenido!'));

// Encender el servidor
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));