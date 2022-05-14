import React from 'react'
import "./home.css"
import Navbar from './Navbar'
import Button from '@mui/material/Button';
import { Navigate, useNavigate } from 'react-router-dom';
import Drawer from "./Drawer"
import "./loader.css"
import { useState } from 'react';
import Loader from './Loader';
import Blogs from './Blogs';
function Home() {
    const [isloading, setisloading] = useState(false)
// const [first, setfirst] = useState(second)
// const [first, setfirst] = useState(false)
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
                            <input id='home-textinput' type="text" placeholder='"Amazon"'>

                            </input>
                            <button onClick={(e)=>{e.preventDefault();setisloading(!isloading)} } style={{ backgroundColor: 'white', border: 'none', outline: 'none' }}>
                                <img src='./cross.svg' height='20px'  ></img>
                            </button>
                            <div style={{ width: '2px', height: '60%',margin:'10px', backgroundColor: 'black' }}>

                            </div>
                            <input type="text" placeholder='"Amazon"'>

                            </input>
                        </form>
                    
                 {/* <Loader/> */}


                    </div>
                    {isloading?<Loader/>:<Blogs/>}
                </div>
            </div>

            )
}

            export default Home
