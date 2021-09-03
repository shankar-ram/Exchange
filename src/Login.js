import $ from 'jquery';
import './App.css';
import React, { useEffect } from "react";
import logo from './FInalCryptologo.png';
import { TimelineLite } from 'gsap/gsap-core';
import { Elastic } from 'gsap/all';
import './Login.css'
import swal from "sweetalert";
import axios from 'axios';
import { AccountBox } from "./components/accountBox";
import {isLogin} from './utils'
function App() {
  
  const [email,setemail]=React.useState('')
  const [signup,setsignup] = React.useState(false)
  const [signin,setsignin]=React.useState(true)
  const [login_username,set_login_username] = React.useState('')
  const [signup_username,set_signup_username] = React.useState('')
  const [login_password,set_login_password] = React.useState('')
  const [signup_password,set_signup_password] = React.useState('')
  const [signup_password_conf,set_signup_password_conf] = React.useState('')
  const [signup_email,set_signup_email] = React.useState('')
  const [emails,setemails] = React.useState('')
  const [username,setusername] = React.useState('')
  const [visible, setVisible]=React.useState(true)
  const [visible1,setvisible1]=React.useState(false)
  const [visible2,setVisible2]=React.useState(false)
  const [code,setcode] =React.useState("")
  const [code1,setcode1] =React.useState("")
    
  const [password,setPassword]=React.useState('')
  const [confPassword,setConfPassword]=React.useState('')
  $(document).ready(function(){ 
    var  $v01  = $('.vertical0')
        ,$v02  = $('.vertical1')
        ,$v03  = $('.vertical2')
        ,$v04  = $('.vertical3')
        ,$v05  = $('.vertical4')
        ,$v06  = $('.vertical5')
        ,$v07  = $('.vertical6')
        ,$v08  = $('.vertical7')
        ,$v09  = $('.vertical8')
        ,$v10  = $('.vertical9')
        ,$login= $('.modal')
        ,speed = 60
        ,tl = new TimelineLite({onComplete:restart});
    
        tl.fromTo($v01,speed*0.70,{y:-250} ,{y:-750} ,'sync')
          .fromTo($v02,speed*0.75,{y:-950} ,{y:-1250},'sync')
          .fromTo($v03,speed*0.95,{y:-1000},{y:-1850},'sync')
          .fromTo($v04,speed*0.75,{y:-1250},{y:-1750},'sync')
          .fromTo($v05,speed*0.85,{y:-1100},{y:-2000},'sync')
          .fromTo($v06,speed*0.65,{y:-900},{y:-1950},'sync')
          .fromTo($v07,speed*0.70,{y:-1300},{y:-2100},'sync')
          .fromTo($v08,speed*0.95,{y:-850},{y:-1460},'sync')
          .fromTo($v09,speed*0.55,{y:-1000},{y:-1750},'sync')
          .fromTo($v10,speed*0.80,{y:-1200},{y:-1600},'sync')
          .fromTo($login,1,{scale:0,autoAlpha:0},{scale:1,autoAlpha:1, ease:Elastic.easeInOut},'sync');
        
        tl.play();
    
        function restart(){
          tl.restart();
        }
  });
//  useEffect(()=>{
//   axios({
//     url : 'https://api.anteagle.tech/allusers',
//     method :"get",
//     headers:{
//       'Accept' : "application/json"
//     },  
//   }).then(res=>{
//       console.log(res)
//       var temp1 = []
//       var temp2 = []
//      for(let i=0;i<res.data.data.length;i++){
//        temp1.push(res.data.data[i].username)
//        temp2.push(res.data.data[i].email)
//      }
//      setusername(temp1)
//      setemails(temp2)
//   }
//   )

//  },[]) 
  return (
    <>

<div id="copy" style={{position:"fixed"}}><a href="https://twitter.com/igcorreia" target="_blank"><br/>Opulentia Cresco Private Limited</a></div>
<div className="mask"style={{overflow:"hidden"}} >
  

  {
    signup ?    <div className="modal1" style={{height:"500px"}}>
   <div className="circle" ><img src={logo} style={{height:"120px",width:"120px",backgroundColor:"white",borderRadius:"100px"}}/></div>
    <div className="login" style={{marginTop:"0rem"}}>
      <h1>Signup</h1>
    
        <input type="text" name="u" placeholder="Username" required="required" onChange={(e)=>{
        set_signup_username(e.target.value)
        }}/>
        <input type="email" name="p" placeholder="Email ID" required="required" onChange={(e)=>{
          set_signup_email(e.target.value)
        }}/>
        <input type="password" name="p" placeholder="Password" required="required" onChange={(e)=>{
          set_signup_password(e.target.value)
        }}/>
        <input type="password" name="p" placeholder="Confirm Password" required="required" onChange={(e)=>{
          set_signup_password_conf(e.target.value)
        }}/>
        <button disabled={signup_password == signup_password_conf ? false : true} style={{marginBottom:"20px"}} className="btn btn-primary btn-block btn-large" type="submit" onClick={()=>{
           if((emails.find(ele => ele == signup_email) == null) && (username.find(ele => ele == signup_username) == null)){
            axios({
                url : `https://api.anteagle.tech/register?username=${signup_username}&password=${signup_password}&email=${signup_email}`,
                headers:{
                  'Accept' : "application/json"
                },
                method : "post",
        
              }).then(res=>{
                if(res.data.success){
                  swal("Registered Successfully","Sigin First","success")
                  this.setState({
                    signUpForm: {
                        password: "",
                        username: "",
                        email : ""
                    }
                });
                }
                else{
                  swal("Error","Some Error Occured","error")
                }
              })
        }
        else{
            swal("Already Registered","This Email Address or username is already registered, please choose another","warning")   
        }
        }}>Let's Go.</button>
        <a style={{fontSize:"10px",color:"white",textDecoration:"none",textAlign:"center",alignContent:"center",marginLeft:"4rem",marginTop:"2rem",cursor:"pointer"}} onClick={()=>{
            setsignup(false)
            setsignin(true)
            }}>
            Already Registered? <span style={{fontSize:"20px"}}> Sign In</span> 
            </a>
    
    </div>
  </div> : signin?
    <div className="modal1" style={{zIndex:10,height:"400px"}}>
    <div className="circle" ><img src={logo} style={{height:"120px",width:"120px",backgroundColor:"white",borderRadius:"100px"}}/></div>
    <div className="login">
      <h1>Login</h1>
     
        <input type="text" name="u" placeholder="Username" required="required" onChange={(e)=>{
          set_login_username(e.target.value)
        }}/>
        <input type="password" name="p" placeholder="Password" required="required" onChange={(e)=>{
          set_login_password(e.target.value)
        }}/>
        <button className="btn btn-primary btn-block btn-large" type="submit" style={{marginBottom:"2rem"}} onClick={()=>{
          axios({
            url : `https://api.anteagle.tech/login?username=${login_username}&password=${login_password}`,
            headers:{
              'Accept' : "aaplication/json"
            },
            method : "post"
          }).then(res=>{
            if(res.data.success){
              swal("Login Successfull","Proceeding to Home Page","success")
              localStorage.setItem("jwt","test")
              localStorage.setItem("username",res.data.username)
              localStorage.setItem("BTC_Coins",res.data.BTC_Coins)
              localStorage.setItem("ETH_Coins",res.data.ETH_Coins)
              localStorage.setItem("BNB_Coins",res.data.BNB_Coins)
              localStorage.setItem("ANTEAG_Coins",res.data.ANT_Coins)
              localStorage.setItem("USDT_Coins",res.data.USDT_Coins)
              localStorage.setItem("INRD_Coins",res.data.INRD_Coins)
              localStorage.setItem("KSM_Coins",res.data.KSM_Coins)
              localStorage.setItem("ATA_Coins",res.data.ATA_Coins)
              localStorage.setItem("MANA_Coins",res.data.MANA_Coins)
              localStorage.setItem("DGB_Coins",res.data.DGB_Coins)
              localStorage.setItem("FTM_Coins",res.data.FTM_Coins)
              localStorage.setItem("ALICE_Coins",res.data.ALICE_Coins)
              localStorage.setItem("GTC_Coins",res.data.GTC_Coins)
              localStorage.setItem("MATIC_Coins",res.data.MATIC_Coins)
              localStorage.setItem("AXS_Coins",res.data.AXS_Coins)
              localStorage.setItem("FTT_Coins",res.data.FTT_Coins)
              localStorage.setItem("SOL_Coins",res.data.SOL_Coins)
              localStorage.setItem("RUNE_Coins",res.data.RUNE_Coins)
              localStorage.setItem("UNI_Coins",res.data.UNI_Coins)
              localStorage.setItem("DOT_Coins",res.data.DOT_Coins)
              localStorage.setItem("VET_Coins",res.data.VET_Coins)
              localStorage.setItem("TFUEL_Coins",res.data.TFUEL_Coins)
              localStorage.setItem("GRT_Coins",res.data.GRT_Coins)
              localStorage.setItem("ADA_Coins",res.data.ADA_Coins)
              localStorage.setItem("FIL_Coins",res.data.FIL_Coins)
              localStorage.setItem("LINK_Coins",res.data.LINK_Coins)
              localStorage.setItem("LUNA_Coins",res.data.LUNA_Coins)
              localStorage.setItem("THETA_Coins",res.data.THETA_Coins)
              localStorage.setItem("userid",res.data.userid)
              localStorage.setItem("chat",res.data.chat)
              window.location = "/"
            }
            else{
              swal("Error","Invalid username or Password please try agin","error")
            }
          })
         
        }}>Let me in.</button>
         <a style={{cursor:"pointer",color:"white",fontSize:"1rem",marginLeft:"90px"}} onClick={()=>{ }} onClick={()=>{
           setsignin(false)
           setVisible(true)
           
         }}>Forgot Password ?</a><br/>
        <a style={{fontSize:"10px",color:"white",textDecoration:"none",textAlign:"center",alignContent:"center",marginLeft:"4rem",marginTop:"5rem",cursor:"pointer"}} onClick={()=>{
            setsignup(true)
            setsignin(false)
        }}>Dont have Account? <span style={{fontSize:"20px"}}>Signup here</span></a>
               

    </div>
  </div>
  : <div className="modal1" style={{zIndex:10,height:"400px"}}>
    <div className="circle" ><img src={logo} style={{height:"120px",width:"120px",backgroundColor:"white",borderRadius:"100px"}}/></div>
    <div className="login">
       {visible? <>
        <input type="email" required="required" placeholder="Email Address"  name="e"  onChange={(e)=>{
              setemail(e.target.value)
             
        }}/> 
      <button className="btn btn-primary btn-block btn-large" type="submit" style={{marginBottom:"2rem"}} onClick={()=>{
        
        axios({
                    method : "post",
                    url : `https://api.anteagle.tech/forgot?email=${email}`,
                    headers : {
                        'Accept' : "Application/Json",
                        'Content-type' :"application/json"
                    }
                }).then(res=>{
                    if(res.data.success){
                        setcode(res.data.code)
                        
                        setVisible(false)
                        setvisible1(true)
                    }
                    else if(res.data.error){
                        console.log(res.data.error)
                      
                        swal("Error","This email address has not been registered.Please enter a valid email address.","error")
                    }
                })

                
      }}>Send Verification Code</button>
      </>: visible1 ?<>
      <input type="text" required="required" placeholder="Enter Verification Code"  name="co" value={code1} onChange={(e)=>{
              setcode1(e.target.value)
      }} />
      <button className="btn btn-primary btn-block btn-large" type="submit" style={{marginBottom:"2rem"}} onClick={()=>{
            if(code==code1){
              setvisible1(false)
            }
            else{
              swal("Error","The code entered is invalid. Please try again","error")
            }
      }}>Verify</button>
      
      </>: 
            <>
            <input type="password" required="required" placeholder="Enter New Password"  name="np" value={password} onChange={(e)=>{
              setPassword(e.target.value)
      }} />

<input type="password" required="required" placeholder="Confirm Password"  name="cp" value={confPassword} onChange={(e)=>{
              setConfPassword(e.target.value)
      }} />

        <button className="btn btn-primary btn-block btn-large" type="submit" style={{marginBottom:"2rem"}} onClick={()=>{
              if(password!=confPassword){
                swal("Error","Please check if both the passwords match.","")
              }
              else{
                axios({
                    method : "post",
                    url : `https://api.anteagle.tech/edit_pass?password=${password}&userid=${localStorage.getItem("userid")}`,
                    headers : {
                        "Accept" : "Application/json",
                        "Content-type" : "application/json"
                    }
                }).then(async(res)=>{
                    if(res.data.success){
                        setsignin(true)
                       await swal("Success","PASSWORD changed successfully, Now login again");
                        window.location.href = "/"
                    }
                })
              }
        }}>Submit</button>
        {/* <button  className="btn btn-primary btn-block btn-large" type="submit" style={{marginBottom:"2rem"}} onClick={()=>{
          
           }
      }}>Submit</button> */}
            </>

    }
        
   
    </div>
    
    </div>
  }

</div>
<div className="vertical vertical0">
  <div className="horizontal horizontal000" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal001" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal002" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/0)"}}></div>
  <div className="horizontal horizontal003" style={{background: "url(https://source.unsplash.com/featured/?coin/0)"}}></div>
  <div className="horizontal horizontal004" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/0)"}}></div>
  <div className="horizontal horizontal005" style={{background: "url(https://source.unsplash.com/featured/?coin/0)"}}></div>
  <div className="horizontal horizontal006" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal007" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal008" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal010" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal011" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal012" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/1)"}}></div>
  <div className="horizontal horizontal013" style={{background: "url(https://source.unsplash.com/featured/?coin/1)"}}></div>
  <div className="horizontal horizontal014" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/1)"}}></div>
  <div className="horizontal horizontal015" style={{background: "url(https://source.unsplash.com/featured/?coin/1)"}}></div>
  <div className="horizontal horizontal016" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal017" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal018" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal020" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal021" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal022" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/2)"}}></div>
  <div className="horizontal horizontal023" style={{background: "url(https://source.unsplash.com/featured/?coin/2)"}}></div>
  <div className="horizontal horizontal024" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/2)"}}></div>
  <div className="horizontal horizontal025" style={{background: "url(https://source.unsplash.com/featured/?coin/2)"}}></div>
  <div className="horizontal horizontal026" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal027" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal028" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal030" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal031" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal032" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/3)"}}></div>
  <div className="horizontal horizontal033" style={{background: "url(https://source.unsplash.com/featured/?coin/3)"}}></div>
  <div className="horizontal horizontal034" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/3)"}}></div>
  <div className="horizontal horizontal035" style={{background: "url(https://source.unsplash.com/featured/?coin/3)"}}></div>
  <div className="horizontal horizontal036" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal037" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal038" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal040" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal041" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal042" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/4)"}}></div>
  <div className="horizontal horizontal043" style={{background: "url(https://source.unsplash.com/featured/?coin/4)"}}></div>
  <div className="horizontal horizontal044" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/4)"}}></div>
  <div className="horizontal horizontal045" style={{background: "url(https://source.unsplash.com/featured/?coin/4)"}}></div>
  <div className="horizontal horizontal046" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal047" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal048" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal050" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal051" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal052" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/5)"}}></div>
  <div className="horizontal horizontal053" style={{background: "url(https://source.unsplash.com/featured/?coin/5)"}}></div>
  <div className="horizontal horizontal054" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/5)"}}></div>
  <div className="horizontal horizontal055" style={{background: "url(https://source.unsplash.com/featured/?coin/5)"}}></div>
  <div className="horizontal horizontal056" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal057" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal058" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
</div>
<div className="vertical vertical1">
  <div className="horizontal horizontal100" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal101" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal102" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/0)"}}></div>
  <div className="horizontal horizontal103" style={{background: "url(https://source.unsplash.com/featured/?coin/0)"}}></div>
  <div className="horizontal horizontal104" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/0)"}}></div>
  <div className="horizontal horizontal105" style={{background: "url(https://source.unsplash.com/featured/?coin/0)"}}></div>
  <div className="horizontal horizontal106" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal107" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal108" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal110" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal111" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal112" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/1)"}}></div>
  <div className="horizontal horizontal113" style={{background: "url(https://source.unsplash.com/featured/?coin/1)"}}></div>
  <div className="horizontal horizontal114" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/1)"}}></div>
  <div className="horizontal horizontal115" style={{background: "url(https://source.unsplash.com/featured/?coin/1)"}}></div>
  <div className="horizontal horizontal116" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal117" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal118" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal120" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal121" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal122" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/2)"}}></div>
  <div className="horizontal horizontal123" style={{background: "url(https://source.unsplash.com/featured/?coin/2)"}}></div>
  <div className="horizontal horizontal124" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/2)"}}></div>
  <div className="horizontal horizontal125" style={{background: "url(https://source.unsplash.com/featured/?coin/2)"}}></div>
  <div className="horizontal horizontal126" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal127" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal128" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal130" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal131" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal132" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/3)"}}></div>
  <div className="horizontal horizontal133" style={{background: "url(https://source.unsplash.com/featured/?coin/3)"}}></div>
  <div className="horizontal horizontal134" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/3)"}}></div>
  <div className="horizontal horizontal135" style={{background: "url(https://source.unsplash.com/featured/?coin/3)"}}></div>
  <div className="horizontal horizontal136" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal137" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal138" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal140" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal141" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal142" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/4)"}}></div>
  <div className="horizontal horizontal143" style={{background: "url(https://source.unsplash.com/featured/?coin/4)"}}></div>
  <div className="horizontal horizontal144" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/4)"}}></div>
  <div className="horizontal horizontal145" style={{background: "url(https://source.unsplash.com/featured/?coin/4)"}}></div>
  <div className="horizontal horizontal146" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal147" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal148" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal150" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal151" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal152" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/5)"}}></div>
  <div className="horizontal horizontal153" style={{background: "url(https://source.unsplash.com/featured/?coin/5)"}}></div>
  <div className="horizontal horizontal154" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/5)"}}></div>
  <div className="horizontal horizontal155" style={{background: "url(https://source.unsplash.com/featured/?coin/5)"}}></div>
  <div className="horizontal horizontal156" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal157" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal158" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
</div>
<div className="vertical vertical2">
  <div className="horizontal horizontal200" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal201" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal202" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/0)"}}></div>
  <div className="horizontal horizontal203" style={{background: "url(https://source.unsplash.com/featured/?coin/0)"}}></div>
  <div className="horizontal horizontal204" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/0)"}}></div>
  <div className="horizontal horizontal205" style={{background: "url(https://source.unsplash.com/featured/?coin/0)"}}></div>
  <div className="horizontal horizontal206" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal207" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal208" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal210" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal211" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal212" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/1)"}}></div>
  <div className="horizontal horizontal213" style={{background: "url(https://source.unsplash.com/featured/?coin/1)"}}></div>
  <div className="horizontal horizontal214" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/1)"}}></div>
  <div className="horizontal horizontal215" style={{background: "url(https://source.unsplash.com/featured/?coin/1)"}}></div>
  <div className="horizontal horizontal216" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal217" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal218" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal220" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal221" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal222" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/2)"}}></div>
  <div className="horizontal horizontal223" style={{background: "url(https://source.unsplash.com/featured/?coin/2)"}}></div>
  <div className="horizontal horizontal224" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/2)"}}></div>
  <div className="horizontal horizontal225" style={{background: "url(https://source.unsplash.com/featured/?coin/2)"}}></div>
  <div className="horizontal horizontal226" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal227" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal228" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal230" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal231" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal232" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/3)"}}></div>
  <div className="horizontal horizontal233" style={{background: "url(https://source.unsplash.com/featured/?coin/3)"}}></div>
  <div className="horizontal horizontal234" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/3)"}}></div>
  <div className="horizontal horizontal235" style={{background: "url(https://source.unsplash.com/featured/?coin/3)"}}></div>
  <div className="horizontal horizontal236" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal237" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal238" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal240" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal241" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal242" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/4)"}}></div>
  <div className="horizontal horizontal243" style={{background: "url(https://source.unsplash.com/featured/?coin/4)"}}></div>
  <div className="horizontal horizontal244" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/4)"}}></div>
  <div className="horizontal horizontal245" style={{background: "url(https://source.unsplash.com/featured/?coin/4)"}}></div>
  <div className="horizontal horizontal246" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal247" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal248" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal250" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal251" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal252" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/5)"}}></div>
  <div className="horizontal horizontal253" style={{background: "url(https://source.unsplash.com/featured/?coin/5)"}}></div>
  <div className="horizontal horizontal254" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/5)"}}></div>
  <div className="horizontal horizontal255" style={{background: "url(https://source.unsplash.com/featured/?coin/5)"}}></div>
  <div className="horizontal horizontal256" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal257" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal258" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
</div>
<div className="vertical vertical3">
  <div className="horizontal horizontal300" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal301" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal302" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/0)"}}></div>
  <div className="horizontal horizontal303" style={{background: "url(https://source.unsplash.com/featured/?coin/0)"}}></div>
  <div className="horizontal horizontal304" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/0)"}}></div>
  <div className="horizontal horizontal305" style={{background: "url(https://source.unsplash.com/featured/?coin/0)"}}></div>
  <div className="horizontal horizontal306" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal307" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal308" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal310" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal311" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal312" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/1)"}}></div>
  <div className="horizontal horizontal313" style={{background: "url(https://source.unsplash.com/featured/?coin/1)"}}></div>
  <div className="horizontal horizontal314" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/1)"}}></div>
  <div className="horizontal horizontal315" style={{background: "url(https://source.unsplash.com/featured/?coin/1)"}}></div>
  <div className="horizontal horizontal316" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal317" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal318" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal320" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal321" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal322" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/2)"}}></div>
  <div className="horizontal horizontal323" style={{background: "url(https://source.unsplash.com/featured/?coin/2)"}}></div>
  <div className="horizontal horizontal324" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/2)"}}></div>
  <div className="horizontal horizontal325" style={{background: "url(https://source.unsplash.com/featured/?coin/2)"}}></div>
  <div className="horizontal horizontal326" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal327" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal328" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal330" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal331" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal332" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/3)"}}></div>
  <div className="horizontal horizontal333" style={{background: "url(https://source.unsplash.com/featured/?coin/3)"}}></div>
  <div className="horizontal horizontal334" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/3)"}}></div>
  <div className="horizontal horizontal335" style={{background: "url(https://source.unsplash.com/featured/?coin/3)"}}></div>
  <div className="horizontal horizontal336" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal337" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal338" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal340" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal341" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal342" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/4)"}}></div>
  <div className="horizontal horizontal343" style={{background: "url(https://source.unsplash.com/featured/?coin/4)"}}></div>
  <div className="horizontal horizontal344" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/4)"}}></div>
  <div className="horizontal horizontal345" style={{background: "url(https://source.unsplash.com/featured/?coin/4)"}}></div>
  <div className="horizontal horizontal346" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal347" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal348" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal350" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal351" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal352" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/5)"}}></div>
  <div className="horizontal horizontal353" style={{background: "url(https://source.unsplash.com/featured/?coin/5)"}}></div>
  <div className="horizontal horizontal354" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/5)"}}></div>
  <div className="horizontal horizontal355" style={{background: "url(https://source.unsplash.com/featured/?coin/5)"}}></div>
  <div className="horizontal horizontal356" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal357" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal358" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
</div>
<div className="vertical vertical4">
  <div className="horizontal horizontal400" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal401" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal402" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/0)"}}></div>
  <div className="horizontal horizontal403" style={{background: "url(https://source.unsplash.com/featured/?coin/0)"}}></div>
  <div className="horizontal horizontal404" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/0)"}}></div>
  <div className="horizontal horizontal405" style={{background: "url(https://source.unsplash.com/featured/?coin/0)"}}></div>
  <div className="horizontal horizontal406" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal407" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal408" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal410" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal411" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal412" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/1)"}}></div>
  <div className="horizontal horizontal413" style={{background: "url(https://source.unsplash.com/featured/?coin/1)"}}></div>
  <div className="horizontal horizontal414" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/1)"}}></div>
  <div className="horizontal horizontal415" style={{background: "url(https://source.unsplash.com/featured/?coin/1)"}}></div>
  <div className="horizontal horizontal416" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal417" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal418" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal420" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal421" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal422" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/2)"}}></div>
  <div className="horizontal horizontal423" style={{background: "url(https://source.unsplash.com/featured/?coin/2)"}}></div>
  <div className="horizontal horizontal424" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/2)"}}></div>
  <div className="horizontal horizontal425" style={{background: "url(https://source.unsplash.com/featured/?coin/2)"}}></div>
  <div className="horizontal horizontal426" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal427" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal428" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal430" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal431" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal432" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/3)"}}></div>
  <div className="horizontal horizontal433" style={{background: "url(https://source.unsplash.com/featured/?coin/3)"}}></div>
  <div className="horizontal horizontal434" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/3)"}}></div>
  <div className="horizontal horizontal435" style={{background: "url(https://source.unsplash.com/featured/?coin/3)"}}></div>
  <div className="horizontal horizontal436" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal437" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal438" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal440" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal441" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal442" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/4)"}}></div>
  <div className="horizontal horizontal443" style={{background: "url(https://source.unsplash.com/featured/?coin/4)"}}></div>
  <div className="horizontal horizontal444" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/4)"}}></div>
  <div className="horizontal horizontal445" style={{background: "url(https://source.unsplash.com/featured/?coin/4)"}}></div>
  <div className="horizontal horizontal446" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal447" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal448" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal450" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal451" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal452" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/5)"}}></div>
  <div className="horizontal horizontal453" style={{background: "url(https://source.unsplash.com/featured/?coin/5)"}}></div>
  <div className="horizontal horizontal454" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/5)"}}></div>
  <div className="horizontal horizontal455" style={{background: "url(https://source.unsplash.com/featured/?coin/5)"}}></div>
  <div className="horizontal horizontal456" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal457" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal458" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
</div>
<div className="vertical vertical5">
  <div className="horizontal horizontal500" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal501" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal502" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/0)"}}></div>
  <div className="horizontal horizontal503" style={{background: "url(https://source.unsplash.com/featured/?coin/0)"}}></div>
  <div className="horizontal horizontal504" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/0)"}}></div>
  <div className="horizontal horizontal505" style={{background: "url(https://source.unsplash.com/featured/?coin/0)"}}></div>
  <div className="horizontal horizontal506" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal507" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal508" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal510" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal511" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal512" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/1)"}}></div>
  <div className="horizontal horizontal513" style={{background: "url(https://source.unsplash.com/featured/?coin/1)"}}></div>
  <div className="horizontal horizontal514" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/1)"}}></div>
  <div className="horizontal horizontal515" style={{background: "url(https://source.unsplash.com/featured/?coin/1)"}}></div>
  <div className="horizontal horizontal516" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal517" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal518" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal520" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal521" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal522" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/2)"}}></div>
  <div className="horizontal horizontal523" style={{background: "url(https://source.unsplash.com/featured/?coin/2)"}}></div>
  <div className="horizontal horizontal524" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/2)"}}></div>
  <div className="horizontal horizontal525" style={{background: "url(https://source.unsplash.com/featured/?coin/2)"}}></div>
  <div className="horizontal horizontal526" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal527" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal528" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal530" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal531" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal532" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/3)"}}></div>
  <div className="horizontal horizontal533" style={{background: "url(https://source.unsplash.com/featured/?coin/3)"}}></div>
  <div className="horizontal horizontal534" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/3)"}}></div>
  <div className="horizontal horizontal535" style={{background: "url(https://source.unsplash.com/featured/?coin/3)"}}></div>
  <div className="horizontal horizontal536" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal537" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal538" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal540" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal541" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal542" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/4)"}}></div>
  <div className="horizontal horizontal543" style={{background: "url(https://source.unsplash.com/featured/?coin/4)"}}></div>
  <div className="horizontal horizontal544" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/4)"}}></div>
  <div className="horizontal horizontal545" style={{background: "url(https://source.unsplash.com/featured/?coin/4)"}}></div>
  <div className="horizontal horizontal546" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal547" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal548" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal550" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal551" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal552" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/5)"}}></div>
  <div className="horizontal horizontal553" style={{background: "url(https://source.unsplash.com/featured/?coin/5)"}}></div>
  <div className="horizontal horizontal554" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/5)"}}></div>
  <div className="horizontal horizontal555" style={{background: "url(https://source.unsplash.com/featured/?coin/5)"}}></div>
  <div className="horizontal horizontal556" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal557" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal558" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
</div>
<div className="vertical vertical6">
  <div className="horizontal horizontal600" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal601" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal602" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/0)"}}></div>
  <div className="horizontal horizontal603" style={{background: "url(https://source.unsplash.com/featured/?coin/0)"}}></div>
  <div className="horizontal horizontal604" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/0)"}}></div>
  <div className="horizontal horizontal605" style={{background: "url(https://source.unsplash.com/featured/?coin/0)"}}></div>
  <div className="horizontal horizontal606" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal607" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal608" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal610" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal611" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal612" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/1)"}}></div>
  <div className="horizontal horizontal613" style={{background: "url(https://source.unsplash.com/featured/?coin/1)"}}></div>
  <div className="horizontal horizontal614" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/1)"}}></div>
  <div className="horizontal horizontal615" style={{background: "url(https://source.unsplash.com/featured/?coin/1)"}}></div>
  <div className="horizontal horizontal616" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal617" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal618" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal620" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal621" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal622" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/2)"}}></div>
  <div className="horizontal horizontal623" style={{background: "url(https://source.unsplash.com/featured/?coin/2)"}}></div>
  <div className="horizontal horizontal624" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/2)"}}></div>
  <div className="horizontal horizontal625" style={{background: "url(https://source.unsplash.com/featured/?coin/2)"}}></div>
  <div className="horizontal horizontal626" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal627" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal628" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal630" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal631" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal632" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/3)"}}></div>
  <div className="horizontal horizontal633" style={{background: "url(https://source.unsplash.com/featured/?coin/3)"}}></div>
  <div className="horizontal horizontal634" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/3)"}}></div>
  <div className="horizontal horizontal635" style={{background: "url(https://source.unsplash.com/featured/?coin/3)"}}></div>
  <div className="horizontal horizontal636" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal637" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal638" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal640" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal641" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal642" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/4)"}}></div>
  <div className="horizontal horizontal643" style={{background: "url(https://source.unsplash.com/featured/?coin/4)"}}></div>
  <div className="horizontal horizontal644" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/4)"}}></div>
  <div className="horizontal horizontal645" style={{background: "url(https://source.unsplash.com/featured/?coin/4)"}}></div>
  <div className="horizontal horizontal646" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal647" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal648" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal650" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal651" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal652" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/5)"}}></div>
  <div className="horizontal horizontal653" style={{background: "url(https://source.unsplash.com/featured/?coin/5)"}}></div>
  <div className="horizontal horizontal654" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/5)"}}></div>
  <div className="horizontal horizontal655" style={{background: "url(https://source.unsplash.com/featured/?coin/5)"}}></div>
  <div className="horizontal horizontal656" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal657" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal658" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
</div>
<div className="vertical vertical7">
  <div className="horizontal horizontal700" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal701" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal702" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/0)"}}></div>
  <div className="horizontal horizontal703" style={{background: "url(https://source.unsplash.com/featured/?coin/0)"}}></div>
  <div className="horizontal horizontal704" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/0)"}}></div>
  <div className="horizontal horizontal705" style={{background: "url(https://source.unsplash.com/featured/?coin/0)"}}></div>
  <div className="horizontal horizontal706" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal707" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal708" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal710" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal711" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal712" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/1)"}}></div>
  <div className="horizontal horizontal713" style={{background: "url(https://source.unsplash.com/featured/?coin/1)"}}></div>
  <div className="horizontal horizontal714" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/1)"}}></div>
  <div className="horizontal horizontal715" style={{background: "url(https://source.unsplash.com/featured/?coin/1)"}}></div>
  <div className="horizontal horizontal716" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal717" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal718" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal720" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal721" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal722" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/2)"}}></div>
  <div className="horizontal horizontal723" style={{background: "url(https://source.unsplash.com/featured/?coin/2)"}}></div>
  <div className="horizontal horizontal724" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/2)"}}></div>
  <div className="horizontal horizontal725" style={{background: "url(https://source.unsplash.com/featured/?coin/2)"}}></div>
  <div className="horizontal horizontal726" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal727" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal728" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal730" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal731" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal732" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/3)"}}></div>
  <div className="horizontal horizontal733" style={{background: "url(https://source.unsplash.com/featured/?coin/3)"}}></div>
  <div className="horizontal horizontal734" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/3)"}}></div>
  <div className="horizontal horizontal735" style={{background: "url(https://source.unsplash.com/featured/?coin/3)"}}></div>
  <div className="horizontal horizontal736" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal737" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal738" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal740" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal741" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal742" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/4)"}}></div>
  <div className="horizontal horizontal743" style={{background: "url(https://source.unsplash.com/featured/?coin/4)"}}></div>
  <div className="horizontal horizontal744" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/4)"}}></div>
  <div className="horizontal horizontal745" style={{background: "url(https://source.unsplash.com/featured/?coin/4)"}}></div>
  <div className="horizontal horizontal746" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal747" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal748" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal750" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal751" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal752" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/5)"}}></div>
  <div className="horizontal horizontal753" style={{background: "url(https://source.unsplash.com/featured/?coin/5)"}}></div>
  <div className="horizontal horizontal754" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/5)"}}></div>
  <div className="horizontal horizontal755" style={{background: "url(https://source.unsplash.com/featured/?coin/5)"}}></div>
  <div className="horizontal horizontal756" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal757" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal758" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
</div>
<div className="vertical vertical8">
  <div className="horizontal horizontal800" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal801" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal802" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/0)"}}></div>
  <div className="horizontal horizontal803" style={{background: "url(https://source.unsplash.com/featured/?coin/0)"}}></div>
  <div className="horizontal horizontal804" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/0)"}}></div>
  <div className="horizontal horizontal805" style={{background: "url(https://source.unsplash.com/featured/?coin/0)"}}></div>
  <div className="horizontal horizontal806" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal807" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal808" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal810" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal811" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal812" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/1)"}}></div>
  <div className="horizontal horizontal813" style={{background: "url(https://source.unsplash.com/featured/?coin/1)"}}></div>
  <div className="horizontal horizontal814" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/1)"}}></div>
  <div className="horizontal horizontal815" style={{background: "url(https://source.unsplash.com/featured/?coin/1)"}}></div>
  <div className="horizontal horizontal816" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal817" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal818" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal820" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal821" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal822" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/2)"}}></div>
  <div className="horizontal horizontal823" style={{background: "url(https://source.unsplash.com/featured/?coin/2)"}}></div>
  <div className="horizontal horizontal824" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/2)"}}></div>
  <div className="horizontal horizontal825" style={{background: "url(https://source.unsplash.com/featured/?coin/2)"}}></div>
  <div className="horizontal horizontal826" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal827" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal828" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal830" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal831" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal832" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/3)"}}></div>
  <div className="horizontal horizontal833" style={{background: "url(https://source.unsplash.com/featured/?coin/3)"}}></div>
  <div className="horizontal horizontal834" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/3)"}}></div>
  <div className="horizontal horizontal835" style={{background: "url(https://source.unsplash.com/featured/?coin/3)"}}></div>
  <div className="horizontal horizontal836" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal837" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal838" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal840" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal841" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal842" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/4)"}}></div>
  <div className="horizontal horizontal843" style={{background: "url(https://source.unsplash.com/featured/?coin/4)"}}></div>
  <div className="horizontal horizontal844" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/4)"}}></div>
  <div className="horizontal horizontal845" style={{background: "url(https://source.unsplash.com/featured/?coin/4)"}}></div>
  <div className="horizontal horizontal846" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal847" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal848" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal850" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal851" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal852" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/5)"}}></div>
  <div className="horizontal horizontal853" style={{background: "url(https://source.unsplash.com/featured/?coin/5)"}}></div>
  <div className="horizontal horizontal854" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/5)"}}></div>
  <div className="horizontal horizontal855" style={{background: "url(https://source.unsplash.com/featured/?coin/5)"}}></div>
  <div className="horizontal horizontal856" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal857" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal858" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
</div>
<div className="vertical vertical9">
  <div className="horizontal horizontal900" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal901" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal902" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/0)"}}></div>
  <div className="horizontal horizontal903" style={{background: "url(https://source.unsplash.com/featured/?coin/0)"}}></div>
  <div className="horizontal horizontal904" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/0)"}}></div>
  <div className="horizontal horizontal905" style={{background: "url(https://source.unsplash.com/featured/?coin/0)"}}></div>
  <div className="horizontal horizontal906" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal907" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal908" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/0)"}}></div>
  <div className="horizontal horizontal910" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal911" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal912" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/1)"}}></div>
  <div className="horizontal horizontal913" style={{background: "url(https://source.unsplash.com/featured/?coin/1)"}}></div>
  <div className="horizontal horizontal914" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/1)"}}></div>
  <div className="horizontal horizontal915" style={{background: "url(https://source.unsplash.com/featured/?coin/1)"}}></div>
  <div className="horizontal horizontal916" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal917" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal918" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/1)"}}></div>
  <div className="horizontal horizontal920" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal921" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal922" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/2)"}}></div>
  <div className="horizontal horizontal923" style={{background: "url(https://source.unsplash.com/featured/?coin/2)"}}></div>
  <div className="horizontal horizontal924" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/2)"}}></div>
  <div className="horizontal horizontal925" style={{background: "url(https://source.unsplash.com/featured/?coin/2)"}}></div>
  <div className="horizontal horizontal926" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal927" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal928" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/2)"}}></div>
  <div className="horizontal horizontal930" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal931" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal932" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/3)"}}></div>
  <div className="horizontal horizontal933" style={{background: "url(https://source.unsplash.com/featured/?coin/3)"}}></div>
  <div className="horizontal horizontal934" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/3)"}}></div>
  <div className="horizontal horizontal935" style={{background: "url(https://source.unsplash.com/featured/?coin/3)"}}></div>
  <div className="horizontal horizontal936" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal937" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal938" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/3)"}}></div>
  <div className="horizontal horizontal940" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal941" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal942" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/4)"}}></div>
  <div className="horizontal horizontal943" style={{background: "url(https://source.unsplash.com/featured/?coin/4)"}}></div>
  <div className="horizontal horizontal944" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/4)"}}></div>
  <div className="horizontal horizontal945" style={{background: "url(https://source.unsplash.com/featured/?coin/4)"}}></div>
  <div className="horizontal horizontal946" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal947" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal948" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/4)"}}></div>
  <div className="horizontal horizontal950" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal951" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal952" style={{background: "url(https://source.unsplash.com/featured/?blockchain,chart/5)"}}></div>
  <div className="horizontal horizontal953" style={{background: "url(https://source.unsplash.com/featured/?coin/5)"}}></div>
  <div className="horizontal horizontal954" style={{background: "url(https://source.unsplash.com/featured/?btc,blockchain/5)"}}></div>
  <div className="horizontal horizontal955" style={{background: "url(https://source.unsplash.com/featured/?coin/5)"}}></div>
  <div className="horizontal horizontal956" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal957" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
  <div className="horizontal horizontal958" style={{background: "url(https://source.unsplash.com/featured/?chart,btc/5)"}}></div>
</div>
    </>
  );
}

export default App;
