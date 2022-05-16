import React, { useEffect } from 'react'
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
function Home() {
    const [isloading, setisloading] = useState(false)
// const [first, setfirst] = useState(second)
// const [first, setfirst] = useState(false)
   

const Navigate = useNavigate();
useEffect(() => {
  document.title="Blogs"
}, [])

    return (
    
            <div>

                <Drawer />
                <div className='container'>

                    <div className='search'>
                   
                        <div className='banner-home'>


                        </div>
                        <form className='home-searchbar'>
                            <img src='./search.svg' height='30px' ></img>
                            <input id='home-textinput' type="text" placeholder='"Amazon"'>

                            </input>
                         
                            <button onClick={(e)=>{e.preventDefault();setisloading(!isloading)} } style={{ backgroundColor: 'white', border: 'none', outline: 'none' }}>
                                <img src='./cross.svg' height='20px'  ></img>
                            </button>
                          
                        </form>
                       
                    


                    </div>
                    {isloading?<Loader/>:<Blogs/>}
                </div>
            </div>

            )
}

            export default Home
