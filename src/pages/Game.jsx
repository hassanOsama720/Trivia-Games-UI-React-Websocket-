import React, { useEffect } from 'react'
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import Countdown from 'react-countdown';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { io } from "socket.io-client";
import Webcam from "react-webcam";
import { addFollower, addNew, addTempFollower } from '../redux/slices/followerSlice';
import { resetCurrent, resetQuestions } from '../redux/slices/questionSlice';


export default function Game(props) {
    const list = useSelector(state=>state.questions.list)
    // const followers = useSelector(state=>state.followers.list)
    // const tempFollowers = useSelector(state=>state.followers.tempList)
    // const newFollowers = useSelector(state=>state.followers.newList)
    const current = useSelector(state=>state.questions.current)
    const [cookies, setCookie , removeCookie] = useCookies(["config"]);
    const [hig,setHig] = useState("30%");
    const dis = useDispatch()
    //-----------------------------------------------------------------------------
    useEffect(()=>{
        if(cookies.config.camera){
            setHig("15%")
        }
        props.socket.on("chat",(data)=>{
            
            dis(addTempFollower({name:data.nickname,comment:data.comment,image:data.profilePictureUrl}))
            // dis(addFollower({name:data.nickname,comment:data.comment,points:1}))
            
                
        });
         return ()=>{props.socket.off()}    
    })
    
            

    //------------------------------------------------------------------------------
    const nav = useNavigate();

    function handelConfig(){
        dis(resetCurrent());
        dis(resetQuestions());
        nav("/manage")
    }
    function handelCount(){
        props.socket.off();
        
        nav("/result");
        
    }

  return (
    <div className="container-fluid p-0 vh-100 d-flex flex-column align-items-center justify-content-evenly" style={{backgroundColor:"#122641"}}>
        <div className="head w-100 mb-1 rounded-bottom d-flex justify-content-center align-items-center" style={{height:"6%",backgroundColor:"white"}}>
            <h3 style={{color:"#617C95"}}>Trivia Game</h3>
        </div>
        <div className="contant d-flex flex-column align-items-center justify-content-evenly" style={{width:"100%",height:"88%"}}>

            {cookies.config.camera? <div className="camera rounded-4 " style={{width:"90%",height:"30%",border:"solid 1px white",overflow:"hidden"}}>
            <Webcam style={{width:"100%",height:"100%",objectFit: "cover"}} />
            </div> : <div></div>}
            {list.length > 0?
                <>
            <div className="question rounded-4 d-flex flex-column align-items-center justify-content-evenly " style={{width:"90%",height:hig,border:"solid 1px white"}}>
                <h6 style={{color:"white"}}>
                    Question No : {current+1}
                </h6>
                <div className="line" style={{width:"50%",border:"1px solid #999"}}></div>
                <p style={{color:"white"}}>
                    {list[current].question}
                </p>
            </div>
            <h6 className='m-0' style={{color:"white"}}>
                Todays Hashtag: <span style={{color:"gold"}}>{cookies.config.hashtag}</span>
            </h6>
            <p className='m-0' style={{color:"white"}}>
                Use above hashtag in front of answer number
            </p>
            <div className="answers w-100 d-flex flex-column align-items-center justify-content-evenly">
                <div className="answer d-flex rounded-3 align-items-center justify-content-evenly" style={{width:"90%", height:"40px",backgroundColor:"white",border:"solid 1px gold"}}>
                    <h5 className="m-0" style={{color:"#617C95",}}>1</h5>
                    <div className="line" style={{height:"60%",border:"1px solid #999"}}></div>
                    <p className="m-0" style={{width:"75%",color:"#617C95"}}>{list[current].answers[0].answer}</p>
                </div>
                <div className="answer mt-1 d-flex rounded-3 align-items-center justify-content-evenly" style={{width:"90%", height:"40px",backgroundColor:"white",border:"solid 1px gold"}}>
                    <h5 className="m-0" style={{color:"#617C95",}}>2</h5>
                    <div className="line" style={{height:"60%",border:"1px solid #999"}}></div>
                    <p className="m-0" style={{width:"75%",color:"#617C95"}}>{list[current].answers[1].answer}</p>
                </div>
                <div className="answer mt-1 d-flex rounded-3 align-items-center justify-content-evenly" style={{width:"90%", height:"40px",backgroundColor:"white",border:"solid 1px gold"}}>
                    <h5 className="m-0" style={{color:"#617C95",}}>3</h5>
                    <div className="line" style={{height:"60%",border:"1px solid #999"}}></div>
                    <p className="m-0" style={{width:"75%",color:"#617C95"}}>{list[current].answers[2].answer}</p>
                </div>
                <div className="answer mt-1 d-flex rounded-3 align-items-center justify-content-evenly" style={{width:"90%", height:"40px",backgroundColor:"white",border:"solid 1px gold"}}>
                    <h5 className="m-0" style={{color:"#617C95",}}>4</h5>
                    <div className="line" style={{height:"60%",border:"1px solid #999"}}></div>
                    <p className="m-0" style={{width:"75%",color:"#617C95"}}>{list[current].answers[3].answer}</p>
                </div>

            </div>
            <div className="counter d-flex justify-content-center align-items-center rounded-4" style={{backgroundColor:"white",width:"40%",height:"5%"}}>
                <Countdown date={Date.now() + (+cookies.config.time*1000)} onComplete={handelCount} />
            </div>
                </> : <div style={{color:"white"}}>their is no question go to <Link to={"/manage"}>Manage Page</Link></div>
            }
            
        </div>
        <div className="head w-100 px-4 rounded-top d-flex justify-content-between align-items-center" style={{height:"6%",backgroundColor:"white"}}>
            <LeaderboardIcon  style={{color:"gold", fontSize:"30px"}}></LeaderboardIcon>
            <AccessAlarmsIcon  style={{color:"gold" , fontSize:"30px"}}></AccessAlarmsIcon>
            <SettingsIcon  style={{color:"gold" , fontSize:"30px"}} onClick={handelConfig}></SettingsIcon>
        </div>
    </div>
  )
}
