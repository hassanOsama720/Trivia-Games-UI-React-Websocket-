import React, { useEffect, useState } from 'react'
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import SettingsIcon from '@mui/icons-material/Settings';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrent, resetCurrent, resetQuestions } from '../redux/slices/questionSlice';
import logo from '../logo.svg';
import { addFollower, addTempFollower, resetTempFollower, addTop } from '../redux/slices/followerSlice';

export default function Result() {
    const list = useSelector(state=>state.questions.list)
    const current = useSelector(state=>state.questions.current)
    const followers = useSelector(state=>state.followers.list)
    const tempFollowers = useSelector(state=>state.followers.tempList)
    const newFollowers = useSelector(state=>state.followers.newList)
    const dis = useDispatch()
    const nav = useNavigate();
    function handelConfig(){
        dis(resetCurrent());
        dis(resetQuestions());
        nav("/manage");
        dis(resetCurrent());
        dis(resetQuestions());
    }

    function handelLeader(){
        const top = Object.values(followers);
            top.sort((a, b) => {
                return b.points - a.points;
            });
            let top2 = top.slice(0,9)
            dis(addTop(top2))
        nav("/leaderboard")
    }
        
    
    function handelNext(){
        for (const key in tempFollowers) {
            dis(addFollower({...tempFollowers[key],points:1}))
        } 
        dis(resetTempFollower())
        if(current == list.length-1){
            dis(resetCurrent());
            dis(resetQuestions());
            nav("/manage")
        }
        else{
            dis(changeCurrent());
            nav("/game")
        }
    }
  return (
    <div className="container-fluid p-0 vh-100 d-flex flex-column align-items-center justify-content-evenly" style={{backgroundColor:"#122641"}}>
        <div className="head w-100 mb-1 rounded-bottom d-flex justify-content-center align-items-center" style={{height:"6%",backgroundColor:"white"}}>
            <h3 style={{color:"#617C95"}}>Result</h3>
        </div>
        {
            list.length > 0?
            <>
        <div className="contant d-flex flex-column align-items-center justify-content-evenly" style={{width:"100%",height:"88%"}}>
            <div className="question d-flex  align-items-center justify-content-center rounded-4" style={{backgroundColor:"white",width:"90%",height:"15%"}}>
                <h5 style={{color:"#617C95",width:"80%",textAlign:"center"}}>{list[current].question}</h5>
            </div>
            <div className="question d-flex  align-items-center justify-content-center rounded-4" style={{border:"1px solid white",width:"70%",height:"8%"}}>
                <h5 style={{color:"white",width:"80%",textAlign:"center"}}>{list[current].answers[(list[current].correct-1)]}</h5>
            </div>
            <button  onClick={handelNext} className='w-50 rounded-pill' style={{height:"50px",border:"none",backgroundColor:"#617C95",color:"white",fontWeight:"bold",fontSize:"large",boxShadow:"#3b5057 0px 0px 7px 2px"}} name='signUp'>Next</button> 
            <div className="winners d-flex flex-wrap align-items-center justify-content-center rounded-4" style={{width:"90%",height:"60%",border:"1px solid white",overflowY:"scroll"}}>
                {Object.keys(tempFollowers).map((key)=>{

                    return(

                        <div className="winner m-2 d-flex flex-column align-items-center justify-content-center" style={{width:"80px",height:"100px",overflow:"hidden"}}>
                            <div className="image rounded-circle" style={{width:"100%",height:"75%",border:"solid 1px #999",overflow:"hidden"}}>
                                <img style={{width:"100%",height:"100%" ,objectFit: "cover"}} src={tempFollowers[key].image} alt="" />
                            </div>
                            <p className="m-0" style={{color:"white"}}>{tempFollowers[key].name}</p>
                        </div>
                    ) 
                })
                    
                }
                
            </div>
            
        </div>
            </> : <div style={{color:"white"}}>their is no question go to <Link to={"/manage"}>Manage Page</Link></div>
        }
        <div className="head w-100 px-4 rounded-top d-flex justify-content-between align-items-center" style={{height:"6%",backgroundColor:"white"}}>
            <LeaderboardIcon  style={{color:"gold", fontSize:"30px"}} onClick={handelLeader}></LeaderboardIcon>
            <AccessAlarmsIcon  style={{color:"gold" , fontSize:"30px"}}></AccessAlarmsIcon>
            <SettingsIcon  style={{color:"gold" , fontSize:"30px"}} onClick={handelConfig}></SettingsIcon>
        </div>
    </div>
  )
}
