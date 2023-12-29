import { Server } from "socket.io";

const SocketHandler = (req,res) =>{
    const io = new Server(res.socket.server)
    res.socket.server = io;
    io.on('connection',(socket)=>{
        console.log("Socket connection established...")
    })

    res.end()
}

export default SocketHandler;