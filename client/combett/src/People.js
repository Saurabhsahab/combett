import React from 'react'
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
import AllPeople from './Allpeople';
function People() {
    const [isloading, setisloading] = useState(false)

// const IOSSwitch = styled((props) => (
//     <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
//   ))(({ theme }) => ({
//     width: 42,
//     height: 26,
//     padding: 0,
//     '& .MuiSwitch-switchBase': {
//       padding: 0,
//       margin: 2,
//       transitionDuration: '300ms',
//       '&.Mui-checked': {
//         transform: 'translateX(16px)',
//         color: '#fff',
//         '& + .MuiSwitch-track': {
//           backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
//           opacity: 1,
//           border: 0,
//         },
//         '&.Mui-disabled + .MuiSwitch-track': {
//           opacity: 0.5,
//         },
//       },
//       '&.Mui-focusVisible .MuiSwitch-thumb': {
//         color: '#33cf4d',
//         border: '6px solid #fff',
//       },
//       '&.Mui-disabled .MuiSwitch-thumb': {
//         color:
//           theme.palette.mode === 'light'
//             ? theme.palette.grey[100]
//             : theme.palette.grey[600],
//       },
//       '&.Mui-disabled + .MuiSwitch-track': {
//         opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
//       },
//     },
//     '& .MuiSwitch-thumb': {
//       boxSizing: 'border-box',
//       width: 22,
//       height: 22,
//     },
//     '& .MuiSwitch-track': {
//       borderRadius: 26 / 2,
//       backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
//       opacity: 1,
//       transition: theme.transitions.create(['background-color'], {
//         duration: 500,
//       }),
//     },
//   }));
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
                         
                        </form>
                       
                    
                 {/* <Loader/> */}


                    </div>
                    {isloading?<Loader/>:<AllPeople/>}
                </div>
            </div>

            )
}

            export default People
