import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Landing() {
    const nav = useNavigate()
  return (
    <div className="container-fluid p-0 vh-100 vw-100 d-flex flex-column align-items-center justify-content-evenly"
     style={{backgroundImage: `url("/Welcome.jpg")`,backgroundSize:"cover"}} onClick={()=>{nav("/manage")}}>
    </div>    
  )
}
