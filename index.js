const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 4080;
require('./database')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Endpoints
app.get('/', (req, res) => res.json('¡Bienvenido!'));

// viewed at http://localhost:4080
app.get('/docs', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


// Encender el servidor
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));