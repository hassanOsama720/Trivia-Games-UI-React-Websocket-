import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { resetCurrent, resetQuestions } from '../../redux/slices/questionSlice';
import { resetFollower, resetTempFollower } from '../../redux/slices/followerSlice';


export default function LeaderboardAR() {
    const top =useSelector(state=>state.followers.topList);
    const nav = useNavigate();
    const dis = useDispatch();

    
  return (
    <div className="container-fluid p-0 vh-100 d-flex flex-column align-items-center justify-content-evenly" style={{backgroundColor:"#122641"}}>
        <div className="head w-100 mb-1 rounded-bottom d-flex justify-content-evenly align-items-center" style={{height:"8%",backgroundColor:"white"}}>
            <div onClick={()=>{nav("/resultAR")}}>
            <ArrowBackIcon></ArrowBackIcon>
            </div>
            <h3 style={{color:"#617C95"}}>المتصدرين</h3>
            <div onClick={()=>{
                dis(resetCurrent());
                dis(resetQuestions());
                dis(resetFollower());
                dis(resetTempFollower());
                nav("/manageAR")}}>
            <ArrowBackIcon></ArrowBackIcon>
            </div>
        </div>
        <div className="contant d-flex flex-column align-items-center justify-content-evenly" style={{width:"100%",height:"92%"}}>
            {top.map((winner)=>{
                return(

                    <div key={winner.name} className="winners rounded-4 d-flex align-items-center justify-content-between pس-3" style={{width:"90%",height:"8%",border:"solid 1px white"}}>
                        <div className="answer d-flex flex-column align-items-center justify-content-evenly" style={{width:"40%",height:"100%"}}>
                            <p className="m-0 w-100" style={{color:"white",fontSize:"smaller",textAlign:"center"}}>عدد النقاط</p>
                            <p className="m-0 w-100" style={{color:"white",textAlign:"center"}}>{winner.points}</p>
                        </div>
                        <div className="winner d-flex ps-2 pe-4 rounded-4 bg-primary  align-items-center justify-content-between" style={{width:"60%",height:"100%",overflow:"hidden"}}>
                            <p className="m-0" style={{color:"white",overflow:"hidden",width:"60%"}}>{winner.name}</p>
                            <div className="image rounded-circle" style={{width:"30%",height:"90%",border:"solid 1px #999",overflow:"hidden"}}>
                                <img style={{width:"100%",height:"100%" ,objectFit: "cover"}} src={winner.image} alt="" />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
