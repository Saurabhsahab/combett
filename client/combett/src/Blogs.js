import React from 'react'
import "./Blog.css"
// import Navigation
import { Navigate, useNavigate } from 'react-router-dom';

function Blogs() {
    const Navigate = useNavigate();

    const list = ['a','b','a','b','a','b','a','b','a','b'];
    const x = 
        list.map((e,ind) => {
      return (
        <div className='blog' key={ind} onClick={()=>Navigate(`s${ind}`)} >
        <img src='https://miro.medium.com/max/1400/1*CRna4vgbl8IAbZMTwlwSTw.jpeg' width={300}>

        </img>

        <span className='title'>
            How to Ask for refferal | Guide to refferals
        </span>
        <div className='info'>
            <span id="tag"> INTERVIEW </span>
            <span> Date</span>
        </div>
        <div className='des'>
            Asking for refferal may seem very difficult task and it could lead to missing ooppuritnuity in the lack of asking for it to the respective recruiter
        </div>
    </div>   )        

                

    
        })
    
    return (
        <>
            <div className='blog-cont'>

                <div className='blog'>
                    <img src='https://miro.medium.com/max/1400/1*CRna4vgbl8IAbZMTwlwSTw.jpeg' width={300}>

                    </img>

                    <span className='title'>
                        How to Ask for refferal | Guide to refferals
                    </span>
                    <div className='info'>
                        <span id="tag"> INTERVIEW </span>
                        <span> Date</span>
                    </div>
                    <div className='des'>
                        Asking for refferal may seem very difficult task and it could lead to missing ooppuritnuity in the lack of asking for it to the respective recruiter
                    </div>
                </div>
{x}
            </div></>
    )
}

export default Blogs
