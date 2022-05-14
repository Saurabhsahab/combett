import React, { useEffect } from 'react'
import Drawer from "./Drawer"
import "./Blog.css"
function BlogOpen() {


useEffect(() => {
  window.scrollTo(0,0);
}, [])


  return (
      <>
<Drawer/>
<div className='Blog-cont'>
    <div className='blog open'>
   
     <img src='https://miro.medium.com/max/1400/1*CRna4vgbl8IAbZMTwlwSTw.jpeg' width={300}>

        </img>

        <span className='title'>
            How to Ask for refferal | Guide to refferals
        </span>
        <div className='info'>
            <span id="tag"> INTERVIEW </span>
            <span> Date</span>
        </div>
        <div className='blog-des'>
        It started by applying on the LinkedIn job posting page for LinkedIn’s SRE Intern position and later got a mail from a recruiter to appear for the assessment round scheduled on a so ‘n’ so date. As mentioned I completed my assessment and later on was mailed with the 3 interview round details. Here based on starting two rounds result you will be called for the end Host manager round.

Assessment Details:

MCQ questions – 26
Coding question – 2
Database query question – 2
Note –  Questions quantity may vary.

Interview Details:

Round 1: Technical Round [Panelist(2)] – This involves questions from your favorite topics like operating system, DBMS, networking, coding, etc. As it moves forward all the topics are covered. Questions are usually application-based (real-life scenarios) so having a clear concept and understanding is a must.

Round 2: System Design Round [Panelist(2)] – Here based on the projects done, we need to design the system while discussing things first with the interviewers. Once they are satisfied with your approach like what you are going to do, why you are going with that, and all.

Round 3: Host Manager Round – Here you will get to know about the ongoing projects, projects you are going to work upon if selected. Some situation-based questions, Leadership skills, Communication skills, etc.
        </div>
    </div>

     </div>
 

      </>
   
  )
}

export default BlogOpen