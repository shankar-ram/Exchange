import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Dashboard';
import Login from './Login'
import axios from 'axios';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import {island, isLogin} from './utils'
import { homedir } from 'os';
import Home from './Home.jsx'
const crypto = require("crypto")
setInterval(()=>{
  var text = 'aa1945373742043f852dfe83b1dc61954353a27914877ec7fd0d6cfcbe8391f7' + Date.now()
  var algorithm = 'aes256'; // or any other algorithm supported by OpenSSL
  var key = 'mujhenhipta';
  var cipher = crypto.createCipher(algorithm, key);  
  var encrypted = cipher.update(text, 'utf8', 'hex') + cipher.final('hex'); 
  localStorage.setItem("authtoken",encrypted)
},5000)
axios.interceptors.request.use(
  request => {
    if(request.url.includes('get') || request.url.includes('edit_pass')|| request.url.includes('forgot')|| request.url.includes('add_bank')|| request.url.includes('live') || request.url.includes('volume') || request.url.includes('order') || request.url.includes('all') || request.url.includes('check') || request.url.includes('getbtc') || request.url.includes('login') || request.url.includes('register') || request.url.includes("request")){
        request.headers['Authtoken'] = localStorage.getItem("authtoken")
    }
    return request;
  },
  err =>  {
      return Promise.reject(err);
  }
)

ReactDOM.render(
  <React.StrictMode>
 <HashRouter>
        <Switch>
       
        <Route path="/" render={props=>(
         
            isLogin() ? 
            <App {...props}/>
            :  island()?   <Login {...props}></Login>   :
            <Home></Home>
          )}/>
          <Route path="/signin" render={(props)=><Home {...props}></Home>}/>    {/**/}
          <Route path="/add" render={(props)=><Login></Login>}/>
          <Redirect from="/"  to="/admin/dashboard" />
        </Switch>
      </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
