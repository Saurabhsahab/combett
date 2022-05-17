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
import {blogdetailid} from "./Requests"
import zIndex from '@mui/material/styles/zIndex';
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
  const x = useParams().id;
  const [data, setdata] = useState("");
const {title,description,c_name}=data;
const [datatitle, setdatatitle] = useState("");
const [datac_name, setdatac_name] = useState("")
  async function getblog() {
    const res = await blogdetailid(x);
    const p = JSON.parse(res);
    setdata(p[0]);
    setdatac_name(p[0].c_name);
    setdatatitle(p[0].title);

    


  }


  useEffect(() => {
    window.scrollTo(0, 0);
    console.log(x)
    getblog();

  }, [])

const navigate=useNavigate();







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
const updateexp = async (data) => {
  console.log(data);
  var config = {
  data:data,
    method: 'patch',
    url: '/experienceid/'+x,
    headers: {
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQzMzY3NTU0LCJpYXQiOjE2NDI5MzU1NTQsImp0aSI6IjNlMGYzZTUwMzQ4ZTRkZGVhZjdiNDQ1YTNiOWRmZjM3IiwidXNlcl9pZCI6MSwidXNlcl9uYW1lIjoiU3VkaGFuc2h1IFJhbmphbiJ9.7REJ99i_2WiC-yXEnFeEWsRa-y-44bhoFXZ2GynMT5c',
      'Content-Type': 'application/json'
    },

  };

  // 
  axios(config)
    .then(function (response) {
      console.log(response.status)
      console.log(JSON.stringify(response.data));
    }).then((response)=>{
      navigate("/blogs")
if(response.status==200)
{
  setsnackbaropen(true);

}
    })
    .catch(function (error) {
      console.log(error);
    });


}

    return (
        <div className='home-cont'>
           <Drawer />
           <div className='cont'>
      
               <span style={{fontSize:"1.3rem",fontWeight:'700'}}>
             Publish Experiences
               </span>
         
               <form className='cpform' ref={form} onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(form.current)
              var object = {};
              data.forEach((value, key) => object[key] = value);
              object['description']=content;
             
              updateexp(object);

              var json = JSON.stringify(object);
              
              // createexp(object);


              console.log(json)

                // var json = JSON.stringify(object);


                ;
            }}>

<div>

<TextField key={title}  onChange={(event) => setdatatitle(event.target.value)} value={datatitle} fullWidth margin='dense' name='title' label="Title for the Experience" />
          <br/>
          <TextField  onChange={(event) => setdatac_name(event.target.value)}  value={datac_name} fullWidth margin='dense' name='c_name' label="Company Name" />

      
         
</div>
         <div style={{margin:'10px 0px'}}>
        
         <Editor
        onInit={(evt, editor) => editorRef.current = editor}
      
      name="des" initialValue={description}
      onChange={handlechanege}
        init={{
          height: 380,
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

export default EditPost
