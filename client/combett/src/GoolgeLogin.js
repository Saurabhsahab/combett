import React, { useEffect } from 'react'
import GoogleLogin from 'react-google-login'
import { useHistory } from "react-router-dom";
// import { useEffect } from 'react';
// import redirec
import getuserdetails from "./Requests"
import { useNavigate } from "react-router-dom";

function GoolgeLogin() {
    var CryptoJS = require("crypto-js");
    let navigate=useNavigate();




    const onSuccess=(res)=>{
    console.log("success :", res.profileObj);
    const skey=process.env.REACT_APP_GOOGLE_CLIENT_ID;
    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(res.profileObj), "somekey").toString();
    localStorage.setItem('user',ciphertext);
    navigate(`/loading`+res.profileObj.email);

   
}



const onFailure=(res)=>{
    console.log("failure",res);

}
    const clientId="131250365854-g3clkvt4rk0m2b2n2cu07b8hm8cfbi3l.apps.googleusercontent.com"
    
 

    return (<div>
        <GoogleLogin
    clientId={clientId}    
    render={renderProps => (
        <button id="google" href="#1" onClick={renderProps.onClick} >
          <div id="glogo"> 
          <img id="logo" src="./G__Logo.svg"/> 
          </div>
         <span  className=" nunito sin">
      Google Sign in
           </span> 
           
          
          </button>
         
      )}
    buttonText="Log in with "
    onSuccess={onSuccess}
    onFailure={onFailure}
    cookiePolicy={'single_host_origin'}
/>


</div>
    )
}

export default GoolgeLogin
