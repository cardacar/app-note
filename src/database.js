//Conectandome a mongodb a travez de mongoose
const mongoose = require('mongoose');
//Importamos las variables creadas en el archivo .env
const {NOTES_APP_MONGODB_HOST,NOTES_APP_MONGODB_DATABASE} = process.env;

//Creamos el string de conexion con EJS6
const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;

//Conectandome con el uri
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));