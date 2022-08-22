import React, { useContext, useEffect, useState } from "react";
import io from "socket.io-client";
const live = "https://api.funlivestream.com";
const local = "http://localhost:9000";
const SocketContext = React.createContext();

export function useSocket() {
  return useContext(SocketContext);
}

export function SocketProvider({ address, videoId, access_token, children }) {
  const [socket, setSocket] = useState();

  useEffect(() => {
    if(videoId){
      var source = new EventSource(
        `https://streaming-graph.facebook.com/395095602765900/live_comments?access_token=${access_token}&comment_rate=ten_per_second&fields=from{name,id},message`);
        setSocket(source)
    }
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
