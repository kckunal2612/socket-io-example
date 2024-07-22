import { socket } from "./socket";

const sendMessage = () => {
  if (socket.connected) {
    socket.emit("sendMessage", {
      sender: socket.id,
      message: new Date().toString(),
    });
  }
};

export { sendMessage };
