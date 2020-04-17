const express = require('express');
const router = express.Router();

const ArticulosRoutes = require('./ArticulosRoutes');
const HospitalesRoutes = require('./HospitalesRoutes');
const DonantesRoutes = require('./DonantesRoutes');

router.use(ArticulosRoutes);
router.use(HospitalesRoutes);
router.use(DonantesRoutes);

module.exports = router;
