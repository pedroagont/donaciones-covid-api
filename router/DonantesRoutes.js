var express = require('express');
var router = express.Router();

const Donantes = require('../models/Donantes');
const Hospitales = require('../models/Hospitales');
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

//calcular  y actualizar la donacion de hospital 
router.get('/api/v1/Donantes/:idDonante/Hospialtes/:idHospital', (req, res) => {
    Donantes.findById(req.params.idDonante)
        .then(donante => {
            var Cantidad = donante.donacion;
            console.log(`obtengo donacion=${Cantidad}`);
            Hospitales.findById(req.params.idHospital)
                .then(hospital => {
                    var getDonaciones = hospital.donaciones;
                    var donaciones = getDonaciones + Cantidad;
                    console.log(`Actualizo donacion=${donaciones}`);
                    var getporcentaje = hospital.porcentaje;
                    console.log(`obtengo porcentaje=${getporcentaje}`);
                    var getmonto = hospital.monto;
                    console.log(`obtengo la cantidad que necesita=${getmonto}`);
                    var calcularporcentaje = (donaciones * 100) / getmonto;
                    console.log(`calculo su porcentaje=${calcularporcentaje}`);
                    var porcentaje = calcularporcentaje + getporcentaje;
                    console.log(`actualizo porcentaje=${porcentaje}`);
                    Hospitales.findByIdAndUpdate(req.params.idHospital, { donaciones, porcentaje }, { new: true })
                        .then(actualizado => {
                            res.status(200).json(actualizado)
                        })
                })
        })

});

module.exports = router;