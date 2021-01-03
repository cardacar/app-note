//Creando el servidor basico con express
const express = require('express');
//Utilizando path para las rutas
const path = require('path');


//Initializations
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views',  path.join(__dirname + '/views'));

//Middlewars
app.use(express.urlencoded({extended: false}));//Le dice al servidor cuando llega datos de un formulario convertirlos en json

//Global Variables


//Routes
app.get('/' ,(req, res)=>{
    res.send('Hello world')
});

//Static file
app.use(express.static(path.join(__dirname + '/public')));


//Exportamos el servidor
module.exports = app;