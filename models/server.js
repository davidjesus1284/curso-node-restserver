const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config');

class Server {
    constructor() {
        this.app = express();
        this.usuariosPath = '/api/usuarios';
        this.authPath = '/api/auth'
            // Conectar a base de datos
        this.conectarDB();
        // Middleware
        this.middleware();

        // Rutas del servidor
        this.routes();
    }

    middleware() {
        // Cors
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());
        // Directorio publico
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.authPath, require('../routes/auth'));
        this.app.use(this.usuariosPath, require('../routes/user'));

    }

    listen(port) {
        this.app.listen(port, () => {
            console.log(`Servidor iniciado en htts://localhost:${port}`);
        });
    }

    async conectarDB() {
        await dbConnection();
    }
}

module.exports = Server;