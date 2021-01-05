//Creando el servidor basico con express
const express = require('express');
//Utilizando path para las rutas
const path = require('path');
//Motor de plantilla para usar en la app
const exphbs = require('express-handlebars');
//Importamos morgan para saber que datos pide la pagina
const morgan = require('morgan');
//Importamos la libreria que nos brinda la posibilidad de usar el DELETE
const methodOverride = require('method-override');
//Importamos conect flash para mensajes entre las vistas
const flash = require('connect-flash');
const session = require('express-session');

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
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}));//Le dice al servidor cuando llega datos de un formulario convertirlos en json
app.use(methodOverride('_method'));
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(flash());


//Global Variables
app.use((req,res,next)=>{
    res.locals.success_msg = req.flash('success_msg')
    next();
});

//Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));
app.use(require('./routes/users.routes'));

//Static file
app.use(express.static(path.join(__dirname + '/public')));


//Exportamos el servidor
module.exports = app;