var express = require('express');
var router = express.Router();

const Articulos = require('../models/Articulo');
const Hospitales = require('../models/Hospital');
// CRUD Hospitales

//create hospital
router.post('/api/v1/hospitales', (req, res) => {
    /*  Articulos.find() //Verificar con la base de datos si existe estos elementos con lo que ingresa el usuario 
      .then(articulos => {
      articulos.find(articulo => {
          if(articulo.nombre===req.body.nombre)
      })
          Hospitales.create(req.body)
              .then(hospital => res.status(201).json(hospital))
              .catch(err => res.status(400).json(err));
          }); */

    Hospitales.create(req.body)
        .then(Donante => res.status(201).json(Donante))
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

//read hospital
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

//calcular 
router.get('/api/v1/hospitales/:id/calcular', async(req, res) => {
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