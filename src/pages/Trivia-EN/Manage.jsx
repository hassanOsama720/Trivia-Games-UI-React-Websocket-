import { Alert, FormControlLabel, Switch, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addQuestion, getQuestions } from '../../redux/slices/questionSlice'
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FacebookLogin from 'react-facebook-login';
import { FacebookProvider, LoginButton } from 'react-facebook';

const responseFacebook = (response) => {
  console.log(response);
  axios.get(`https://graph.facebook.com/104670745702316?
  fields=access_token&
  access_token=${response.accessToken}`)
    .then((response)=>{console.log(response)})
    .catch((err)=>{console.log(err)})
}


export default function Manage(props) {
    const [config,setConfig] = useState({
        hashtag:"",
        num:0,
        time:0,
        camera:false,
        storedQue:false
    })
    const [cookies, setCookie] = useCookies(["config"]);
    const [jwtCookies, setjwtCookie , removejwtCookie] = useCookies(["user"]);
    //------------------------------------------------------------
    const [answers,setAnswers] = useState({
        answer1:{},
        answer2:{},
        answer3:{},
        answer4:{},
    })
    const [addNewQuestion,setAddNewQuestion] = useState({
        question:"",
        answers:[],
        correct:0
    })
    const list = useSelector(state=>state.questions.list)
    const dis = useDispatch()
    const [popup,setPopup] = useState()
    const nav = useNavigate()
    //-------------------------------------------------------------
    useEffect(()=>{
        setAddNewQuestion({...addNewQuestion,answers:[answers.answer1,answers.answer2,answers.answer3,answers.answer4]})
        
    },[answers])

    function handelAdd (){
        if(addNewQuestion.question && addNewQuestion.answers && addNewQuestion.correct > 0 && addNewQuestion.correct < 5){
            dis(addQuestion(addNewQuestion))
            setPopup(<Alert severity="success">Question Added</Alert>)
        }     
        else{
            setPopup(<Alert severity="error">please check your inputs</Alert>)
        }    
    }

    function handelStart(){
        //props.socket.on("tik",(data)=>{
            //console.log(data)
        //})
        //props.socket.send(config.username); 
        setCookie("config",config)
        if(config.storedQue){
            let configs = {
                headers: {
                  'Authorization': 'Bearer ' + jwtCookies.user.token
                }
              }
            axios.get(`https://trivia1-api.herokuapp.com/questions/${config.num}`,configs)
            .then((res)=>{dis(getQuestions(res.data)) ; nav("/start")})
            .catch((err)=>{console.log(err)})
        }
        else{
            nav("/start");
        }
    }
    const handleResponse = (data) => {
        console.log(data);
      }
     
    const  handleError = (error) => {
        this.setState({ error });
      }
  return (
    <div className="container p-0 fluid min-vh-100 d-flex flex-column align-items-center  flex-wrap" style={{backgroundColor:"#122641"}}>
        <div className="head w-100 mb-4 rounded-bottom d-flex justify-content-evenly align-items-center" style={{height:"55px",backgroundColor:"white"}}>
        <div onClick={()=>{nav("/games")}}>
            <ArrowBackIcon></ArrowBackIcon>
            </div>
            <h3 style={{color:"#617C95"}}>Manage Question</h3>
            <div onClick={()=>{removejwtCookie("user");nav("/login")}}>
                <LogoutIcon></LogoutIcon>
            </div>
        </div>
        <div className="container p-0 fluid h-75  d-flex flex-column justify-content-evenly align-items-center flex-wrap" style={{backgroundColor:"#122641"}}>
            <div className="configs mb-4 d-flex justify-content-evenly align-items-center flex-column rounded-4" style={{width:"94%",height:"250px",backgroundColor:"white",border:"solid 2px gold"}}>
                <div className="config w-100 d-flex ps-3 pe-3 justify-content-between align-items-center">
                    <h5 style={{color:"#617C95"}}>Hashtag</h5>
                    <TextField value={config.hashtag} id="standard-basic" variant="standard" onChange={(e)=>{setConfig({...config,hashtag:e.target.value})}} />
                </div>
                <div className="config w-100 d-flex ps-3 pe-3 justify-content-between align-items-center">
                    <h5 style={{color:"#617C95"}}>UserName</h5>
                    <TextField value={config.username} id="standard-basic" variant="standard" onChange={(e)=>{setConfig({...config,username:e.target.value})}} />
                </div>
                <div className="config w-100 d-flex ps-3 pe-3 justify-content-between align-items-center">
                    <h5 style={{color:"#617C95"}}>Que.Time</h5>
                    <TextField value={config.time} id="standard-basic" variant="standard" onChange={(e)=>{setConfig({...config,time:+e.target.value})}} />
                </div>
                <div className="config w-100 d-flex ps-3 pe-3 justify-content-between align-items-center">
                {/* <FacebookLogin
                    appId="588362626275865"
                    //autoLoad={true}
                    fields="name,email"
                    scope='pages_read_engagement,pages_show_list'
                    //onClick={(data)=>{console.log(data)}}
                    callback={responseFacebook} /> */}
                    <FacebookProvider appId="588362626275865">
                        <LoginButton
                        scope="pages_read_engagement"
                        onCompleted={handleResponse}
                        onError={handleError}
                        >
                        <span>Login via Facebook</span>
                        </LoginButton>
                    </FacebookProvider>
                </div>
                {config.storedQue?
                <div className="config w-100 d-flex ps-3 pe-3 justify-content-between align-items-center">
                    <h6 style={{color:"#617C95"}}>No of questions</h6>
                    <TextField value={config.num} id="standard-basic" variant="standard" onChange={(e)=>{setConfig({...config,num:+e.target.value})}} />
                </div> : <div></div>
                }
                
                    <FormControlLabel
                        control={<Switch color="primary"  onChange={(e)=>{setConfig({...config,camera:e.target.checked})}} />}
                        label="FrontCamera"
                        labelPlacement="start"
                    />
                    <FormControlLabel
                        control={<Switch color="primary" onChange={(e)=>{setConfig({...config,storedQue:e.target.checked})}} />}
                        label="Use Stored Ques"
                        labelPlacement="start"
                    />
            
                
            </div>
            <div className="add d-flex mb-1 justify-content-evenly align-items-center flex-column rounded-4" style={{width:"94%",height:"300px",border:"1px solid white"}}>
                <div className="config w-100 d-flex ps-3 pe-3 justify-content-between align-items-center">
                    <h6 style={{color:"white"}}>Question</h6>
                    <TextField value={addNewQuestion.question} id="standard-basic" variant="standard" onChange={(e)=>{setAddNewQuestion({...addNewQuestion , question:e.target.value})}} />
                </div>
                <div className="config w-100 d-flex ps-3 pe-3 justify-content-between align-items-center">
                    <h6 style={{color:"white"}}>Answer 1 </h6>
                    <TextField vlaue={addNewQuestion.answers[0]} id="standard-basic" variant="standard" onChange={(e)=>{setAnswers({...answers,answer1:{answer:e.target.value , id:1}})}} />
                </div>
                <div className="config w-100 d-flex ps-3 pe-3 justify-content-between align-items-center">
                    <h6 style={{color:"white"}}>Answer 2</h6>
                    <TextField vlaue={addNewQuestion.answers[1]} id="standard-basic" variant="standard" onChange={(e)=>{setAnswers({...answers,answer2:{answer:e.target.value , id:2}})}} />
                </div>
                <div className="config w-100 d-flex ps-3 pe-3 justify-content-between align-items-center">
                    <h6 style={{color:"white"}}>Answer 3</h6>
                    <TextField vlaue={addNewQuestion.answers[2]} id="standard-basic" variant="standard" onChange={(e)=>{setAnswers({...answers,answer3:{answer:e.target.value , id:3}})}} />
                </div>
                <div className="config w-100 d-flex ps-3 pe-3 justify-content-between align-items-center">
                    <h6 style={{color:"white"}}>Answer 4</h6>
                    <TextField vlaue={addNewQuestion.answers[3]} id="standard-basic" variant="standard" onChange={(e)=>{setAnswers({...answers,answer4:{answer:e.target.value , id:4}})}} />
                </div>
                <div className="config w-100 d-flex ps-2 pe-2 justify-content-between align-items-center">
                    <h6 style={{color:"white"}}>No of correct answer</h6>
                    <TextField vlaue={addNewQuestion.correct} id="standard-basic" variant="standard" onChange={(e)=>{setAddNewQuestion({...addNewQuestion , correct:+e.target.value})}} />
                </div>
                {popup}
                <button className='rounded-circle ' style={{height:"50px",border:"none",width:"50px",fontWeight:"bold",color:"#617C95"}} onClick={handelAdd}>+</button>
            </div>
                <button className='rounded-circle ' style={{height:"50px",border:"none",width:"70px",fontWeight:"bold",color:"#617C95"}} onClick={handelStart}>Start</button>
        </div>
        {list.length>0 
        
           ? <div className="questions mt-5  d-flex flex-column rounded-4 justify-content-evenly align-items-center" style={{width:"94%"}}>
            {list.map((question)=>{
                return (
                    <div className="question m-0 mt-3 d-flex flex-column rounded-4 justify-content-evenly align-items-center" style={{width:"100%",height:"250px",border:"solid 1px white"}}>
                        <h5 style={{color:"white"}}>{question.question}</h5>
                        <div className="line" style={{width:"50%",border:"1px solid white"}}></div>
                        <h6 style={{color:"white"}}>{question.answers[0].answer}</h6>
                        <div className="line" style={{width:"50%",border:"1px solid white"}}></div>
                        <h6 style={{color:"white"}}>{question.answers[1].answer}</h6>
                        <div className="line" style={{width:"50%",border:"1px solid white"}}></div>
                        <h6 style={{color:"white"}}>{question.answers[2].answer}</h6>
                        <div className="line" style={{width:"50%",border:"1px solid white"}}></div>
                        <h6 style={{color:"white"}}>{question.answers[3].answer}</h6>
                    
                    </div>    
                )
            })}
            </div>
        
         
            
            : <div></div>
        }
        
    </div>
  )
}
