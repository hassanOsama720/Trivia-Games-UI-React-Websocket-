import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { Alert } from '@mui/material';
import { useCookies } from "react-cookie";
import { Link, useNavigate } from 'react-router-dom';



export default function Login() {
    const [data,setData] = useState({
        email:"",
        password:""
    })
    const [cookies, setCookie] = useCookies(["user"]);

    const [popup,setPopup] = useState("");
    let nav = useNavigate();




    function handelLogin (){
        
            axios.post("https://trivia1-api.herokuapp.com/login",data)
                .then((res)=>{
                    setPopup(<Alert severity="success">Login Success</Alert>)
                    setCookie("user",{token:res.data.accessToken , name:res.data.name},{maxAge:(3600*12)})
                    setTimeout(()=>{nav('/games')},1000)

                })
                .catch((err)=>{
                    setPopup(<Alert severity="error">Login Failed Check Your Email and Password!</Alert>)

                })
        
    }
    
  return (
    <div className="container vh-100  d-flex flex-column justify-content-evenly align-items-center flex-wrap" style={{backgroundColor:"#122641"}}>
        <div className="container d-flex flex-column justify-content-evenly align-items-center flex-wrap rounded-5 p-1" style={{backgroundColor:"#28547d",height:"75%",width:"90%"}}>

            <div className="bot w-75 mt-4 rounded-pill d-flex" style={{backgroundColor:"#BBE0FA" , height:"50px",boxShadow:"#3b5057 0px 0px 7px 2px"}}>
                <div className='rounded-pill d-flex pt-2 align-items-center justify-content-center' style={{
                    width:"50%",
                    height:"100%",
                    backgroundColor:"#617C95"
                }}>
                    <h4 style={{
                        color:"white",
                        fontWeight:"bold"
                    }}>SIGN IN</h4>
                </div>
                <div className='rounded-pill d-flex pt-2 align-items-center justify-content-center' style={{
                    width:"50%",
                    height:"100%",
                    backgroundColor:"#BBE0FA"
                }}>
                    <h4 style={{
                        color:"#122641",
                        fontWeight:"bold"
                    }}>SIGN UP</h4>
                </div>
            </div>
            
            <TextField value={data.email} onChange={(e)=>{setData({...data , email:e.target.value})}} className='inputRounded w-75'  size='small' sx={{ input: { color: 'white' } }} InputLabelProps={{style: { color: 'white', fontSize:"15px"} }}  id="outlined-basic" label="Enter Your Email Address" variant="outlined" />
            <TextField value={data.password} onChange={(e)=>{setData({...data , password:e.target.value})}} className='inputRounded w-75'  size='small' sx={{ input: { color: 'white' } }} InputLabelProps={{style: { color: 'white', fontSize:"15px"} }}  id="outlined-basic" label="Enter Your Password" type="password" variant="outlined" />
            {popup}
            <button  onClick={handelLogin} className='w-50 rounded-pill' style={{height:"50px",border:"none",backgroundColor:"#617C95",color:"white",fontWeight:"bold",fontSize:"large",boxShadow:"#3b5057 0px 0px 7px 2px"}} name='signUp'>Log In</button> 
            <div style={{color:"white"}}>Not A Member ? <Link to={'/register'}>Sign Up Now</Link></div>
        </div>
        
    </div>
  )
}
