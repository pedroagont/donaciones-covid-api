var express = require('express');
var router = express.Router();

const Hospitales = require('../models/Hospitales');
// CRUD Hospitales

//create hospital
router.post('/api/v1/hospitales', (req, res) => {
    Hospitales.create(req.body)
        .then(hospital => res.status(201).json(hospital))
        .catch(err => res.status(400).json(err));
});

// read hospitales
router.get('/api/v1/hospitales', (req, res) => {
    Hospitales.find()
        .then(hospitales => {
            if (hospitales.length === 0) res.status(200).json({ mensaje: 'No hay hospitales en este momento' });
            res.status(200).json(hospitales);
        })
        .catch(err => res.status(400).json(err));
});

//read hospitales
router.get('/api/v1/hospitales/:id', (req, res) => {
    Hospitales.findById(req.params.id)
        .then(hospital => res.status(200).json(hospital))
        .catch(err => res.status(404).json(err));
});


//modify hospital
router.patch('/api/v1/hospitales/:id', (req, res) => {
    Hospitales.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(hospital => res.status(200).json(hospital))
        .catch(err => res.status(404).json(err));
});

//deleted hospital
router.delete('/api/v1/hospitales/:id', (req, res) => {
    Hospitales.findByIdAndDelete(req.params.id)
        .then(() => res.status(204).json())
        .catch(err => res.status(404).json(err));
});

module.exports = router;