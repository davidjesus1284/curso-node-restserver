const express = require('express');
const cors = require('cors');

class Server {
    constructor() {
        this.app = express();
        this.usuariosPath = '/api/usuarios';
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
        this.app.use(this.usuariosPath, require('../routes/user'));
    }

    listen(port) {
        this.app.listen(port, () => {
            console.log(`Servidor iniciado en htts://localhost:${port}`);
        });
    }
}

module.exports = Server;