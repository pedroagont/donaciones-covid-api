var express = require('express');
var router = express.Router();

const Donantes = require('../models/Donantes');
// CRUD Donantes

//create Donante
router.post('/api/v1/Donantes', (req, res) => {
    Donantes.create(req.body)
        .then(Donante => res.status(201).json(Donante))
        .catch(err => res.status(400).json(err));
});

// read Donantes
router.get('/api/v1/Donantes', (req, res) => {
    Donantes.find()
        .then(Donantes => {
            if (Donantes.length === 0) res.status(200).json({ mensaje: 'No hay Donantes en este momento' });
            res.status(200).json(Donantes);
        })
        .catch(err => res.status(400).json(err));
});

//read Donante
router.get('/api/v1/Donantes/:id', (req, res) => {
    Donantes.findById(req.params.id)
        .then(Donante => res.status(200).json(Donante))
        .catch(err => res.status(404).json(err));
});


//modify Donante
router.patch('/api/v1/Donantes/:id', (req, res) => {
    Donantes.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(Donante => res.status(200).json(Donante))
        .catch(err => res.status(404).json(err));
});

//deleted Donante
router.delete('/api/v1/Donantes/:id', (req, res) => {
    Donantes.findByIdAndDelete(req.params.id)
        .then(() => res.status(204).json())
        .catch(err => res.status(404).json(err));
});

module.exports = router;