import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';import React, { useEffect, useState } from 'react'
import Drawer from './Drawer'
import { Avatar,TextField } from '@mui/material'
import Loader from "./Loader"
import "./User.css"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

function SelfUser() {
const [userdata, setuserdata] = useState(false)
var CryptoJS=require('crypto-js');
var udata=localStorage.getItem('user');
 var bytes  = CryptoJS.AES.decrypt(udata.toString(), 'somekey');
var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
// userdata=decryptedData;

const data={
  fname:"Sudhanshu",
  lname:"Ranjan",
  email: "something@gmail.com",
  batch:"IT-23",
  pf_img:"src",
  present_company:"Google",
  about:"somethinwerwerwewnj dsnjfns fsjnjs fsdfsdfsd sdjsd gsjg sdgsug sdgsug sgbs g",gh_link:"someloink"
}
const [textValue, setTextValue] = useState("");

const onTextChange = (e) => setTextValue(e.target.value);
// console.log(userdata)
const [skills, setskills] = useState(["hello"])
useEffect(() => {
console.log(udata)
setuserdata(decryptedData)

    // console.log(cosudata)
 
  }
, [])


  return (
    <div>
<Drawer />
<div className='Blog-cont'>
    <div className='blog open'>
      {
          !userdata?<Loader/>:<Avatar />
      }  
      {/* {userdata.name} */}
<div className='details'>
<div><span className='boldtext'>{data.fname +" "+ data.lname} </span></div>

<div><span className='boldtext'> Batch : </span> {data.batch}</div>
<div><span className='boldtext'> Present Company : </span> {data.present_company}</div>
<div><span className='boldtext'> About : </span> {data.email}</div>
<div><span className='boldtext'> Email Id :</span> {data.email}</div>
<div><span className='boldtext'> Github Link : </span> {data.gh_link}</div>

</div>


  
      
    {/* <Stack direction="row" flexWrap='true' spacing={1}> */}
    
<TextField onChange={onTextChange} value={textValue} variant='filled'  id="skill" inputProps={{style: {paddingTop:10}}}/>
<Button variant="contained" endIcon={<SendIcon />} onClick={()=>{
  console.log(textValue)
  setskills([...skills,textValue])
}}>
      </Button>  
      <div className='skills'>
      {
        skills.map((e,ind)=><Chip className='chip' label={e} />
        )
      }
      </div>
     
     
      <Chip label="Chip Outlined" variant="outlined"  />
    {/* </Stack> */}
    </div>
    </div>

    </div>
  )
}

export default SelfUser