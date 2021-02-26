const Role = require('../models/role');
const Usuario = require('../models/usuario');

const validarRolDB = async(rol = '') => {
    const existRoles = await Role.findOne({ role: rol });
    if (!existRoles) {
        throw new Error(`El rol ${rol} no está registrado en la BD`);
    }

};

const emailExiste = async(correo) => {
    const existeEmail = await Usuario.findOne({ correo });
    console.log(existeEmail);
    if (existeEmail) {
        throw new Error(`El correo ${correo} ya existe, por favor ingrese un nuevo correo`);
    }
};

const existeUsuarioPorId = async(id) => {
    const existeUsuario = await Usuario.findById(id);
    console.log(existeUsuario);
    if (!existeUsuario) {
        throw new Error(`El id: ${id} no existe`);
    }
};

module.exports = {
    validarRolDB,
    emailExiste,
    existeUsuarioPorId
};