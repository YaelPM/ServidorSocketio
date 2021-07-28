class Sockets {


    constructor(io) {
        this.io = io;
        this.socketEvents();
        this.players=[]
        this.player=0
    }

    socketEvents() {
        this.io.on('connection', client => {
            
            client.on('msj-input-server', (data) => {
                console.log(data)
                this.io.emit('msj-output-client', data);
            })

            client.on('limpiar', () => {
                this.io.emit('clear');
            })

            client.on('listo', ()=>{

                this.player++
                this.players.push(this.player)
                if(this.player%2==1){
                    client.emit('cambio', 'O')
                }
            })
            
            client.emit('connection', 'Conexion exitosa')

        });
    }

}

module.exports = Sockets;