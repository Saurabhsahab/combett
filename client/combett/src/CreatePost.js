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

    return (
        <div className='home-cont'>
           <Drawer />
           <div className='cont'>
      
               Create New Post
               <span>Topic Title
                   </span>

          <TextField variant='filled'  inputProps={{style: {fontSize: 40,paddingTop:0}}}/>
         <div style={{margin:'10px 0px'}}>
        
         <Editor
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue=" "
        init={{
          height: 500,
          
          menubar: false,
          fontsize_formats:"8px 9pt 10pt 11pt 12pt 14pt 18pt 24pt 30pt 36pt 48pt 60pt 72pt 96pt",

          file_browser_callback: function(field_name, url, type, win) {
            win.document.getElementById(field_name).value = 'my browser value';},
          selector: 'textarea#file-picker',  // change this value according to your HTML
            image_title:true,
          plugins:  'image',
          automatic_uploads:true,
          file_picker_callback: (cb, value, meta) => {
            const input = document.createElement('input');
            input.setAttribute('type', 'file');
            input.setAttribute('accept', 'image/*');
            input.addEventListener('change', (e) => {
              const file = e.target.files[0];
        
              const reader = new FileReader();
              
              reader.addEventListener('load', () => {
                /*
                  Note: Now we need to register the blob in TinyMCEs image blob
                  registry. In the next release this part hopefully won't be
                  necessary, as we are looking to handle it internally.
                */
                const id = 'blobid' + (new Date()).getTime();
              const blobCache=this.editorUpload.blobCache
                const base64 = reader.result.split(',')[1];
                const blobInfo = blobCache.create(id, file, base64);
                blobCache.add(blobInfo);
        
                /* call the callback and populate the Title field with the file name */
                // cb(blobInfo.blobUri(), { title: file.name });
              });
              reader.readAsDataURL(file);
            });
        
            input.click();
          },
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
