const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HospitalesSchema = new Schema({
    nombrehospital: {
        type: String,
        required: true,
    },
    ciudad: {
        type: String,
        required: true,
    },
    pais: {
        type: String,
        required: true,
    },
    nombredelcontacto: {
        type: String,
        required: true,
    },
    telefonodelcontacto: {
        type: Number,
        required: true,
    },
    correodelcontacto: {
        type: String,
        required: true,
    },
    /*
        articulos: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'Articulos',
            required: true,
        },*/
    cantidadJabon: {
        type: Number,
        default: 0,
    },
    cantidadGel: {
        type: Number,
        default: 0,
    },
    cantidadCubrebocas: {
        type: Number,
        default: 0,
    },
    cantidadGuantes: {
        type: Number,
        default: 0,
    },
    monto: {
        type: Number,
        default: 0,
    },
    donaciones: {
        type: Number,
        default: 0,
    },
    porcentaje: {
        type: Number,
        default: 0,
    },
});

const Hospitales = mongoose.model('Hospitales', HospitalesSchema);
module.exports = Hospitales;