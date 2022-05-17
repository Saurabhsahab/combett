import React, { useEffect, useState } from 'react'
import "./Blog.css"
// import Navigation
import { Navigate, useNavigate } from 'react-router-dom';
import { getallexperience, deleteexp } from "./Requests.js";
import Loader from './Loader';
import { Button, Chip } from '@mui/material';
import Delete from '@mui/icons-material/Delete';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
function Blogs({ data, admin }) {
    console.log(data)
    console.log(admin)
    const Navigate = useNavigate();
    const [date, setdate] = useState("")
    const d = (mydate) => {
        var dateObj = new Date(mydate);
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();

        return (year + "/" + month + "/" + day);
    }
   

    const [blogdata, setdata] = useState([])
    const x =
        data.map((e, ind) => {
            const { _id, title, description, created_at, c_name, s_id } = e;


            return (
           
                    <div className='blog short'>

                        <div className='cmpny'>
                            {c_name}
                        </div>
                        <span className='title'>
                            {title}
                        </span>




                        <div className='des'>
                            {removeTags(description)}
                        </div>
                        <Chip style={{ position: 'relative' }} label={d(created_at)} />
                        <Button fullWidth sx={{ m: 1 }} onClick={() => {

                            console.log(_id)
                            nav("/blogs/" + _id);
                        }} variant="contained" color="success" endIcon={<ArrowCircleRightIcon />}>Read More</Button>
                        {admin == s_id ? <Button onClick={() => {
                            const res = deleteexp(_id);
                          


                        }} endIcon={<Delete />} fullWidth variant="contained" e>Delete</Button> : ""}

                    </div>
            



            )
        })
    const nav = useNavigate();

    useEffect(() => {

    }, [])

    function removeTags(str) {
        if ((str === null) || (str === ''))
            return false;
        else
            str = str.toString();

        return str.replace(/(<([^>]+)>)/ig, '');
    }




    return (
        <>
            <div className='blog-cont'>


                {data ? x : <Loader />
                }

            </div></>
    )
}

export default Blogs
