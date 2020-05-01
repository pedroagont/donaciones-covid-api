var express = require('express');
var router = express.Router();

const Articulos = require('../models/Articulo');
const Hospitales = require('../models/Hospital');
// CRUD Hospitales

//create hospital
router.post('/hospitales', (req, res) => {
    Hospitales.create(req.body)
        .then(hospital => {
            let Cubrebocas = hospital.cantidadCubrebocas;
            let Jabon = hospital.cantidadJabon;
            let Gel = hospital.cantidadGel;
            let Guantes = hospital.cantidadGuantes;
            let totalCubrebocas = Cubrebocas * 10;
            let totalJabon = Jabon * 35;
            let totalGel = Gel * 80;
            let totalGuantes = Guantes * 15;
            let monto = totalCubrebocas + totalJabon + totalGel + totalGuantes;
            console.log(monto)
            let getMonto = hospital.monto;
            console.log(getMonto);
            getMonto = monto;
            console.log(getMonto);
            let getId = hospital.id
            Hospitales.findByIdAndUpdate(getId, { monto }, { new: true })
                .then(actualizado => {
                    res.status(201).json(actualizado)
                })
        })
        .catch(err => res.status(400).json(err));
});

// read hospitales
router.get('/hospitales', (req, res) => {
    Hospitales.find()
        .then(hospitales => {
            if (hospitales.length === 0) res.status(200).json({ mensaje: 'No hay hospitales en este momento' });
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
            let Cubrebocas = hospital.cantidadCubrebocas;
            let Jabon = hospital.cantidadJabon;
            let Gel = hospital.cantidadGel;
            let Guantes = hospital.cantidadGuantes;
            let totalCubrebocas = Cubrebocas * 10;
            let totalJabon = Jabon * 35;
            let totalGel = Gel * 80;
            let totalGuantes = Guantes * 15;
            let monto = totalCubrebocas + totalJabon + totalGel + totalGuantes;
            Hospitales.findByIdAndUpdate(req.params.id, { monto }, { new: true })
                .then(actualizado => {
                    res.status(200).json(actualizado)
                })
        })

});


module.exports = router;