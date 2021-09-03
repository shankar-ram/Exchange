import React,{useEffect} from 'react'
import lottie from './CryptoLottie.gif'
import Footer from './Footer'
import NavBar  from './Navbar';

import Cross from './x-button.png'
import Checked from './checked.png'
import Tick from './tick.png'
import Check from './check.png'
import Portfolio from './portfolio-display1.png'
import Frustrated from './Frustrated.png'
import Happy from './Happy4.png'
import {NavLink} from 'react-router-dom';
import User from './man (1).png'
import Money from './treasury.png'
import Watch from './stopwatch.png'
import Invest from './cash.png'
import Transaction from './notes.png'
import Secure from './shield.png'
import Arrow from './up-arrow.png'
import Asterisk from './asterisk.png'
import axios from "axios";
import {Row,Col} from 'reactstrap'
const Home=()=>{
  const [isNavVisible, setNavVisibility] = React.useState(false);
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);
  const [liveprice_BNB,setlive_BNB] = React.useState(0)
  const [liveprice_BTC,setlive_BTC] = React.useState(0)
  const [width,setwidth] = React.useState(window.innerWidth)
  const [liveprice_ETH,setlive_ETH] = React.useState(0)
  const [conversion,setconversion] = React.useState(1);
  const [livenews,setlivenews] = React.useState("")
  const [btc_per,setbtc_per] = React.useState(0)
  const [bnb_per,setbnb_per] = React.useState(0);
  const [eth_per,seteth_per] = React.useState(0);
  const [features,setfeatures] = React.useState([])
   

  useEffect(() => { 
    axios({
      method:"get",
      url:"https://api.anteagle.tech/news",
      headers:{
          'Accept' : "Application/JSON",
          'Content-type' : "application/json"
      }
  }).then(res=>{
      if(res.data){
          setlivenews(res.data.news)
      }
  })
  axios({
    method:"get",
    url:"https://api.anteagle.tech/features",
    headers:{
        'Accept' : "Application/JSON",
        'Content-type' : "application/json"
    }
}).then(res=>{
    if(res.data){
      console.log(res.data.features)
        setfeatures(res.data.features)
    }
})


setInterval(()=>{

  axios({
    method:"get",
    url: "https://api.exchangerate.host/convert?from=USD&to=INR"
  }).then(res=>{
    localStorage.setItem("conversion",res.data.info.rate)
    setconversion(res.data.info.rate)
  })
 
},10000)
const all = new WebSocket("wss://stream.binance.com:9443/ws/!miniTicker@arr")
all.onmessage = evt => {
  const g = JSON.parse(evt.data)
  for(let i=0;i<g.length;i++){
    if(g[i]["s"] == "BTCUSDT"){
      setlive_BTC(g[i]["c"])
      const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
      setbtc_per(temp)
    }
    if(g[i]["s"] == "BNBUSDT"){
      setlive_BNB(g[i]["c"])
      const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
      setbnb_per(temp)
    }
    if(g[i]["s"] == "ETHUSDT"){
      setlive_ETH(g[i]["c"])
      const temp = parseFloat(((g[i]["c"] - g[i]["o"])/g[i]["o"])*100).toFixed(2)
      seteth_per(temp)
    }
  }
}
  }, []);
  
    return(<>
    <NavBar />
    <section id="header" className="d-flex align-items-center" style={{background:"#200F21"}}>

    <div className=" bar container-fluid nav_bg" >
      <div className="row">
      
        <div className="col-11 mx-auto">
        <div className="row">

        
            <div className="col-lg-6   order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1>
                Buy and Sell Crypto with revolutionary features
      
                </h1>
                <h4 className="my-4">
                Experience The Modern Crypto Exchange 
                </h4>
                <div >
                    <NavLink to="/" style={{width:"40%"}} className=" reg btn mt-3  "  onClick={()=>{
            localStorage.setItem("land",true)
            window.location.href = "/"
          }}>Register or Login</NavLink>

                 </div>
            </div>
           <div className="col-lg-6 order-1 order-lg-2 header-img">
              <img src={lottie} className=" lot" ></img>                
           </div>
           </div>
        </div>
    </div>
   
  </div> 
         
       

        </section>

        <div className="row live-price" >
          <div class="col-lg-2 col-md-4 col-sm-6 col-6 " style={{paddingBottom:"1.2rem"}}>
             <h4>BTC/INR </h4>
             <h4><span style={{color:btc_per > 0 ? "green" : "red"}}>{btc_per} %</span></h4>
             <h4 style={{color:'gold',fontSize:"1.4rem"}} class="prices">₹ {parseFloat(liveprice_BTC*conversion).toFixed(2)}</h4>
            <h4 style={{fontSize:"1.4rem"}} >$ {parseFloat(liveprice_BTC).toFixed(2)}</h4>
              
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6  col-6" style={{paddingBottom:"1.2rem"}}>
            <h4>BNB/INR </h4>
             <h4><span style={{color:btc_per > 0 ? "green" : "red"}}>{bnb_per} %</span></h4>
             <h4 style={{color:'gold',fontSize:"1.4rem"}}>₹ {parseFloat(liveprice_BNB*conversion).toFixed(2)}</h4>
            <h4 style={{fontSize:"1.4rem"}} >$ {parseFloat(liveprice_BNB).toFixed(2)}</h4>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6  col-6" style={{paddingBottom:"1.2rem"}}>
            <h4>ETH/INR </h4>
             <h4><span style={{color:btc_per > 0 ? "green" : "red"}}>{eth_per} %</span></h4>
             <h4 style={{color:'gold',fontSize:"1.4rem"}}>₹ {parseFloat(liveprice_ETH*conversion).toFixed(2)}</h4>
            <h4 style={{fontSize:"1.4rem"}} >$ {parseFloat(liveprice_ETH).toFixed(2)}</h4>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6  col-6" style={{paddingBottom:"1.2rem"}}>
            <h4>ANTEAG/INR </h4>
             <h4><span style={{color:btc_per > 0 ? "green" : "red"}}>{eth_per} %</span></h4>
             <h4 style={{color:'gold',fontSize:"1.4rem"}}>₹ {parseFloat(liveprice_ETH*conversion).toFixed(2)}</h4>
            <h4 style={{fontSize:"1.4rem"}} >$ {parseFloat(liveprice_ETH).toFixed(2)}</h4>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6  col-6" style={{paddingBottom:"1.2rem"}}>
            <h4>EAGLE/INR </h4>
             <h4><span style={{color:btc_per > 0 ? "green" : "red"}}>{eth_per} %</span></h4>
             <h4 style={{color:'gold',fontSize:"1.4rem"}}>₹ {parseFloat(liveprice_ETH*conversion).toFixed(2)}</h4>
            <h4 style={{fontSize:"1.4rem"}} >$ {parseFloat(liveprice_ETH).toFixed(2)}</h4>
          </div>
          <div class="col-lg-2 col-md-4 col-sm-6  col-6" style={{paddingBottom:"1.2rem"}}>
            <h4>EAGLEANT/INR </h4>
             <h4><span style={{color:btc_per > 0 ? "green" : "red"}}>{eth_per} %</span></h4>
             <h4 style={{color:'gold',fontSize:"1.4rem"}}>₹ {parseFloat(liveprice_ETH*conversion).toFixed(2)}</h4>
            <h4 style={{fontSize:"1.4rem"}} >$ {parseFloat(liveprice_ETH).toFixed(2)}</h4>
          </div>
       
       
        </div>
    

        <section className="white-section" id="features">
    <div className="row feature-text"> 
   
   
        
        <h2 >Making exchanges is a tedious process.</h2>
        <h4 >AntEagle makes this entire process highly reliable, efficient and user-friendly. </h4>
        
      </div>

  
       
    <div className="row">
       
      <div className="feature-box col-lg-6 col-md-6 ">
      <img src={Frustrated} className="frustrated"></img>
      <h5 style={{color:"red",fontWeight:"lighter",lineHeight:"1.5"}} >The Old Way</h5>
        <h3 className="feature-title">Trading on the exchange.</h3>
        <h5  style={{fontWeight:"lighter",lineHeight:"1.5"}} >Too much of stress and hassle</h5>
        <ul className="list-unstyled points">
           <li>
           {
            ["Keeping track of the portfolio","Keeping a constant watch on the markets","Monitor the price the range","Cannot club stop-loss and targets"].map((ans,i)=>{
                return(
                    <div className="d-flex align-items-center">
            <div>
                <img src={Cross}></img>
            </div>
            <div className="content">
                <h6><span className="mb-0">{ans}</span></h6>
            </div>
         
           </div>
                )
})
           }
           
           </li> 

        </ul>

      
      </div>
     
      <div className="feature-box col-lg-6 col-md-6 ">
        <img src={Happy} className="happy"></img>
        <h5 style={{color:"darkgreen",fontWeight:"lighter",lineHeight:"1.5"}}>The New Way</h5>
        <h3 className="feature-title">Trading on AntEagle.</h3>
        <h5 style={{fontWeight:"lighter",lineHeight:"1.5"}}>Hassle-free</h5>
        <ul className="list-unstyled points">
           <li>{
            ["Automated portfolio updation","Provision for stop-loss, take-profit orders","Extensive full trade facility","Automatic order trigerring"].map((ans,i)=>{
                return(
                    <div className="d-flex align-items-center">
            <div>
                <img src={Checked}></img>
            </div>
            <div className="content">
                <h6><span className="mb-0">{ans}</span></h6>
            </div>
         
           </div>
                )
})
           }
          
          
           
           </li> 

        </ul>
        
      </div>
     
    </div>

    
    <hr className="  clearfix  pb-0"/>
    <div className="row chart">
        <div className="feature-box col-lg-6 col-md-6 ">
        <h3 className="feature-title">Invest & Grow your cryptocurrency portfolio.</h3>
            <h5  style={{lineHeight:"1.5"}} >Facts regarding cryptocurrencies in 2021</h5>
        <ul className="list-unstyled points">
           <li>
                    <div className="d-flex align-items-center">
         
                    <div>
                    <img src={Tick}></img>
                    </div>
                    <div className="content">
                        <h5><span className="mb-0">Supreme Court judgement on Crypto</span></h5>
                     </div>
       
                 </div>
                <div className="content info"> 
                 <h6><span  className="mb-0">The ban on facilitation of financial transactions for entities related to cryptocurrencies was<b style={{fontWeight:"bold"}}> quashed by the Hon'ble Supreme Court of India in March 2020</b>. This paved way for financial institutions to facilitate the trading of cryptocurrencies in India.</span></h6>
                 </div>  

                  <div className="d-flex align-items-center">
         
                    <div>
                    <img src={Tick}></img>
                    </div>
                    <div className="content">
                        <h5><span className="mb-0">Is trading in cryptocurrencies wrong?</span></h5>
                     </div>
       
                 </div>
                <div className="content info"> 
                 <h6><span  className="mb-0">No, it is not. There is no regulation governing cryptocurrencies in India so far. The government is planning to hold a legislative proposal regarding cryptocurrencies and their trading, in the Parliament following due process.</span></h6>
                 </div>  
           </li> 
           <li>
           <div className="d-flex align-items-center">
                    <div>
                    <img src={Tick}></img>
                    </div>
                    <div className="content">
                        <h5><span className="mb-0">Market potential and returns</span></h5>
                     </div>
                   
           </div>
           <div  className=" coin-rate d-flex align-items-center">
             <div>
             <img src={Check}></img>
             </div>
             <div className="content">
                <h5><span className="mb-0">Automata </span><span style={{color:"#00cc00"}} className="mb-0"> 275%<img src={Arrow} className="arrow"></img></span></h5>
             </div>
            
            
           </div>
           <div className="year">
              <h6>From July 2021 - Aug 2021</h6>
           </div>
           <div  className=" coin-rate d-flex align-items-center">
             <div>
             <img src={Check}></img>
             </div>
             <div className="content">
                <h5><span className="mb-0">Dogecoin </span><span style={{color:"#00cc00"}} className="mb-0"> 8238%<img src={Arrow} className="arrow"></img></span></h5>
               
             </div>
            
           </div>
           <div className="year">
              <h6>From Aug 2020 - Aug 2021</h6>
          
           </div>
           <div  className=" coin-rate d-flex align-items-center">
             <div style={{marginTop:"-3.1rem",marginLeft:"0.2rem"}}>
             <img src={Asterisk} style={{width:"10px"}}></img>
             </div>
             <div className="content">
                <p style={{fontWeight:"lighter",color:"grey"}}><span className="mt-0"> This market has a lot of potential, but one should always know when to enter the market and when to leave. </span></p>
             </div>
            
            
           </div>

           <div>
            
           </div>
           
           </li>

        </ul>
        </div>
        <div className="feature-box col-lg-6 col-md-6 ">
         
          <img src={Portfolio} className="img-fluid"></img>
         
        </div>
        
    </div>
    <hr className="  clearfix  pb-0"/>
    <div className="row addtn-feat">
        <div class=" col-lg-4 col-md-4 ">
           <img src={Watch}  style={{marginBottom:"1rem"}}></img>
          <h4 >Fast & simple</h4>
          <p >Start investing in under 10 minutes</p>
        </div>
        <div className=" col-lg-4 col-md-4 ">
        <img src={Transaction}  style={{marginBottom:"1rem"}}></img>
          <h4>Easy deposit & withdrawals</h4>
          <p >Quickly add & withdraw funds to your bank account</p>
        </div>
        <div className=" col-lg-4 col-md-4 ">
        <img src={Secure}  style={{marginBottom:"1rem"}}></img>
          <h4 >Safe & secure</h4>
          <p >World class security features ensure your investments are in safe hands</p>
        </div>
        
  
      </div>

</section>
<section id="gstarted">
           <h1>Get started with 3 steps</h1>
<div className="row">
        <div className="gstarted-box col-lg-4 col-md-4 ">
          <img src={User} style={{paddingBottom:"1rem"}}></img>
          <h4 >1. Create an account</h4>
          <p >Sign up with your email and mobile in just 5 minutes</p>
        </div>
        <div className="gstarted-box col-lg-4 col-md-4 ">
        <img src={Money} style={{paddingBottom:"1rem"}}></img>
          <h4>2. Add INR to your wallet</h4>
          <p >Quickly add money to your AntEagle investment wallet</p>
        </div>
        <div className="gstarted-box col-lg-4 col-md-4 ">
        <img src={Invest} style={{paddingBottom:"1rem"}}></img>
          <h4 >3. Start investing in crypto</h4>
          <p >Buy & Sell a variety of top coins at the best prices</p>
        </div>
        
  
      </div>
</section>

        

<Footer />
    </>
   
    );
}

export default Home;