class Sockets {

    constructor(io) {
        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        this.io.on('connection', client => {

            client.on('msj-input-server', (data) => {
                console.log(data);

                this.io.emit('msj-output-client', data);
            })
            
            client.emit('connection', 'Conexion exitosa')

        });
    }

}

module.exports = Sockets;