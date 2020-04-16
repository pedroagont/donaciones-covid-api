const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DonantesSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    correo: {
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
    donaciones: {
        type: Number,
        required: true,
        default: 0,
    },
})

const Donantes = mongoose.model('Donantes', DonantesSchema);
module.exports = Donantes;