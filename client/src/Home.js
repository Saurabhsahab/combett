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
import { useState } from 'react';
import Loader from './Loader';
import Blogs from './Blogs';
import { getallexperience } from './Requests';
function Home() {
    const [isloading, setisloading] = useState(false)
// const [first, setfirst] = useState(second)
// const [first, setfirst] = useState(false)
   
const [query, setquery] = useState("")
const [data, setdata] = useState("")
const [ogdata, setogdata] = useState(data);

async function getexp(){
    const res=await getallexperience();
    console.log(JSON.parse(res));
    setdata(JSON.parse(res));
    setogdata(JSON.parse(res));


}

const Navigate = useNavigate();
useEffect(() => {
getexp();
  document.title="Blogs"
}, [])
const handlesearch=(quer)=>{
console.log(data.length)
const results=[]
const res=ogdata.filter((item)=>{
    return Object.values(item).join('').toLowerCase().includes(quer.toLowerCase());
})
setdata(res);

}
const inp = useRef(null)

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
                       
                       
                    
                        {data==""? <div className='nores'>
                          No result found
                            <img src='no_result.gif'/>
                        </div>:""}

                    </div>
                    {!data?<Loader/>:<Blogs data={data} />}
                  
                </div>
            </div>

            )
}

            export default Home
