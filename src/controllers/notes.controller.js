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
    newNote.user = req.user.id;
    await newNote.save();

    req.flash('success_msg', 'Note Added Susccesfully');
    res.redirect('/notes');
}

//Obtengo las notas y las muestro en /notes
notesCtrl.renderNotes = async (req, res) =>{
    //Se agrega lean() por problemas entre mongoose y handlebars
    const notes = await Note.find({user: req.user.id}).sort({createdAt:'desc'}).lean();
    //envio la variable note a all-notes.hbs
    res.render('notes/all-notes', {notes});
}

notesCtrl.renderEditForm = async (req,res) =>{
    const note = await Note.findById(req.params.id).lean();
    if(note.user != req.user.id){
        req.flash('error_msg', 'No authorized');
        return res.redirect('/notes');
    }
    res.render('notes/edit-note', {note});
}

notesCtrl.updateNotes = async (req, res) =>{
    const {title, description } = req.body;
    await Note.findByIdAndUpdate(req.params.id, {title, description});
    req.flash('success_msg', 'Note Updated Succesfully')
    res.redirect('/notes')
}

//Eliminando datos
notesCtrl.deleteNote = async (req, res) =>{
    const note = await Note.findById(req.params.id).lean();
    if(note.user != req.user.id){
        req.flash('error_msg', 'No authorized');
        return res.redirect('/notes');
    }
    await Note.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Note Deleted Succesfully')
    res.redirect('/notes')

}

module.exports = notesCtrl;