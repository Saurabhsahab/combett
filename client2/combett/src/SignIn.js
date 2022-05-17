import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import React from 'react';
import {GoogleLogin} from "react-google-login"
import "./si.css"
import GL from "./GoolgeLogin"
function SignIn() {


const [imghidden,setimghidden]=useState("false");

const handleLogin = async googleData => {
  const res = await fetch("/api/v1/auth/google", {
      method: "POST",
      body: JSON.stringify({
      token: googleData.tokenId
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  const data = await res.json()
  // store returned user somehow
}


  return (
    <div className="main-cont">
     
  <div className={`img-cont ${imghidden?"":"img-hidden"}`}>
    
    <img className="hands-img" src="/hands.webp"/>
    <span className="nunito com-tagline"> By community, <br/> forever </span>
 
   <span className="com-subtitle" > THEN. NOW. ALWAYS.</span>
</div>

<div className="action-cont" hidden >
<span className="nunito stag"> Start the Jouney with people you know </span>
    
<div>
  <GL />
</div>
    <div> 
 
     
      
      
     
      </div>
      <span className="nunito">
        New to the community? <a href="#sdfd" id="signup-link">
Sign Up
        </a>
         
        </span>

    
</div>

      </div>
  );
}

export default SignIn;
