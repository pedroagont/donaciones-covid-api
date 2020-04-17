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
        id: "5e98b4fb16a5d1420050e832",
    },
    cantidadGel: {
        type: Number,
        default: 0,
        id: "5e99026d85cc1b5990bf65a8"
    },
    cantidadCubrebocas: {
        type: Number,
        default: 0,
        id: "5e99028085cc1b5990bf65a9",
    },
    cantidadGuantes: {
        type: Number,
        default: 0,
        id: "5e99028a85cc1b5990bf65aa"
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