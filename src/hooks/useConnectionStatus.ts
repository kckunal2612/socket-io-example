import { SetStateAction, useEffect, useState } from "react";
import { socket } from "../helpers/socket";

type ConnectionStatus = {
  isConnected: boolean;
  transport: string;
};

const useConnectionStatus = (): ConnectionStatus => {
  const [isConnected, setIsConnected] = useState(false);
  const [transport, setTransport] = useState("N/A");

  useEffect(() => {
    if (socket.connected) {
      onConnect();
    }

    function onConnect() {
      setIsConnected(true);
      setTransport(socket.io.engine.transport.name);

      socket.io.engine.on(
        "upgrade",
        (transport: { name: SetStateAction<string> }) => {
          setTransport(transport.name);
        }
      );
    }

    function onDisconnect() {
      setIsConnected(false);
      setTransport("N/A");
    }

    socket.on("connect", onConnect);
    socket.on("disconnect", onDisconnect);

    return () => {
      socket.off("connect", onConnect);
      socket.off("disconnect", onDisconnect);
    };
  }, []);

  return {
    isConnected,
    transport,
  };
};

export { useConnectionStatus };
