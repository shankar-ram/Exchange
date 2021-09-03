import React from 'react'
import {a} from 'react-router-dom';
import fb from './facebook.png'
import ig from './instagram.png'
import tw from './twitter.png'
import li from './linkedin.png'
import pin from './pin.png'
import email from './email.png'
import call from './call.png'
import telegram from './telegram.png'
const Footer=()=>{
    return(

        <>

<footer className=" text-lg-start  text-muted" >
    <section className="">
    <div className="container text-md-start ">
    
      <div className="row ">
     
        <div style={{paddingRight:"2rem", paddingLeft:"2rem"}} className="col-lg-6 col-md-6 mt-5 ">
   
          <h5 className="text-uppercase fw-bold mb-4"> AntEagle Exchange
          </h5>
          <p>
            Begin you cryptocurrency trading journey today.
          </p>
          
          <h5 className="text-uppercase fw-bold mb-4" style={{marginTop:"3rem"}}>Our social network handles</h5>
         
      
      <a  href="https://twitter.com/sarvvid?lang=en"  target="_blank" className="me-4 text-reset">
        <img src={tw}></img>
      </a>
      <a href="https://www.linkedin.com/in/sarvvid-ai-6345871b5/"  target="_blank" className="me-4 text-reset">
        <img src={li}></img>
      </a>
      <a href="" target="_blank" className="me-4 text-reset">
        <img src={telegram}></img>
      </a>
        </div>
       
        
        <div style={{paddingRight:"2rem", paddingLeft:"2rem",paddingBottom:"2rem"}} className="col-lg-6  col-md-6 mt-5">
        
          <h5 className="text-uppercase fw-bold mb-4">
            Contact
          </h5>
          {/* <p className="contact"><img src={pin}></img> 7058/5 , 1st Floor, Tank Rd, Mata Rameshwari Nehru Nagar, Karol Bagh, Delhi, 110005</p> */}
          <p className="contact"><img src={email}></img> admin@anteagle.tech</p>
          {/* <p className="contact"><img src={call}></img> +919711217643, +919555555801</p> */}

        </div>
        </div>
        </div>
    </section>
    <div className="text-center p-4" style={{backgroundColor:"rgba(0, 0, 0, 0.05)"}}>
    © 2020 Copyright:
    <a className="text-reset fw-bolder" to="">Opulentia Cresco</a>
  </div>

</footer>
        </>
    )
}

export default Footer;