import React from 'react'
import  "./home.css"
import  "./cp.css"
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useRef } from 'react';
import axios from "./axios"
import { Editor } from '@tinymce/tinymce-react';
import { Button } from '@mui/material';
import Drawer from "./Drawer"
function CreatePost() {

  const postreq=()=>{
    axios({
      method: "post",
      url: "myurl",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        console.log(response);
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  
  
  }
  var bodyFormData = new FormData();
  bodyFormData.append('title', 'Fred');
  bodyFormData.append('data', 'sdfsd'); 
  


  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
 
  // c_name: {
  //   type: String,
  //   required: [true, "Please enter valid company name"],
  // },
  // created_at: { type: Date, default: Date.now },

  // title: {
  //   type: String,
  //   required: true,
  // },

  // description: {
  //   type: String,
  //   required: true,
  // },


    return (
        <div className='home-cont'>
           <Drawer />
           <div className='cont'>
      
               Create New Post
         

          <TextField multiline margin='dense' label="Title for the Experience" />
          <TextField margin='dense' label="Company Name" />
         
         <div style={{margin:'10px 0px'}}>
        
         <Editor
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue=" "
      
        init={{
          height: 500,
          
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
      <Button id="sb" variant='contained' size='large' > Submit</Button>
    
      {/* <button onClick={log} className="sbtn">Publish</button> */}
           </div>
          
        </div>
    )
}

export default CreatePost
