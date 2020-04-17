const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HospitalSchema = new Schema({
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
        required: true,
    },
    cantidadGel: {
        type: Number,
        required: true,
    },
    cantidadCubrebocas: {
        type: Number,
        required: true,
    },
    cantidadGuantes: {
        type: Number,
        required: true,
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

const Hospital = mongoose.model('Hospital', HospitalSchema);
module.exports = Hospital;
