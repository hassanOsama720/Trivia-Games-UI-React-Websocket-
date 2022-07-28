import logo from './logo.svg';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Manage from './pages/Manage';
import Start from './pages/Start';
import Game from './pages/Game';
import Result from './pages/Result';
import { io } from "socket.io-client";
import { useEffect } from 'react';
import Leaderboard from './pages/Leaderboard';
import ProtectedRoute from './protectedRoutes';
import Landing from './pages/Landing';
const socket = io("https://trivia1-api.herokuapp.com/")

function App() {
  useEffect(()=>{
    socket.on("connect",()=>{

      console.log(socket.connected) 
    })
  })

  return (
    <Routes>
       <Route path="register" element={<Register />} />
       <Route path="login" element={<Login />} />
       <Route path="manage" element={<ProtectedRoute component={Manage}/>} />
       <Route path="start" element={<ProtectedRoute component={Start}/>} />
       <Route path="result" element={<ProtectedRoute component={Result}/>} />
       <Route path="leaderboard" element={<ProtectedRoute component={Leaderboard}/>} />
       <Route path="game" element={<ProtectedRoute component={Game} socket={socket} />}/>
       <Route path="/" element={<Landing />} />
      {/* //  <Route path="game" element={<Game socket={socket} />} />
      //  <Route path="result" element={<Result />} />
      //  <Route path="leaderboard" element={<Leaderboard />} /> */}
    </Routes>
  );
}

export default App;
