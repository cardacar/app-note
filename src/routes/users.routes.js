//Rutas para los usuarios
const {Router} = require('express');
const router = Router();

const { renderSignUpForm, 
    renderSignInForm, 
    logOut,
    sigIn,
    signUp
 } = require('../controllers/users.controller');

router.get('/users/signup', renderSignUpForm);
router.post('/users/signup', signUp);

router.get('/users/signin', renderSignInForm);
router.post('/users/signin', sigIn);

router.get('/users/logout', logOut);

module.exports = router;