const { Router } = require('express');
const { check } = require('express-validator');

const { login } = require('../controllers/auth');
const { validatorFields } = require('../middlewares/validatorFields');

const router = Router();


router.post('/login', [
    check('correo', 'El correo es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    validatorFields
], login);


module.exports = router;