const express = require('express');
const router = express.Router();


const ArticuloRoutes = require('./ArticulosRoutes');
const HospitalesRoutes = require('./HospitalesRoutes');
const DonantesRoutes = require('./DonantesRoutes');

router.use(ArticuloRoutes);
router.use(HospitalesRoutes);
router.use(DonantesRoutes);

module.exports = router;