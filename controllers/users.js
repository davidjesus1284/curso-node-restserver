const { response } = require("express");

const getUsuarios = (req, res = response) => {
    try {
        res.json({
            nombre: 'David',
            apellido: 'Escalante',
            edad: 37
        });
    } catch (error) {
        console.log(error);
        res.status(501).json({
            mensaje: 'Error interno en el servidor'
        });
    }
};

const postUsuarios = (req, res = response) => {

    console.log(req.body);
    const usuario = {...req.body };

    try {
        res.json(usuario);
    } catch (error) {
        console.log(error);
        res.status(501).json({
            mensaje: 'Error interno en el servidor'
        });
    }
};

const putUsuarios = (req, res = response) => {
    console.log(req.params.id);
    try {
        res.json({
            nombre: 'Juan David',
            apellido: 'Escalante Gonzalez',
            edad: 5
        });
    } catch (error) {
        console.log(error);
        res.status(501).json({
            mensaje: 'Error interno en el servidor'
        });
    }
};

const deleteUsuarios = (req, res = response) => {

    try {
        res.json({
            nombre: 'Jose',
            apellido: 'Gonzalez',
            edad: 80
        });
    } catch (error) {
        console.log(error);
        res.status(501).json({
            mensaje: 'Error interno en el servidor'
        });
    }
};

module.exports = {
    getUsuarios,
    postUsuarios,
    putUsuarios,
    deleteUsuarios
};