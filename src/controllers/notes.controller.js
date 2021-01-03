//Aqui obtenemos las funciones de las rutas de las notas
const notesCtrl = {};

notesCtrl.renderNoteForm = (req, res) =>{
    res.send('note add')
}

notesCtrl.createNewNote = (req, res) =>{
    res.send('New Note')
}

notesCtrl.renderNotes = (req, res) =>{
    res.send('Render Notes')
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