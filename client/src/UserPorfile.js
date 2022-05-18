// import { Drawer } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Drawer from './Drawer';
import { useParams } from 'react-router-dom'
import "./user.css"
import { getuserdetailsbyid, blogdetailbysid } from "./Requests"
import { Avatar, IconButton, Tooltip } from '@mui/material';
import Blogs from './Blogs';
import Loader from './Loader';
import RateReviewIcon from '@mui/icons-material/RateReview';
function UserPorfile() {
    const x = useParams();


    var CryptoJS = require("crypto-js");
    const v = localStorage.getItem('user');
    var decrypted = CryptoJS.AES.decrypt(v, "somekey");
    var ans = JSON.parse(CryptoJS.enc.Utf8.stringify(decrypted));
  
    const {
       familyName
      , givenName
      , googleId
      , imageUrl } = ans;
const   mail=ans.email;
    const [data, setdata] = useState("")
    const { fname, lname, about, email, gh_link, pf_img, present_company, batch, _sid } = data;

    // var {}=data;
    const [admin, setadmin] = useState(false)
    async function getuser() {
        const res = await getuserdetailsbyid(x.id);

        if (res == 500 || res == 404) {
            setdata(false);
        }
        const cnd = JSON.parse(res);
        setdata(cnd[0]);
        if(mail==email)
        {
            setadmin(true);
        }
        getexpbyuser(cnd[0].email);
        console.log(cnd[0])

    }
    const [blogdata, setblogdata] = useState(false)

    async function getexpbyuser(mail) {
        const res = await blogdetailbysid(mail);
        console.log(JSON.parse(res))
        setblogdata(JSON.parse(res));
      
    }
    useEffect(() => {

        getuser();

        document.title = 'User';

    }, [])



    return (
        <div>
            <Drawer />

            <div className='Blog-cont'>
            {email==mail?<Tooltip title="Edit Details" > 
                                <IconButton href="/editself"aria-label="Edit" text>
                           
                                    <RateReviewIcon />
                                   
                                </IconButton>
                            
                            </Tooltip>:""}
       
                <div className='uprofile'>
     
                    <div className='dets'>

                        <Avatar sx={{ height: '70px', width: '70px' }} src={pf_img} />

                        <div className='det'>
                            <span id="name" >
                                {fname} {lname}   @ {batch}<br />

                            </span>


                            <span>
                                <a target="_blank" href="mailto: abc@example.com"> {email} </a> <br />
                            </span>
                            <span id="batch">
                                {present_company == 'NAN' ? "Still a student" : ("Working @ " + present_company)}
                                <br />
                                <IconButton aria-label="Edit" href={gh_link} target="_blank">
                                    <img width={20} src="/gh_logo.svg" />
                                </IconButton>

                            </span>
                            
                        </div>
                    </div>
                    <span id="line">

                    </span>

                    <div className='abt'>
                        <span style={{ fontWeight: '800' }}>
                            About Me<br />
                        </span>

                        <span style={{ opacity: '0.6' }}>
                            {about}
                        </span>

                    </div>

                </div>

                <div>
                    {blogdata == "" ? "User has not shared any experience" : " All blogs by the user"}
                </div>
                {blogdata  ? <Blogs data={blogdata} admin={mail} />  : <Loader />}
            </div>
        </div>
    )
}

export default UserPorfile
