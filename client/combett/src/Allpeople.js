import React, { useEffect, useState } from 'react'
import "./Blog.css"
// import Navigation
import {getallusers} from './Requests';
import { Navigate, useNavigate } from 'react-router-dom';
import "./People.css"
import Loader from "./Loader"
import Drawer from "./Drawer"
function AllPeople() {
    const Navigate = useNavigate();

    
async function getusersall(){
    const res=await getallusers();
    console.log(eval(res));
    // const x=;
    setdata(JSON.parse(res));
    // console.log(data)
}
// const [data, setdata] = useState(second)
const [data, setdata] = useState([])
useEffect(() => {
    getusersall();
}, [])


const x=data.map((e,i)=>{
    const {fname,lname,about,email,gh_link,pf_img,present_company,batch}=e;
    return (
        <div className='blog'>

        <span className='title'>
          {fname}  {lname}
        
           
        </span>
        
        <div className='info'>
        {email}
            <span id="tag">  {present_company}</span>
            <span> {batch}</span>
        </div>
        <div className='des'>
            {about}
        </div>
    </div>
    )
})
return (
    <>

 {/* <Drawer/> */}
        <div className='blog-cont'>
       
        {!data?<Loader/>:x}
       
        
        </div>
    
        </>
        
)
}

export default AllPeople
