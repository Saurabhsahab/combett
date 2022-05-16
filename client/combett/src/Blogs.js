import React, { useEffect, useState } from 'react'
import "./Blog.css"
// import Navigation
import { Navigate, useNavigate } from 'react-router-dom';
import {getallexperience} from "./Requests.js";
import Loader from './Loader';

function Blogs() {
    const Navigate = useNavigate();
// useEffect
    const list = ['a','b','a','b','a','b','a','b','a','b'];
   const [data, setdata] = useState([])
    async function getexp(){
        const res=await getallexperience();
        console.log(JSON.parse(res));
        setdata(JSON.parse(res));
    // console.log(data)
    }

    useEffect(() => {
        getexp();
    }, [])

    function removeTags(str) {
        if ((str===null) || (str===''))
            return false;
        else
            str = str.toString();
            
        return str.replace( /(<([^>]+)>)/ig, '');
    }
    const nav=useNavigate();
    const x = 
        data.map((e,ind) => {
           const {_id,title,description,create_at,c_name}=e;
           
      return (
        <div className='blog' onClick={()=>{
            console.log(_id)
nav(""+_id);
        }}>
        <div className='cmpny'>
         {c_name}
            </div>

        <span className='title'>
           {title}
        </span>
        <div className='info'>
            <span id="tag"> INTERVIEW </span>
            <span> Date</span>
        </div>
        <div className='des'>
            {removeTags(description)}
        </div>
    </div>    

                

    
        )})
    
    return (
        <>
            <div className='blog-cont'>

         
{data?x:<Loader/>
}
            </div></>
    )
}

export default Blogs
