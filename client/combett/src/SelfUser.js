import React, { useEffect, useState } from 'react'
import Drawer from './Drawer'
import { Avatar } from '@mui/material'
import Loader from "./Loader"

function SelfUser() {
const [userdata, setuserdata] = useState(false)
var CryptoJS=require('crypto-js');
useEffect(() => {
    var udata=localStorage.getItem('user');
    if(udata)
   { var bytes  = CryptoJS.AES.decrypt(udata.toString(), 'somekey');
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    // userdata=decryptedData;
    setuserdata(decryptedData);
    console.log(userdata)
  }
}, [])


  return (
    <div>
<Drawer />
<div className='Blog-cont'>
    <div className='blog open'>
      {
          !userdata?<Loader/>:<Avatar />
      }  
        {/* <Loader/> */}
      
    </div>

    </div>

    </div>
  )
}

export default SelfUser