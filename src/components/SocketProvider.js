import React, { useContext, useEffect, useState } from "react";
import io from "socket.io-client";
const live = "https://api.funlivestream.com";
const local = "http://localhost:9000";
const SocketContext = React.createContext();

export function useSocket() {
  return useContext(SocketContext);
}

export function SocketProvider({ address, children }) {
  const [socket, setSocket] = useState();

  useEffect(() => {
    if (address) {
      try {
        const newSocket = io(local, {
          query: { id: address },
        });
        newSocket.emit("join", { room: address });
        setSocket(newSocket);
        newSocket.on('tik',(data)=>{
          console.log(data)
        })
        return () => {
          newSocket.emit("leave", { room: address });
          newSocket.close();
        };
      } catch (err) {
        console.log(err.message);
      }
    }
  }, [address]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
}
