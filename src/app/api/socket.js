import { Server } from "socket.io";

const SocketHandler = (req, res) => {
  console.log("called api");
  if (res.socket.server.io) {
    console.log("socket already running");
  } else {
    const io = new Server(req.socket.server.httpServer);
    res.socket.server.io = io;
  }
  
};

export default SocketHandler;
