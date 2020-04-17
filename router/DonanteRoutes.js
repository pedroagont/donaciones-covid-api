var express = require('express');
var router = express.Router();

const Donante = require('../models/Donante');
// CRUD Donante

//create Donante
router.post('/donantes', (req, res) => {
    Donante.create(req.body)
        .then(Donante => res.status(201).json(Donante))
        .catch(err => res.status(400).json(err));
});

// read Donante
router.get('/donantes', (req, res) => {
    Donante.find()
        .then(Donante => {
            if (Donante.length === 0) res.status(200).json({ mensaje: 'No hay Donante en este momento' });
            res.status(200).json(Donante);
        })
        .catch(err => res.status(400).json(err));
});

//read Donante
router.get('/donantes/:id', (req, res) => {
    Donante.findById(req.params.id)
        .then(Donante => res.status(200).json(Donante))
        .catch(err => res.status(404).json(err));
});


//modify Donante
router.patch('/donantes/:id', (req, res) => {
    Donante.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(Donante => res.status(200).json(Donante))
        .catch(err => res.status(404).json(err));
});

//deleted Donante
router.delete('/donantes/:id', (req, res) => {
    Donante.findByIdAndDelete(req.params.id)
        .then(() => res.status(204).json())
        .catch(err => res.status(404).json(err));
});

module.exports = router;
