import React, { useEffect } from 'react'
import  "./home.css"
import  "./cp.css"
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useRef } from 'react';
import axios from "./axios"
import { Editor } from '@tinymce/tinymce-react';
import { Alert, Button, Slide, Snackbar } from '@mui/material';
import Drawer from "./Drawer"
import zIndex from '@mui/material/styles/zIndex';
import { useNavigate } from 'react-router-dom';

function CreatePost() {
  var CryptoJS = require('crypto-js');
  var udata = localStorage.getItem('user');


  //derpyed data;
  var CryptoJS = require("crypto-js");
  const v = localStorage.getItem('user');
  var decrypted = CryptoJS.AES.decrypt(v, "somekey");
  var ans = JSON.parse(CryptoJS.enc.Utf8.stringify(decrypted));
  const bearer = process.env.bearer;
const {email
  ,familyName
  ,givenName
  ,googleId
  ,imageUrl}=ans;


const navigate=useNavigate();
  const createexp = async (data) => {
    console.log(data);
    var config = {
    data:data,
      method: 'post',
      url: '/experience',
      headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQzMzY3NTU0LCJpYXQiOjE2NDI5MzU1NTQsImp0aSI6IjNlMGYzZTUwMzQ4ZTRkZGVhZjdiNDQ1YTNiOWRmZjM3IiwidXNlcl9pZCI6MSwidXNlcl9uYW1lIjoiU3VkaGFuc2h1IFJhbmphbiJ9.7REJ99i_2WiC-yXEnFeEWsRa-y-44bhoFXZ2GynMT5c',
        'Content-Type': 'application/json'
      },

    };

    // 
    axios(config)
      .then(function (response) {
        console.log(response.status)
        if(response.status==201)
        {
          setsnackbaropen(true);
          setTimeout(() => {
            navigate("/blogs")
          }, 2000);

        }

        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });


  }







  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

 useEffect(() => {

  document.title="Publish"
 }, [])
//  Alert

  const [content, setcontent] = useState("")
  const handlechanege=(e)=>{
setcontent( e.target.getContent());
  }

const form=useRef(null);
const [snackbaropen, setsnackbaropen] = useState(false)

    return (
        <div className='home-cont'>
           <Drawer />
           <div className='cont'>
      
               Create New Post
         
               <form className='cpform' ref={form} onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(form.current)
              var object = {};
              data.forEach((value, key) => object[key] = value);
              // var temp =this.get('textAreaName').getContent();
              // console.log(temp);
             object['description']=content;
             object['s_id']=email;
             

              var json = JSON.stringify(object);
              // setcuserdata(json);
              // createuser(object);
              createexp(object);


              console.log(json)

                // var json = JSON.stringify(object);


                ;
            }}>

<div>

<TextField fullWidth margin='dense' name='title' label="Title for the Experience" />
          <br/>
          <TextField fullWidth margin='dense' name='c_name' label="Company Name" />
         
</div>
         <div style={{margin:'10px 0px'}}>
        
         <Editor
        onInit={(evt, editor) => editorRef.current = editor}
      
      name="des" initialValue=""
      onChange={handlechanege}
        init={{
          height: 300,
           selector: 'textarea',
           root_name:"des",
          menubar: false,
          fontsize_formats:"8px 9pt 10pt 11pt 12pt 14pt 18pt 24pt 30pt 36pt 48pt 60pt 72pt 96pt",
         
          
          toolbar: 'undo redo | blocks | image |' +
          'bold italic forecolor fontsizeselect| alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px}'
        }
      }
      />
         </div>
      
      <Button id="sb" type='submit' variant='contained' size='large' > Submit</Button>
      </form>
    
      
           </div>
           <Snackbar
             open={snackbaropen}
   anchorOrigin={{horizontal:'center',vertical:"top"}}
            //  TransitionComponent={<Slide direction='up'/>}
             message="Published Successfully"
             autoHideDuration={3000}
             onClose={()=>setsnackbaropen(false)}
            //  key={transition ? transition.name : ''}
            >
           <Alert variant="filled" severity="success">Published Successfully</Alert>

            </Snackbar>
        </div>
    )
}

export default CreatePost
