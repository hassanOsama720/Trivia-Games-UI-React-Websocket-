import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import {
  Routes,
  Route,
} from "react-router-dom";
import Manage from './pages/Trivia-EN/Manage';
import Start from './pages/Trivia-EN/Start';
import Games from './pages/Games';
import Game from './pages/Trivia-EN/Game';
import Result from './pages/Trivia-EN/Result';
import Leaderboard from './pages/Trivia-EN/Leaderboard';
import ProtectedRoute from './protectedRoutes';
import Landing from './pages/Landing';
import ManageAR from './pages/Trivia-AR/ManageAR';
import StartAR from './pages/Trivia-AR/StartAR';
import GameAR from './pages/Trivia-AR/GameAR';
import ResultAR from './pages/Trivia-AR/ResultAR';
import LeaderboardAR from './pages/Trivia-AR/LeaderboardAR';

import { SocketProvider } from "./components/SocketProvider";
import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';
import { useSocket } from "./components/SocketProvider";


function App() {
  const socket = useSocket()
  const [address,setAddress] = useState();
  const [videoId,setVideoId] = useState();
  const [access,setAccess] = useState();
  const [cookies,setCookies] = useCookies(['config'])
  useEffect(()=>{
    if(typeof(cookies.config) !== "undefined"){
      
        setAddress(cookies.config.username)
      
    }
  },[cookies.config])

  return (
    <SocketProvider address={address}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="games" element={<ProtectedRoute component={Games}/>} />



        <Route path="manage" element={<ProtectedRoute component={Manage} />} />
        <Route path="start" element={<ProtectedRoute component={Start} />} />
        <Route path="result" element={<ProtectedRoute component={Result}/>} />
        <Route path="leaderboard" element={<ProtectedRoute component={Leaderboard}/>} />
        <Route path="game" element={<ProtectedRoute component={Game}  />}/>
        


        <Route path="manageAR" element={<ProtectedRoute component={ManageAR} />} />
        <Route path="startAR" element={<ProtectedRoute component={StartAR} />} />
        <Route path="gameAR" element={<ProtectedRoute component={GameAR}  />}/>
        <Route path="resultAR" element={<ProtectedRoute component={ResultAR}/>} />
        <Route path="leaderboardAR" element={<ProtectedRoute component={LeaderboardAR}/>} />
      </Routes>
    </SocketProvider>
  );
}

export default App;
