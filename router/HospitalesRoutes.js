const express = require('express');
const router = express.Router();

const Hospitales = require('../models/Hospital');
// CRUD Hospitales

//create hospital
router.post('/hospitales', (req, res) => {
    Hospitales.create(req.body)
        .then(hospital => res.status(201).json(hospital))
        .catch(err => res.status(400).json(err));
});

// read hospitales
router.get('/hospitales', (req, res) => {
    Hospitales.find()
        .then(hospitales => {
            if (hospitales.length === 0) res.status(200).json({ mensaje: 'No hay hospitales registrados' });
            res.status(200).json(hospitales);
        })
        .catch(err => res.status(400).json(err));
});

//read hospital
router.get('/hospitales/:id', (req, res) => {
    Hospitales.findById(req.params.id)
        .then(hospital => res.status(200).json(hospital))
        .catch(err => res.status(404).json(err));
});

//modify hospital
router.patch('/hospitales/:id', (req, res) => {
    Hospitales.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(hospital => res.status(200).json(hospital))
        .catch(err => res.status(404).json(err));
});

//deleted hospital
router.delete('/hospitales/:id', (req, res) => {
    Hospitales.findByIdAndDelete(req.params.id)
        .then(() => res.status(204).json())
        .catch(err => res.status(404).json(err));
});

//calcular
router.get('/hospitales/:id/calcular', async(req, res) => {
    Hospitales.findById(req.params.id)
        .then(hospital => {
            let cubrebocas = hospital.cantidadCubrebocas;
            let jabon = hospital.cantidadJabon;
            let gel = hospital.cantidadGel;
            let guantes = hospital.cantidadGuantes;
            let totalCubrebocas = cubrebocas * 10;
            let totalJabon = jabon * 35;
            let totalGel = gel * 80;
            let totalGuantes = guantes * 15;
            let monto = totalCubrebocas + totalJabon + totalGel + totalGuantes;
            Hospitales.findByIdAndUpdate(req.params.id, { monto }, { new: true })
                .then(montoHospitalActualizado => {
                    res.status(200).json(montoHospitalActualizado)
                })
        })

});


module.exports = router;
