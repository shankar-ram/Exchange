import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './FInalCryptologo.png'
import logo2 from '../src/anteagle_1.png'

import "./home.css"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap';
import Dropdown from '@restart/ui/esm/Dropdown';
import { NavDropdown} from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';


const NavBar=()=>{
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
   return(
     <>
    
    
     <div>
      <Navbar fixed="top"  dark expand="md" style={{padding:"1% 3% 2%",backgroundColor:" #200F21"}}>
        <NavbarBrand href="/"> <img src={logo}  class="img-fluid img-thumbnail rounded-circle"style={{width:"75px"}}></img> AntEagle Exchange<br/><p style={{fontSize:"15px",marginLeft:"5rem",marginTop:"-2rem"}}>By the traders for the traders</p></NavbarBrand>
        <NavbarToggler onClick={toggle} style={{color:"black"}}/>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem className="items">
              <NavLink activeClassName="menu_active" className="nav-link" aria-current="page" href="/components/">Home</NavLink>
            </NavItem>
            <NavItem className="items">
              <NavLink activeClassName="menu_active"   className="nav-link" href="">AntNet</NavLink>
            </NavItem>
            <NavItem className="items">
              <NavLink activeClassName="menu_active"  className="nav-link" href="">Services</NavLink>
            </NavItem>
            <Button size="lg"   className="nav-btn" style={{color:"black"}}  onClick={()=>{
            localStorage.setItem("land",true)
            window.location.href = "/"
          }}> Register or Login </Button>
          </Nav>
        
        </Collapse>
      </Navbar>
    </div>
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