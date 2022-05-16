// import { Drawer } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Drawer from './Drawer';
import { useParams } from 'react-router-dom'
import "./user.css"
import {getuserdetailsbyid} from "./Requests"
import { Avatar } from '@mui/material';
function UserPorfile() {
    const x=useParams();
    useEffect(() => {
console.log(x.id)
    }, [])

const [data, setdata] = useState("")
const {fname,lname,about,email,gh_link,pf_img,present_company,batch}=data;
    
// var {}=data;
  async function getuser(){
    const res=await getuserdetailsbyid(x.id);
// console.log(JSON.parse(res))
if(res==500 || res==404)
{ setdata(false);
}
    const cnd=JSON.parse(res);
setdata(cnd[0]);
  
console.log(cnd[0])
    
    }
  useEffect(()=>{

  getuser();
  document.title=data.fname;

  },[])
    


  return (
    <div>
        <Drawer />
        
        <div className='Blog-cont'>
       
              <div className='uprofile'>
                  
                  <Avatar alt="Remy Sharp" src={pf_img} />
                  <span>
                      {fname} {lname}
                      {batch}
                  </span>
              </div>
       
        </div>
        </div>
  )
}

export default UserPorfile