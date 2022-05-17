import React, { useEffect, useState } from 'react'
import "./Blog.css"
// import Navigation
import { useNavigate } from 'react-router-dom';
import { deleteexp } from "./Requests.js";
import Loader from './Loader';
import { Navigate } from 'react-router-dom';
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import { Alert, Snackbar } from '@mui/material';
import { Button, Chip } from '@mui/material';
import Delete from '@mui/icons-material/Delete';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
function Blogs({ data, admin }) {
    const d = (mydate) => {
        var dateObj = new Date(mydate);
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();

        return (year + "/" + month + "/" + day);
    }
    const deleteuser = async () => {
        const res = deleteexp()
    }
    const [snackbaropen, setsnackbaropen] = useState(false)

    const [blogdata, setdata] = useState([])
    const x =
        data.map((e, ind) => {
            const { _id, title, description, created_at, c_name, s_id } = e;

           
            // console.log(admin)
            // console.log(s_id)


            return (

                <div className='blog short'>
                    <Snackbar
                        open={snackbaropen}
                        anchorOrigin={{ horizontal: 'center', vertical: "top" }}

                        message="Published Successfully"
                        autoHideDuration={2000}
                        onClose={() => setsnackbaropen(false)}

                    >
                        <Alert variant="filled" severity="success">Deleted Successfully</Alert>

                    </Snackbar>
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
                    <div className='btns'>
                        {admin == s_id ? <Button onClick={() => {
                            const res = deleteexp(_id);
                            res.then(() => {
                                setsnackbaropen(!snackbaropen);

                            })
                            res.then(
                                setTimeout(() => {
                                    setdata(data.splice(ind, 1))
                                }, 300)
                            )


                        }

                        }

                            endIcon={<Delete />} variant="contained" e>Delete</Button> : ""}
                        
                        { admin == s_id ? <Button onClick={() => {nav("/editpost/" + _id);}} endIcon={<AutoFixNormalIcon />} variant="contained" >Edit Post</Button> : ""}

                    </div>
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
