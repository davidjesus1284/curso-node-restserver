const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config');

class Server {
    constructor() {
        this.app = express();
        // path de rutas
        this.path = {
            auth: '/api/auth',
            buscar: '/api/buscar',
            categorias: '/api/categorias',
            productos: '/api/productos',
            usuarios: '/api/usuarios'
        };
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
        this.app.use(this.path.auth, require('../routes/auth'));
        this.app.use(this.path.buscar, require('../routes/buscar'));
        this.app.use(this.path.categorias, require('../routes/categorias'));
        this.app.use(this.path.productos, require('../routes/productos'));
        this.app.use(this.path.usuarios, require('../routes/user'));


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