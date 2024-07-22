import { useEffect, useState } from "react";
import { socket } from "../helpers/socket";

const useMessageText = () => {
  const [messageText, setMessageText] = useState("");

  useEffect(() => {
    function onMessageReceived(args: any) {
      setMessageText(args?.message);
    }
    socket.on("sendMessage", onMessageReceived);
    return () => {
      socket.off("sendMessage", onMessageReceived);
    };
  }, []);

  return { messageText };
};

export { useMessageText };
