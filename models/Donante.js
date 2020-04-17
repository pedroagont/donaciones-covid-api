const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DonanteSchema = new Schema({
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

const Donante = mongoose.model('Donante', DonanteSchema);
module.exports = Donante;
