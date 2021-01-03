//Conectandome a mongodb a travez de mongoose
const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb://localhost/notes-app'

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database is connected'))
    .catch(errr => console.log(errr));