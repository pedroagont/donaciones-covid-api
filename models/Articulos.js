const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticulosSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },

});

const Articulos = mongoose.model('Articulos', ArticulosSchema);

module.exports = Articulos;