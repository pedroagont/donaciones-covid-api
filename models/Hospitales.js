const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HospitalesSchema = new schema({
    nombre: {
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
    nombredelcontacto: {
        type: String,
        require: true,
    },
    telefonodelcontacto: {
        type: Number,
        require: true,
    },
    correodelcontacto: {
        type: String,
        require: true,
    }
})

const Hospitales = mongoose.model('Hospitales', HospitalesSchema);
module.exports = Hospitales;