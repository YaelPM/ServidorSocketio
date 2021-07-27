const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const path = require('path');
const Sockets = require('./socket');

class Server {
    constructor() {
        this.app = express();

        //Http server
        this.server = http.createServer(this.app);
        //Configuración sockets
        this.io = socketio(this.server, {
        });
    }

    middlewares() {
        this.app.use(express.static(path.resolve(__dirname, '../public')));
    }

    initSockets() {
        new Sockets(this.io);
    }

    exucute() {

        this.middlewares();

        this.initSockets();

        this.server.listen(3000, ()=>{console.log('Server inicializado')})
    }
}

module.exports = Server;