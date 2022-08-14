import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Landing() {
    const nav = useNavigate()
  return (
    <div className="container p-0 vh-100 w-100 position-relative d-flex flex-column align-items-center justify-content-center"style={{backgroundColor:"#122641"}}>
      <h1 className='cursor-default colChange' style={{width:"90%"}} >
          <span className='d-inline-block bounce' ><h1 style={{fontSize:"40px",fontWeight:"bolder"}}>W</h1></span>
          <span className='d-inline-block '       ><h1 style={{fontSize:"40px",fontWeight:"bolder"}}>e</h1></span>
          <span className='d-inline-block bounce2'><h1 style={{fontSize:"40px",fontWeight:"bolder"}}>l</h1></span>
          <span className='d-inline-block '><h1 style={{fontSize:"40px",fontWeight:"bolder"}}>c</h1></span>
          <span className='d-inline-block bounce'><h1 style={{fontSize:"40px",fontWeight:"bolder"}}>o</h1></span>
          <span className='d-inline-block '><h1 style={{fontSize:"40px",fontWeight:"bolder"}}>m</h1></span>
          <span className='d-inline-block bounce2'><h1 style={{fontSize:"40px",fontWeight:"bolder"}}>e</h1></span>

          <span className='d-inline-block ' style={{width:"10px"}}><h1 style={{fontSize:"40px",fontWeight:"bolder"}}> </h1></span>
          
          <span className='d-inline-block bounce2'><h1 style={{fontSize:"40px",fontWeight:"bolder"}}>T</h1></span>
          <span className='d-inline-block '       ><h1 style={{fontSize:"40px",fontWeight:"bolder"}}>o</h1></span>
          <span className='d-inline-block '       ><h1 style={{fontSize:"40px",fontWeight:"bolder"}}>:</h1></span>
          <br />

          <span className='d-inline-block ' style={{width:"20px"}}><h1 style={{fontSize:"40px",fontWeight:"bolder"}}> </h1></span>
          <span className='d-inline-block bounce' ><h1 style={{fontSize:"40px",fontWeight:"bolder"}}>F</h1></span>
          <span className='d-inline-block '       ><h1 style={{fontSize:"40px",fontWeight:"bolder"}}>u</h1></span>
          <span className='d-inline-block bounce2'><h1 style={{fontSize:"40px",fontWeight:"bolder"}}>n</h1></span>
          <span className='d-inline-block ' style={{width:"10px"}}><h1 style={{fontSize:"40px",fontWeight:"bolder"}}> </h1></span>

          <span className='d-inline-block bounce2'><h1 style={{fontSize:"40px",fontWeight:"bolder"}}>L</h1></span>
          <span className='d-inline-block '       ><h1 style={{fontSize:"40px",fontWeight:"bolder"}}>i</h1></span>
          <span className='d-inline-block        '><h1 style={{fontSize:"40px",fontWeight:"bolder"}}>v</h1></span>
          <span className='d-inline-block bounce2'><h1 style={{fontSize:"40px",fontWeight:"bolder"}}>e</h1></span>

          <span className='d-inline-block ' style={{width:"10px"}}><h1 style={{fontSize:"40px",fontWeight:"bolder"}}> </h1></span>
          
          <span className='d-inline-block bounce2'><h1 style={{fontSize:"40px",fontWeight:"bolder"}}>S</h1></span>
          <span className='d-inline-block '       ><h1 style={{fontSize:"40px",fontWeight:"bolder"}}>t</h1></span>
          <span className='d-inline-block '       ><h1 style={{fontSize:"40px",fontWeight:"bolder"}}>r</h1></span>
          <span className='d-inline-block '       ><h1 style={{fontSize:"40px",fontWeight:"bolder"}}>e</h1></span>
          <span className='d-inline-block bounce2'       ><h1 style={{fontSize:"40px",fontWeight:"bolder"}}>a</h1></span>
          <span className='d-inline-block '       ><h1 style={{fontSize:"40px",fontWeight:"bolder"}}>m</h1></span>
      </h1>

      <div className="start shake rounded-circle mt-4 d-flex align-items-center justify-content-center " style={{width:"50%",height:"25%",border:"solid 2px white"}}
        onClick={()=>{nav("/games")}}
      >
        <h1 style={{color:"gold"}}>Click Here !</h1>
      </div>
    
    
    
    
      <div className="back-c d-flex flex-wrap  position-absolute gap-1 rotate-12" style={{width:"15%",height:"8%",top:"20px",left:"15px",transform:"rotate(45deg)"}}>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
      </div>
      <div className="back-c d-flex flex-wrap  position-absolute gap-1 rotate-12" style={{width:"15%",height:"8%",bottom:"40px",right:"23px",transform:"rotate(30deg)"}}>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
      </div>
      <div className="back-c d-flex flex-wrap  position-absolute gap-1 rotate-12" style={{width:"15%",height:"8%",bottom:"150px",left:"80px",transform:"rotate(45deg)"}}>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
      </div>
      <div className="back-c d-flex flex-wrap  position-absolute gap-1 rotate-12" style={{width:"15%",height:"8%",top:"100px",right:"70px",transform:"rotate(45deg)"}}>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
          <div className="cir rounded-circle w-25 h-25 " style={{backgroundColor:"#A91079"}}></div>
      </div>
    </div>    
  )
}
