const express = require('express');
const router = express.Router();

const ArticuloRoutes = require('./ArticuloRoutes');
const HospitalRoutes = require('./HospitalRoutes');
const DonanteRoutes = require('./DonanteRoutes');

router.use(ArticuloRoutes);
router.use(HospitalRoutes);
router.use(DonanteRoutes);

module.exports = router;
