import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from './Loader'
import {getuserdetails} from "./Requests"
import axios from './axios'
// impot Loader
function Loading() {

const x=useParams();
const navigate=useNavigate();
var CryptoJS = require("crypto-js");
const v=localStorage.getItem('user');
var decrypted =     CryptoJS.AES.decrypt(v, "somekey");
    var ans = JSON.parse(CryptoJS.enc.Utf8.stringify(decrypted));
    const bearer=process.env.bearer;


    console.log(ans);
    var config = {
      // data : data,
      method: 'get',
      url: '/useremail/'+ans.email,
      headers: { 
        'Authorization': 'Bearer'+bearer, 
        'Content-Type': 'text/plain'
      },
    
    };

axios(config)
    .then(function (response) {
        const x=JSON.stringify(response.data);
      console.log(response);
 if(response.data.length==0)
 {navigate("/self")}
 else {navigate("/blogs")}
   
    })
    .catch(function (error) {
      console.log(error);
    });
    
      
    


    useEffect(() => {
// const s= getuserdetails(x);
// console.log(s)
    }, [])
    
  return (
    <div>
<Loader />

    </div>
  )
}

export default Loading