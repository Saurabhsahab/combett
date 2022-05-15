import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';import React, { useEffect, useState } from 'react'
import Drawer from './Drawer'
import { Avatar,TextField } from '@mui/material'
import Loader from "./Loader"
import "./User.css"
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { useRef } from 'react';
import axios from "./axios"
function SelfUser() {
const [userdata, setuserdata] = useState(false)
var CryptoJS=require('crypto-js');
var udata=localStorage.getItem('user');
//  var bytes  = CryptoJS.AES.decrypt(udata.toString(), 'somekey');
// var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
// userdata=decryptedData;

const createuser=async (data)=>{
console.log(data);
var config = {
  data : data,
  method: 'post',
  url: '/user',
  headers: { 
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQzMzY3NTU0LCJpYXQiOjE2NDI5MzU1NTQsImp0aSI6IjNlMGYzZTUwMzQ4ZTRkZGVhZjdiNDQ1YTNiOWRmZjM3IiwidXNlcl9pZCI6MSwidXNlcl9uYW1lIjoiU3VkaGFuc2h1IFJhbmphbiJ9.7REJ99i_2WiC-yXEnFeEWsRa-y-44bhoFXZ2GynMT5c', 
    'Content-Type': 'application/json'
  },

};
var config2 = {
  // data : data,
  method: 'get',
  url: '/userall',
  headers: { 
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQzMzY3NTU0LCJpYXQiOjE2NDI5MzU1NTQsImp0aSI6IjNlMGYzZTUwMzQ4ZTRkZGVhZjdiNDQ1YTNiOWRmZjM3IiwidXNlcl9pZCI6MSwidXNlcl9uYW1lIjoiU3VkaGFuc2h1IFJhbmphbiJ9.7REJ99i_2WiC-yXEnFeEWsRa-y-44bhoFXZ2GynMT5c', 
    'Content-Type': 'text/plain'
  },

};
// 
axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

  
} 


const data={
  fname:"Sudhanshu",
  lname:"Ranjan",
  email: "something@gmail.com",
  batch:"IT-23",
  // pf_img:"src",
  present_company:"Google",
  about:"somethinwerwerwewnj dsnjfns fsjnjs fsdfsdfsd sdjsd gsjg sdgsug sdgsug sgbs g",gh_link:"someloink"
}
const [textValue, setTextValue] = useState("");

const onTextChange = (e) =>
{console.log(e.target.value)
setTextValue(e.target.value);
}
// console.log(userdata)
const [skills, setskills] = useState([])
useEffect(() => {
// console.log(udata)
// setuserdata(decryptedData)

    // console.log(cosudata)
 
  }
, [])

const [user, setUser] = useState("");
const handledeleteskill=(ind)=>{
  const arr=skills;
const removed=skills.splice(ind,1);
setskills(skills);


}
  const form = useRef(null);
  const [cuserdata, setcuserdata] = useState("");
  return (
    <div>
<Drawer />
<div className='Blog-cont'>
    <div className='blog open'>

<div className='details'>
  <span className='nunito stag'> Complete your profile</span>
{/* <div><span className='boldtext'>{data.fname +" "+ data.lname} </span></div>

<div><span className='boldtext'> Batch : </span> {data.batch}</div>
<div><span className='boldtext'> Present Company : </span> {data.present_company}</div>
<div><span className='boldtext'> About : </span> {data.email}</div>
<div><span className='boldtext'> Email Id :</span> {data.email}</div>
<div><span className='boldtext'> Github Link : </span> {data.gh_link}</div> */}



  
  <form ref={form} onSubmit={(e)=>{
    e.preventDefault();
    const data = new FormData(form.current)
    console.log(data.values)

 var object = {};
data.forEach((value, key) => object[key] = value);
// object['skills']=skills;
object['pf_img']=""
var json = JSON.stringify(object);
// setcuserdata(json);
createuser(object);


  console.log(json)

  // var json = JSON.stringify(object);
      
      
      ;
  }}>
<TextField pt={2} required name='fname' label="Name"   id="skill"/>
<TextField required  margin="dense" name='lname' label="Name"    id="skill"/>
<TextField required  margin="dense" name="email"  label="email"    id="skill"/>
<TextField required name="batch" label="Batch"    id="skill"/>
<TextField required name='about' label="About"    id="skill"/>
<TextField required name='present_company'  label="Present Company" helperText="NAN if you are a student"    id="skill"/>
<TextField required name='gh_link' label="github LINK"    id="skill"/>
<TextField  value={textValue} onChange={onTextChange}  helperText="skill"   id="skill"/> */}

 <Button variant="contained" endIcon={<SendIcon />} onClick={()=>{
  console.log(skills);
  setskills([...skills,textValue])
  setTextValue("");}} >     </Button>
 
  
<Button type='submit' variant="contained" endIcon={<SendIcon />} >Complete Profile
      </Button>  
      </form>
</div>

      <div className='skills'>
      {
        skills.map((e,ind)=><Chip label={e} variant="outlined" id={ind} key={ind} onDelete={()=>handledeleteskill(ind)}/>
        )
      }
      </div>
     
     
      {/* <Chip label="Chip Outlined" variant="outlined"  /> */}
    {/* </Stack> */}
    </div>
    </div>

    </div>
  )
}

export default SelfUser