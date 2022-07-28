import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { register } from '../requests';
import axios from 'axios';
import { Alert } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';


export default function Register() {
    const [data,setData] = useState({
        name:"",
        email:"",
        password:""
    })
    const [popup,setPopup] = useState("");
    let nav = useNavigate();





    function handelRegister (){
        
            axios.post("https://trivia1-api.herokuapp.com/register",data)
                .then((res)=>{
                    setPopup(<Alert severity="success">User Signed Successfully!</Alert>)
                    setTimeout(()=>{nav('/login')},1000)
                })
                .catch((err)=>{
                    setPopup(<Alert severity="error">Registertion faild, check your data and try again!</Alert>)

                })
        
    }
    
  return (
    <div className="container vh-100 pt-5 d-flex flex-column justify-content-evenly align-items-center flex-wrap" style={{backgroundColor:"#122641"}}>
        <div className="bot w-75 mt-4 rounded-pill d-flex" style={{backgroundColor:"#BBE0FA" , height:"50px"}}>
            <div className='rounded-pill d-flex pt-2 align-items-center justify-content-center' style={{
                width:"50%",
                height:"100%",
                backgroundColor:"#BBE0FA"
            }}>
                <h4 style={{
                    color:"#122641",
                    fontWeight:"bold"
                }}>SIGN IN</h4>
            </div>
            <div className='rounded-pill d-flex pt-2 align-items-center justify-content-center' style={{
                width:"50%",
                height:"100%",
                backgroundColor:"#617C95"
            }}>
                <h4 style={{
                    color:"white",
                    fontWeight:"bold"
                }}>SIGN UP</h4>
            </div>
        </div>
        <TextField value={data.name} onChange={(e)=>{setData({...data , name:e.target.value})}} className='inputRounded w-75'  size='small' sx={{ input: { color: '#999' } }} InputLabelProps={{style: { color: '#999', fontSize:"15px"} }}  id="outlined-basic" label="Enter Your Name" variant="outlined" />
        <TextField value={data.email} onChange={(e)=>{setData({...data , email:e.target.value})}} className='inputRounded w-75'  size='small' sx={{ input: { color: '#999' } }} InputLabelProps={{style: { color: '#999', fontSize:"15px"} }}  id="outlined-basic" label="Enter Your Email Address" variant="outlined" />
        <TextField value={data.password} onChange={(e)=>{setData({...data , password:e.target.value})}} className='inputRounded w-75'  size='small' sx={{ input: { color: '#999' } }} InputLabelProps={{style: { color: '#999', fontSize:"15px"} }}  id="outlined-basic" label="Enter Your Password" type="password" variant="outlined" />
        {popup}
        <button  onClick={handelRegister} className='w-50 rounded-pill' style={{height:"50px",border:"none",backgroundColor:"#617C95",color:"white",fontWeight:"bold",fontSize:"large"}} name='signUp'>Sign Up</button> 
        <div style={{color:"white"}}>Already Registered ? <Link to={"/login"}>Login Here</Link></div>
        <button  className='w-75 rounded-pill' style={{height:"40px",border:"none",backgroundColor:"white",color:"#617C95",fontWeight:"bold",fontSize:"large"}} name='signUp'>Sign Up With Facebook</button>
        <button  className='w-75 rounded-pill' style={{height:"40px",border:"none",backgroundColor:"white",color:"#617C95",fontWeight:"bold",fontSize:"large"}} name='signUp'>Sign Up With Google</button>
          
    </div>
  )
}
