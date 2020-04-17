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
    articulos: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Articulos',
        required: true,
    },
    monto: {
        type: Number,
        default: 0,
    }
    /* articulo: {
         type: String,
         required: true,
     },*/
});

const Hospital = mongoose.model('Hospital', HospitalSchema);
module.exports = Hospital;
