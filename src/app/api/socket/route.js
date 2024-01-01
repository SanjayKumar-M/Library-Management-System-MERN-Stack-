import { Server } from "socket.io";

const SocketHandler = (req, res) => {
  console.log("called api");
  if (res.socket.server.io) {
    console.log("socket already running");
  } else {
    const io = new Server(req.socket.server.httpServer);
    res.socket.server.io = io;

    io.on('connection',(socket)=>{
      console.log("Server is running");
      socket.on('join room',(roomId,userId)=>{
        console.log(`new user ${userId} join in room ${roomId} `)
        socket.join(roomId)
        socket.broadcast.to(roomId).emit('user-connected',userId)
      })
    })
  }
  
};

export default SocketHandler; 