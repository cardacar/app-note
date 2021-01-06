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

const {isAuthenticated} = require('../helpers/auth')

//New Notes
route.get('/notes/add', isAuthenticated, renderNoteForm);
route.post('/notes/new-note',isAuthenticated, createNewNote);

//Get all notes
route.get('/notes',isAuthenticated, renderNotes);

//Edit Notes
route.get('/notes/edit/:id',isAuthenticated, renderEditForm);
route.put('/notes/edit/:id',isAuthenticated, updateNotes);

//Delete Notes
route.delete('/notes/delete/:id',isAuthenticated, deleteNote);

module.exports = route;