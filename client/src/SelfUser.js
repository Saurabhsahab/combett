import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send'; import React, { useEffect, useState } from 'react'
import Drawer from './Drawer'
import { Avatar, TextField } from '@mui/material'
import "./User.css"
import Chip from '@mui/material/Chip';
import { useRef } from 'react';

import IconButton from '@mui/material/IconButton';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
// import TextField from '@mui/material/TextField';
import axios from "./axios"
import { useNavigate } from 'react-router-dom';
function SelfUser() {
  const [userdata, setuserdata] = useState(false)
  var CryptoJS = require('crypto-js');
  var udata = localStorage.getItem('user');


  //derpyed data;
  var CryptoJS = require("crypto-js");
  const v = localStorage.getItem('user');
  var decrypted = CryptoJS.AES.decrypt(v, "somekey");
  var ans = JSON.parse(CryptoJS.enc.Utf8.stringify(decrypted));
  const bearer = process.env.bearer;
  const { email
    , familyName
    , givenName
    , googleId
    , imageUrl } = ans;


const navigate=useNavigate();
  const createuser = async (data) => {
    console.log(data);
    var config = {
      data: data,
      method: 'post',
      url: '/user',
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQzMzY3NTU0LCJpYXQiOjE2NDI5MzU1NTQsImp0aSI6IjNlMGYzZTUwMzQ4ZTRkZGVhZjdiNDQ1YTNiOWRmZjM3IiwidXNlcl9pZCI6MSwidXNlcl9uYW1lIjoiU3VkaGFuc2h1IFJhbmphbiJ9.7REJ99i_2WiC-yXEnFeEWsRa-y-44bhoFXZ2GynMT5c',
        'Content-Type': 'application/json'
      },

    };
    

    axios(config)
      .then(function (response) {
        if(response.status==201)
        {
navigate("/blogs")
        }

        console.log(JSON.stringify(response.data));
      
      })
      .catch(function (error) {
        console.log(error);
      });


  }


  const [textValue, setTextValue] = useState("");

  const onTextChange = (e) => {
    // console.log(e.target.value)
    setTextValue(e.target.value);
  }
  // console.log(userdata)

  const [skills, setskills] = useState([])
  useEffect(() => {
    console.log(email)

  }
    , [])

  const [user, setUser] = useState("");
  const handledeleteskill = (ind) => {
    const arr = skills;
    const removed = skills.splice(ind, 1);
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




            <form ref={form} onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(form.current)
              console.log(data.values)

              var object = {};
              data.forEach((value, key) => object[key] = value);
              object['pf_img'] = imageUrl
              var json = JSON.stringify(object);
              createuser(object);
              console.log(json)

                // var json = JSON.stringify(object);


                ;
            }}>
              <TextField pt={2} required name='fname' defaultValue={givenName} label="First Name" id="skill" />
              <TextField required margin="dense" name='lname' defaultValue={familyName} label="Last Name" id="skill" />
              <TextField InputLabelProps={{ shrink: true }} required margin="dense" name="email" value={email} label="Email" id="skill" />
              <TextField required margin="dense" name="batch" label="Batch" id="skill" placeholder='IT-23' />
              <TextField required margin="dense" name='about' label="About" id="skill" />
              <TextField required margin="dense" name='present_company' label="Present Company" placeholder='NAN' helperText="NAN if you are a student" id="skill" />
              <TextField required margin="dense" name='gh_link' label="github LINK" id="skill" />
              {/* <TextField InputProps={{
                endAdornment: <IconButton edge="end" color="primary">
                  <SendIcon onClick={() => {
                    console.log(skills);
                    if (textValue != "") {
                      setskills([...skills, textValue])
                      setTextValue("");

                    }
                  }} />
                </IconButton>
              }}
                margin="dense" value={textValue} onChange={onTextChange} label="Add skill" helperText="skill">



              </TextField> */}




              {/* <div className='skills'>
     {
              skills.map((e, ind) => <Chip label={e} variant="outlined" id={ind} key={ind} onDelete={() => handledeleteskill(ind)} />
              )
            }
          </div> */}
              <Button type='submit' variant="contained" endIcon={<SendIcon />} >Complete Profile
              </Button>
            </form>
          </div>




          {/* <Chip label="Chip Outlined" variant="outlined"  /> */}
          {/* </Stack> */}
        </div>
      </div>

    </div>
  )
}

export default SelfUser