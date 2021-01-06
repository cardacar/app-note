//Creando modelo para usuario
const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique:true},
    password: {type: String, required: true}
},{
    timestamps: true
});

//Creamos un metodo que nos encripta la contraseña
UserSchema.method('encryptPassword', async function(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
});


//Metodo que compara las contraseñas cifradas cuando el usuario inicia session
UserSchema.method('matchPassword', async function(password) {
    return await bcrypt.compare(password, this.password)
});


module.exports = model('user', UserSchema);