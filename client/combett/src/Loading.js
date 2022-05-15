import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import {getuserdetails} from "./Requests"

// impot Loader
function Loading() {

const x=useParams();
var CryptoJS = require("crypto-js");
const v=localStorage.getItem('user');
var decrypted =     CryptoJS.AES.decrypt(v, "somekey");
    var ans = JSON.parse(CryptoJS.enc.Utf8.stringify(decrypted));
console.log(ans.email);
    useEffect(() => {
getuserdetails(x);

    }, [])
    
  return (
    <div>
<Loader />

    </div>
  )
}

export default Loading