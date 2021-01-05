const userCtrl = {};

userCtrl.renderSignUpForm = (req,res) =>{
    res.render('users/signUp')
};

userCtrl.signUp = (req, res)=>{
    res.send('SignUp')
};

userCtrl.renderSignInForm = (req, res) =>{
    res.render('users/signIn')
};

userCtrl.sigIn = (req, res) =>{
    res.send('SigIn')
};

userCtrl.logOut = (req, res)=>{
    res.send('LogOut')
};

module.exports = userCtrl;