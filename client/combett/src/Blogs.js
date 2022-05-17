import React, { useEffect, useState } from 'react'
import "./Blog.css"
// import Navigation
import { Navigate, useNavigate } from 'react-router-dom';
import {getallexperience} from "./Requests.js";
import Loader from './Loader';
import { Chip } from '@mui/material';

function Blogs({data,admin}) {
    console.log(data)
console.log(admin)
    const Navigate = useNavigate();
    const [date, setdate] = useState("")
const d=(mydate)=>{
    var dateObj = new Date(mydate);
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    return(year + "/" + month + "/" + day);
}

useEffect(() => {
    
}, [])

  
   const [blogdata, setdata] = useState([])
   const x = 
   data.map((e,ind) => {
      const {_id,title,description,created_at,c_name}=e;
    
    
      
 return (
   <div className='blog short' onClick={()=>{
       console.log(_id)
nav("/blogs/"+_id);
   }}>
   <div className='cmpny'>
    {c_name}
       </div>

   <span className='title'>
      {title}
   </span>

   
   {/* <Chip */}
   <div className='des'>
       {removeTags(description)}
   </div>
   <Chip style={{position:'relative'}} label={d(created_at)} />
</div>    

           


   )})

    useEffect(() => {
    
    }, [])

    function removeTags(str) {
        if ((str===null) || (str===''))
            return false;
        else
            str = str.toString();
            
        return str.replace( /(<([^>]+)>)/ig, '');
    }
    const nav=useNavigate();

  
    
    return (
        <>
            <div className='blog-cont'>

         
{data?x:<Loader/>
}

            </div></>
    )
}

export default Blogs
