//Aqui obtenemos las funciones de las rutas de las notas
const notesCtrl = {};

//Importando el modelo para las notas
const Note = require('../models/Notes');

notesCtrl.renderNoteForm = (req, res) =>{
    res.render('notes/new-notes')
}

//Recibo los datos del formulario de new-note con req.body
notesCtrl.createNewNote = async (req, res) =>{
    const {title, description} = req.body;
    const newNote = new Note({title,description});
    await newNote.save();
    res.send('New Note')
}

//Obtengo las notas y las muestro en /notes
notesCtrl.renderNotes = async (req, res) =>{
    //Se agrega lean() por problemas entre mongoose y handlebars
    const notes = await Note.find().lean();
    //envio la variable note a all-notes.hbs
    res.render('notes/all-notes', {notes});
}

notesCtrl.renderEditForm = (req,res) =>{
    res.send('Edit Form');
}

notesCtrl.updateNotes = (req, res) =>{
    res.send('update Note')
}

notesCtrl.deleteNote = (req, res) =>{
    res.send('Delete Notes')
}

module.exports = notesCtrl;