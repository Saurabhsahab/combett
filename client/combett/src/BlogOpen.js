import React, { useEffect, useState } from 'react'
import Drawer from "./Drawer"
import "./Blog.css"
import {blogdetailid,getuserdetails} from "./Requests"
import { useParams } from 'react-router-dom'
import Loader from "./Loader"

function BlogOpen() {
// useParams

  const x=useParams().code;
  const [data, setdata] = useState("");

  async function getblog(){
    const res=await blogdetailid(x);
    // console.log(JSON.parse(res));
    const p=JSON.parse(res);
    setdata(p[0]);
    

}


useEffect(() => {
  window.scrollTo(0,0);
console.log(x)
getblog();

}, [])



  return (
      <>
<Drawer/>
<div className='Blog-cont'>

  {data?<Blog data={data}/>:<Loader/>}
    
     </div>
 

      </>
   
  )
}

function Blog({data}){
  console.log(data)
  const [creatorname, setcreatorname] = useState([])
  var {_id,s_id,title,description,created_at,c_name}=data;
  async function getuser(){
    const res=await getuserdetails(s_id);
    // console.log(s_id);
    const cnd=JSON.parse(res);
    setcreatorname(cnd[0]);
  console.log(cnd[0]);
    }
  useEffect(()=>{
   

  var des=document.getElementById("description");
  console.log(s_id)
  getuser();
  des.innerHTML=description;
  // d
  },[])
  
  return (
    <div className='blog open'>
   
<img src='https://miro.medium.com/max/1400/1*CRna4vgbl8IAbZMTwlwSTw.jpeg' width={300}>

   </img>

   <span className='title'>
      {title}
   </span>
   <div className='info'>
       <span id="tag"> {creatorname.fname} {creatorname.lname} </span>
       <span> Date</span>
   </div>
   <div className='blog-des' id='description'>

   </div>
</div>)
}

export default BlogOpen