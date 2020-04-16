const express = require('express');
const router = express.Router();


const ArticuloRoutes = require('./ArticulosRoutes');

router.use(ArticuloRoutes);

module.exports = router;