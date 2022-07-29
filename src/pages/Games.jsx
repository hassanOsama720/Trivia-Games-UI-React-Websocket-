import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Games() {
    const nav = useNavigate()

  return (
    <div className="container p-0 fluid vh-100 d-flex flex-column align-items-center  flex-wrap" style={{backgroundColor:"#122641"}}>
        <div className="head w-100 mb-4 rounded-bottom d-flex justify-content-evenly align-items-center" style={{height:"55px",backgroundColor:"white"}}>
            <h3 style={{color:"#617C95"}}>Our Games</h3>
        </div>
        <div className="container p-0 fluid h-75  d-flex flex-column justify-content-center align-items-center flex-wrap" style={{backgroundColor:"#122641"}}
            onClick={()=>{nav("/manage")}}
        >
            <div className="game m-2 d-flex flex-column align-items-center justify-content-evenly" style={{width:"100px",height:"120px",overflow:"hidden"}}>
                <div className="image rounded-circle" style={{width:"100%",height:"75%",border:"solid 1px #999",overflow:"hidden"}}>
                    <img style={{width:"100%",height:"100%" ,objectFit: "cover"}} src="/Welcome.jpg" alt="" />
                </div>
                <h6 className="m-0" style={{color:"white"}}>Trivia Game</h6>
            </div>
        </div>
    </div>
  )
}
