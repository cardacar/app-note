//Creando el servidor basico con express
const express = require('express');
//Utilizando path para las rutas
const path = require('path');
//Motor de plantilla para usar en la app
const exphbs = require('express-handlebars');


//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views',  path.join(__dirname + '/views'));
//Configurando el motor de plantillas
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Middlewars
app.use(express.urlencoded({extended: false}));//Le dice al servidor cuando llega datos de un formulario convertirlos en json

//Global Variables


//Routes
app.use(require('./routes/index.routes'));

//Static file
app.use(express.static(path.join(__dirname + '/public')));


//Exportamos el servidor
module.exports = app;