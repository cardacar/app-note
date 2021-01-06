const userCtrl = {};
const User = require('../models/user');
const passport = require('passport');

userCtrl.renderSignUpForm = (req,res) =>{
    res.render('users/signUp')
};

userCtrl.signUp = async (req, res)=>{
    const errors = [];
    const {name, email, password, confirm_password} = req.body;
    if(password != confirm_password){
        errors.push({text: 'password do not match.'});
    }
    if(password.length < 4){
        errors.push({text:'passwords must be al least 4 characteres.'})
    }
    if(errors.length > 0){
        res.render('users/signup', {
            errors,
            name,
            email,
            password,
            confirm_password
        })
    }else{
        const emailUser = await User.findOne({email}).exec();
        if(emailUser){
            req.flash('error_msg', 'El correo ya existe');
            res.redirect('/users/signup');
        }else{
            const newUser = new User({name, email, password});
            newUser.password = await newUser.encryptPassword(password)
            await newUser.save();
            req.flash('success_msg', 'Estas registrado')
            res.redirect('/users/signin')
        }
    }
};

userCtrl.renderSignInForm = (req, res) =>{
    res.render('users/signIn')
};

userCtrl.sigIn = passport.authenticate('local', {
    successRedirect: '/notes',
    failureRedirect: '/users/signin',
    failureFlash: true
});

userCtrl.logOut = (req, res)=>{
    req.logout();
    req.flash('success_msg', 'You are logged out now.');
    res.redirect('/users/signin');
};

module.exports = userCtrl;