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
function EditSelf() {
  const [userdata, setuserdata] = useState(false)
  var CryptoJS = require('crypto-js');
  var udata = localStorage.getItem('user');
const navigate=useNavigate();

  //derpyed data;
  var CryptoJS = require("crypto-js");
  const v = localStorage.getItem('user');
  var decrypted = CryptoJS.AES.decrypt(v, "somekey");
  var ans = JSON.parse(CryptoJS.enc.Utf8.stringify(decrypted));

  const { email
    , familyName
    , givenName
    , googleId
    , imageUrl } = ans;

    const updateuser = async (data) => {
      console.log(data);
      
      var config = {
        // data : data,
        method: 'patch',
        url: '/useremail/'+ans.email,
        headers: {
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQzMzY3NTU0LCJpYXQiOjE2NDI5MzU1NTQsImp0aSI6IjNlMGYzZTUwMzQ4ZTRkZGVhZjdiNDQ1YTNiOWRmZjM3IiwidXNlcl9pZCI6MSwidXNlcl9uYW1lIjoiU3VkaGFuc2h1IFJhbmphbiJ9.7REJ99i_2WiC-yXEnFeEWsRa-y-44bhoFXZ2GynMT5c',
          'Content-Type': 'text/plain'
        },
  
      };
  
      axios(config)
        .then(function (response) {
      return (response.data);
          console.log(JSON.stringify(response.data));
    })
        .catch(function (error) {
          console.log(error);
        });
  
  
    }

    const [about, setabout] = useState("")
const [fbatch, setfbatch] = useState("")
  // const navigate = useNavigate();
  const bearer = process.env.bearer;

  
  const getdetails =  () => {


    var config = {

      method: 'get',
      url: '/useremail/'+ans.email,
      headers: { 
        'Authorization': 'Bearer'+bearer, 
        'Content-Type': 'text/plain'
      },
    
    };

axios(config)
    .then(function (response) {
        const x=JSON.stringify(response.data);
        const res=(response.data)
        setfbatch(res[0].batch);
        setabout(res[0].about);
        setuserdata(res[0]);
        console.log(res[0].batch)
        setghlink(res[0].gh_link)
      
 
    })
    .catch(function (error) {
      console.log(error);
    });
    


  }

const [ghlink, setghlink] = useState("")
  const [textValue, setTextValue] = useState("");

  const onTextChange = (e) => {
    // console.log(e.target.value)
    setTextValue(e.target.value);
  }

  const [skills, setskills] = useState([])
  useEffect(() => {
   getdetails();
  }
    , [])

  const [user, setUser] = useState("");
  const handledeleteskill = (ind) => {
    const arr = skills;
    const removed = skills.splice(ind, 1);
    setskills(skills);


  }
  // useNavigate
  const form = useRef(null);
  const [cuserdata, setcuserdata] = useState("");
  return (
    <div>
      <Drawer />
      <div className='Blog-cont'>
        <div className='blog open'>

          <div className='details'>
            <span className='nunito stag'> Update your profile</span>



            <form ref={form} onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(form.current)
              console.log(data.values)

              var object = {};
              data.forEach((value, key) => object[key] = value);
              
              var json = JSON.stringify(object);
        updateuser(json);
              
            }}>
            
              <TextField pt={2} required name='fname' defaultValue={givenName} label="First Name" id="skill" />
              <TextField required margin="dense" name='lname' defaultValue={familyName} label="Last Name" id="skill" />
              <TextField InputLabelProps={{ shrink: true }} required margin="dense" name="email" value={email} label="Email" id="skill" />
              <TextField onChange={(e)=>setfbatch(e.currentTarget.value)} value={fbatch}  required margin="dense" InputLabelProps={{ shrink: true }} name="batch" defaultValue={fbatch} label="Batch" id="skill" placeholder='IT-23' />
              <TextField  multiline required margin="dense" name='about' defaultValue= {about} label="About" id="skill" />
              <TextField  required margin="dense" name='present_company' value={userdata.present_company} label="Present Company" placeholder='NAN' helperText="NAN if you are a student" id="skill" />
              <TextField onChange={(e)=>setghlink(e.currentTarget.value)} value={ghlink}  required margin="dense" name='gh_link' label="github LINK" id="skill" />
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




              <div className='skills'>
                {
                  skills.map((e, ind) => <Chip label={e} variant="outlined" id={ind} key={ind} onDelete={() => handledeleteskill(ind)} />
                  )
                }
              </div>
              <Button  type='submit' variant="contained" endIcon={<SendIcon />} >Update Profile
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

export default EditSelf