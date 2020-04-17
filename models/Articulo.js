const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticuloSchema = new Schema({
    nombre: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },

});

const Articulo = mongoose.model('Articulo', ArticuloSchema);

module.exports = Articulo;
