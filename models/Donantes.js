const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DonantesSchema = new schema({
    nombre: {
        type: String,
        require: true,
    },
    correo: {
        type: String,
        require: true,
    },
    ciudad: {
        type: String,
        require: true,
    },
    pais: {
        type: String,
        require: true,
    },
    donaciones: {
        type: Number,
        default: 0,
    },
})

const Donantes = mongoose.model('Donantes', DonantesSchema);
module.exports = Donantes;