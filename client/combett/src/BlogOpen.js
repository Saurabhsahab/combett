import React, { useEffect, useState } from 'react'
import Drawer from "./Drawer"
import "./Blog.css"
import { blogdetailid, getuserdetails } from "./Requests"
import { useParams } from 'react-router-dom'
import Loader from "./Loader"
import { Avatar } from '@mui/material'

function BlogOpen() {
  // useParams

  const x = useParams().code;
  const [data, setdata] = useState("");

  async function getblog() {
    const res = await blogdetailid(x);
    const p = JSON.parse(res);
    setdata(p[0]);


  }


  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(x)
    getblog();

  }, [])



  return (
    <>
      <Drawer />
      <div className='Blog-cont'>

        {data ? <Blog data={data} /> : <Loader />}

      </div>


    </>

  )
}

function Blog({ data }) {
  console.log(data)
  const [creatorname, setcreatorname] = useState([])
  var { _id, s_id, title, description, created_at, c_name } = data;
  async function getuser() {
    const res = await getuserdetails(s_id);
    // console.log(s_id);
    const cnd = JSON.parse(res);
    setcreatorname(cnd[0]);
    console.log(cnd[0]);
  }
  // var date
  const [date, setdate] = useState("")

  useEffect(() => {
    var dateObj = new Date(created_at);
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    setdate(year + "/" + month + "/" + day);

    console.log(date)
    console.log(date)
    var des = document.getElementById("description");
    console.log(s_id)
    getuser();
    des.innerHTML = description;
    // d
  }, [])

  return (
    <div className='blog open'>
      <div className='cmpny'>
        {c_name}
      </div>


      <span className='title'>
        {title}
      </span>
      <div className='info'>
        <a href={"/user/" + creatorname._id}>

          <span id="tag">   <Avatar sx={{ height: '20px', width: '20px' }} src={creatorname.pf_img} />
            <span style={{ margin: '5px' }}> {creatorname.fname} {creatorname.lname} </span></span>

        </a>
        <span> {date}</span>
      </div>
      <div className='blog-des' id='description'>

      </div>
    </div>)
}

export default BlogOpen