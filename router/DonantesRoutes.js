const express = require('express');
const router = express.Router();

const Donantes = require('../models/Donante');
const Hospitales = require('../models/Hospital');
// CRUD Donantes

//create Donante
router.post('/donantes', (req, res) => {
    Donantes.create(req.body)
        .then(Donante => res.status(201).json(Donante))
        .catch(err => res.status(400).json(err));
});

// read Donantes
router.get('/donantes', (req, res) => {
    Donantes.find()
        .then(Donantes => {
            if (Donantes.length === 0) res.status(200).json({ mensaje: 'No hay Donantes en este momento' });
            res.status(200).json(Donantes);
        })
        .catch(err => res.status(400).json(err));
});

//read Donante
router.get('/donantes/:id', (req, res) => {
    Donantes.findById(req.params.id)
        .then(Donante => res.status(200).json(Donante))
        .catch(err => res.status(404).json(err));
});


//modify Donante
router.patch('/donantes/:id', (req, res) => {
    Donantes.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(Donante => res.status(200).json(Donante))
        .catch(err => res.status(404).json(err));
});

//deleted Donante
router.delete('/donantes/:id', (req, res) => {
    Donantes.findByIdAndDelete(req.params.id)
        .then(() => res.status(204).json())
        .catch(err => res.status(404).json(err));
});

//calcular  y actualizar la donacion de hospital
router.get('/donantes/:idDonante/hospitales/:idHospital', (req, res) => {
    Donantes.findById(req.params.idDonante)
        .then(donante => {
            let cantidad = donante.donacion;
            console.log(`obtengo donacion=${cantidad}`);
            Hospitales.findById(req.params.idHospital)
                .then(hospital => {
                    let getDonaciones = hospital.donaciones;
                    let donaciones = getDonaciones + cantidad;
                    console.log(`Actualizo donacion=${donaciones}`);
                    let getporcentaje = hospital.porcentaje;
                    //      console.log(`obtengo porcentaje=${getporcentaje}`);
                    let getmonto = hospital.monto;
                    console.log(`obtengo la cantidad que necesita=${getmonto}`);
                    let porcentaje = (donaciones * 100) / getmonto;
                    console.log(`calculo su porcentaje=${porcentaje}`);
                    //    let porcentaje = calcularporcentaje + getporcentaje;
                    //   console.log(`actualizo porcentaje=${porcentaje}`);
                    Hospitales.findByIdAndUpdate(req.params.idHospital, { donaciones, porcentaje }, { new: true })
                        .then(actualizado => {
                            res.status(200).json(actualizado)
                        })
                })
        })

});

module.exports = router;
