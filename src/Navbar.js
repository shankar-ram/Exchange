import React, { useState } from 'react'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../src/FInalCryptologo.png'
import logo2 from '../src/anteagle_1.png'
import "./home.css"
import {NavLink} from 'react-router-dom'
const NavBar=()=>{

   return(
     <>
     <div className=" bar container-fluid nav_bg" >
      <div className="row">
      
        <div className="col-12 mx-auto">

       
  <nav className=" nb navbar  fixed-top navbar-expand-lg navbar-dark ">

    <div className="container-fluid col-11">
    <div>
    <img src={logo}  class="img-fluid img-thumbnail rounded-circle"style={{width:"80px",marginLeft:"-1.3rem",marginTop:"0.2rem"}}></img>
      
      <NavLink className="navbar-brand " to="#" style={{width:"3rem",marginLeft:"1rem"}}>AntEagle Exchange </NavLink>
      <p style={{marginLeft:"5.3rem",marginTop:"-2rem"}}><NavLink style={{textDecoration:"none",color:"white"}} to="">By the traders for the traders</NavLink></p>
    </div>
    
    
      <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon "></span>
      </button>
     
     

    

    
      <div className="collapsed">

      <div className="  collapse navbar-collapse " id="navbarSupportedContent">
        
        <ul className="navbar-nav  ml-lg-auto mb-2 mb-lg-0">
          <li className="nav-item ">
            <NavLink activeClassName="menu_active" className="nav-link active" aria-current="page" to="c#a">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="menu_active" className="nav-link" to="a#b">AntNet</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="menu_active" className="nav-link" to="b#x">Services</NavLink>
          </li>
          
       
            </ul>
           
            
            <ul className="  navbar-nav ml-lg-auto mb-2 mb-lg-0">
              <li className="nav-item mr-auto">
          
                <button type="button" class="btn  btn-lg regist_log"  onClick={()=>{
            localStorage.setItem("land",true)
            window.location.href = "/"
          }}> Register or Login </button>
    
              </li>
            </ul>
         
   
        
      
    </div>
  
    </div>
    
  </div>
  
</nav>

 </div>
 
      </div>
      
     </div>
     


     <section id="title" style={{background:"#200F21"}}>
        <nav className="navbar  sticky-top">
          <div className="brand-title">AntEagle</div>
          <a to="" class="toggle-button">
          <span class="tbar"></span>
          <span class="tbar"></span>
          <span class="tbar"></span>
          </a>
         
          <div className="navbar-links"> 
          <ul>
              <li  style={{marginRight:"3rem"}} className="nav-item " ><NavLink  to="/" activeClassName="menu-active" aria-current="page">Home</NavLink></li>
              <li style={{marginRight:"3rem"}} className="nav-item "><NavLink  to="/a" activeClassName="menu_active">AntNet</NavLink></li>
              <li style={{marginRight:"3rem"}} className="nav-item "><NavLink to="/b"  activeClassName="menu_active">Home</NavLink></li>
            </ul>
          </div>
          
        </nav>
     </section>
      
     </>
   )
}










{/* <div className="container-fluid heading">
        <nav class="navbar navbar-expand-lg navbar-light fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>  
        </div> */}



export default NavBar;