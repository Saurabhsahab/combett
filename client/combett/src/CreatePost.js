import React from 'react'
import  "./home.css"
import  "./cp.css"
import {Component, PropTypes} from 'react';
import RichTextEditor from 'react-rte';
// import {Editor, EditorState} from 'draft-js';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
// import TextField from '@mui/material/TextField';
import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
function CreatePost() {

  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
    return (
        <div className='home-cont'>
           <div className='cont'>
               Create New Post
               <span>Topic Title
                   </span>

          <TextField variant='filled'/>
          <Editor
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue=" "
        init={{
          height: 500,
          menubar: true,
          selector: 'textarea',  // change this value according to your HTML
          plugins:  'image',
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
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px}'
        }
      }
      />
      <button onClick={log}>Log editor content</button>
           </div>
          
        </div>
    )
}

export default CreatePost
