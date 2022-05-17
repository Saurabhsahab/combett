import React, { useEffect, useRef } from 'react'
import "./home.css"
import Navbar from './Navbar'
import Button from '@mui/material/Button';
import { Navigate, useNavigate } from 'react-router-dom';
import Drawer from "./Drawer"
import "./loader.css"
import { FormControlLabel } from '@mui/material';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { getallusers } from './Requests';
import { useState } from 'react';
import Loader from './Loader';
import Blogs from './Blogs';
import AllPeople from './Allpeople';
function People() {
    const [isloading, setisloading] = useState(false)
   const [data, setdata] = useState(false)
    async function getusersall(){
        const res=await getallusers();
        // console.log(eval(res));
        setdata(JSON.parse(res));
        setogdata(JSON.parse(res))
    }    
 
    const [ogdata, setogdata] = useState(data);

    const handlesearch=(quer)=>{
        console.log(data.length)
        const results=[]
        const res=ogdata.filter((item)=>{
            return Object.values(item).join('').toLowerCase().includes(quer.toLowerCase());
        })
        setdata(res);
        
        }

useEffect(() => {
    getusersall();
    document.title="All People"
}, [])
const inp = useRef(null)
// useRef
const Navigate = useNavigate();
    return (
    
            <div>

                <Drawer />
                <div className='container'>

                    <div className='search'>
                   
                        <div className='banner-home'>


                        </div>
                        <form className='home-searchbar'>
                            <img src='./search.svg' height='30px' ></img>
                            <input ref={inp} onChange={(e)=>{
                               handlesearch(e.currentTarget.value);
                            }} id='home-textinput' type="text" placeholder='"Amazon"'>

                            </input>
                         
                            <button onClick={(e)=>{e.preventDefault();handlesearch(""); inp.current.value=""} } style={{ backgroundColor: 'white', border: 'none', outline: 'none' }}>
                                <img src='./cross.svg' height='20px'  ></img>
                            </button>
                         
                        </form>
                       
                    
                 {/* <Loader/> */}

                 {data==""? <div className='nores'>
                          No result found
                            <img src='no_result.gif'/>
                        </div>:""}
                    </div>
                    {isloading?<Loader/>:<AllPeople pdata={data}/>}
                   
                </div>
            </div>

            )
}

            export default People
