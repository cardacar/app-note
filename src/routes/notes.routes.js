//Rutas para las notas
const {Router} = require('express');
const route = Router();

const { 
    renderNoteForm, 
    createNewNote, 
    renderNotes, 
    renderEditForm, 
    updateNotes, 
    deleteNote 
} = require('../controllers/notes.controller');

//New Notes
route.get('/notes/add', renderNoteForm);
route.post('notes/add', createNewNote);

//Get all notes
route.get('/notes', renderNotes);

//Edit Notes
route.get('/notes/edit/:id', renderEditForm);
route.put('/notes/edit/:id', updateNotes);

//Delete Notes
route.delete('/notes/delete/:id', deleteNote);

module.exports = route;