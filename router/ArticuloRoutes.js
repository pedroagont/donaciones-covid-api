var express = require('express');
var router = express.Router();

const Articulo = require('../models/Articulo');
// CRUD Articulo

//create article
router.post('/articulos', (req, res) => {
    Articulo.create(req.body)
        .then(articulo => res.status(201).json(articulo))
        .catch(err => res.status(400).json(err));
});

// read articles
router.get('/articulos', (req, res) => {
    Articulo.find()
        .then(articulos => {
            if (articulos.length === 0) res.status(200).json({ mensaje: 'No hay articulos en este momento' });
            res.status(200).json(articulos);
        })
        .catch(err => res.status(400).json(err));
});

//read article
router.get('/articulos/:id', (req, res) => {
    Articulo.findById(req.params.id)
        .then(articulo => res.status(200).json(articulo))
        .catch(err => res.status(404).json(err));
});


//modified article
router.patch('/articulos/:id', (req, res) => {
    Articulo.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(articulo => res.status(200).json(articulo))
        .catch(err => res.status(404).json(err));
});

//deleted articles
router.delete('/articulos/:id', (req, res) => {
    Articulo.findByIdAndDelete(req.params.id)
        .then(() => res.status(204).json())
        .catch(err => res.status(404).json(err));
});

module.exports = router;
