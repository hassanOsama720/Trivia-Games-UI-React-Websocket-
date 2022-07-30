import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

export default function Leaderboard() {
    const top =useSelector(state=>state.followers.topList);
    const nav = useNavigate();
  return (
    <div className="container-fluid p-0 vh-100 d-flex flex-column align-items-center justify-content-evenly" style={{backgroundColor:"#122641"}}>
        <div className="head w-100 mb-1 rounded-bottom d-flex justify-content-evenly align-items-center" style={{height:"8%",backgroundColor:"white"}}>
            <div onClick={()=>{nav("/result")}}>
            <ArrowBackIcon></ArrowBackIcon>
            </div>
            <h3 style={{color:"#617C95"}}>Leaderboard</h3>
            <div onClick={()=>{nav("/manage")}}>
            <ArrowBackIcon></ArrowBackIcon>
            </div>
        </div>
        <div className="contant d-flex flex-column align-items-center justify-content-evenly" style={{width:"100%",height:"92%"}}>
            {top.map((winner)=>{
                return(

                    <div className="winners rounded-4 d-flex align-items-center justify-content-between pe-3" style={{width:"90%",height:"8%",border:"solid 1px white"}}>
                        <div className="winner d-flex ps-2 pe-4 rounded-4 bg-primary  align-items-center justify-content-between" style={{width:"60%",height:"100%",overflow:"hidden"}}>
                            <div className="image rounded-circle" style={{width:"30%",height:"90%",border:"solid 1px #999",overflow:"hidden"}}>
                                <img style={{width:"100%",height:"100%" ,objectFit: "cover"}} src={winner.image} alt="" />
                            </div>
                            <p className="m-0" style={{color:"white"}}>{winner.name}</p>
                        </div>
                        <div className="answer d-flex flex-column align-items-center justify-content-evenly" style={{width:"40%",height:"100%"}}>
                            <p className="m-0 w-100" style={{color:"white",fontSize:"smaller",textAlign:"center"}}>Correct Answers</p>
                            <p className="m-0 w-100" style={{color:"white",textAlign:"center"}}>{winner.points}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
