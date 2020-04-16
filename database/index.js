const mongoose = require('mongoose');
const DB_URL = "mongodb+srv://donaciones-covid:donaciones123@cluster0-u6zcx.gcp.mongodb.net/donaciones-covid?retryWrites=true&w=majority"

mongoose.connect(DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Database connected'))
    .catch((err) => console.log('Error connecting to database...', err));