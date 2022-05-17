import React, { useEffect, useState } from 'react'
import "./Blog.css"
// import Navigation
import {getallusers} from './Requests';
import { Navigate, useNavigate } from 'react-router-dom';
import "./People.css"
import Loader from "./Loader"
import Drawer from "./Drawer"
import { Avatar } from '@mui/material';
function AllPeople({pdata}) {
    const Navigate = useNavigate();

    // console.log(pdata)


// const [data, setdata] = useState(second)
const [data, setdata] = useState(false)
useEffect(() => {
  setdata(pdata);
}, [])



return (
    <>

 {/* <Drawer/> */}
        <div className='blog-cont'>
       
        {!pdata?<Loader/>:pdata.map((e,i)=>{
    const {fname,lname,_id,about,email,gh_link,pf_img,present_company,batch}=e;
    return (
        <div className='blog profile' onClick={()=>{
            Navigate("/user/"+_id)
        }}>
<Avatar src={pf_img}/> 
        <span className='title'>
          {fname}  {lname}<br/> 
       
        
        </span>
           
        <span  className='title'>
        
        @ {batch}
        </span>
        
        <div className='em'>
        {email}
        </div>
        {present_company == 'NAN' ? "Still a student" : ("Working @ " + present_company)}

        <div className='des'>
            {about}
        </div>
    </div>
    )
})}
       {/* {data?"":"nothing here"} */}
        
        </div>
    
        </>
        
)
}

export default AllPeople
