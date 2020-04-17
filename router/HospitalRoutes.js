var express = require('express');
var router = express.Router();

const Hospital = require('../models/Hospital');
// CRUD Hospital

//create hospital
router.post('/hospitales', (req, res) => {
    Hospital.create(req.body)
        .then(hospital => res.status(201).json(hospital))
        .catch(err => res.status(400).json(err));
});

// read hospitales
router.get('/hospitales', (req, res) => {
    Hospital.find()
        .then(hospitales => {
            if (hospitales.length === 0) res.status(200).json({ mensaje: 'No hay hospitales registrados' });
            res.status(200).json(hospitales);
        })
        .catch(err => res.status(400).json(err));
});

//read hospital
router.get('/hospitales/:id', (req, res) => {
    Hospital.findById(req.params.id)
        .then(hospital => res.status(200).json(hospital))
        .catch(err => res.status(404).json(err));
});

//modify hospital
router.patch('/hospitales/:id', (req, res) => {
    Hospital.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(hospital => res.status(200).json(hospital))
        .catch(err => res.status(404).json(err));
});

//deleted hospital
router.delete('/hospitales/:id', (req, res) => {
    Hospital.findByIdAndDelete(req.params.id)
        .then(() => res.status(204).json())
        .catch(err => res.status(404).json(err));
});

module.exports = router;
