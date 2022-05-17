import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "./axios"
import Loader from './Loader';
function Myprofile() {
//   useNavigate
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
   navigate("/user/"+response.data[0]._id)
    })
    .catch(function (error) {
      console.log(error);
    });
    
  return (
    <div>
        <Loader/>
    </div>
  )
}

export default Myprofile