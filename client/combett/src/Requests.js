import React from 'react'
// import { useNavigate } from "react-router-dom";

import axios from "./axios"
async function getallusers() {
  const bearer = process.env.bearer;
  var config = {
    // data : data,
    method: 'get',
    url: '/userall',
    headers: {
      'Authorization': 'Bearer' + bearer,
      'Content-Type': 'text/plain'
    },

  };

  return axios(config)
    .then(function (response) {
      const x = JSON.stringify(response.data);
      console.log(response.data);
      return x;


    })
    .catch(function (error) {
      console.log(error);
    });


}






async function getuserdetails(email) {
  // console.log(email);
  // const navigate=useNavigate();
  const bearer = process.env.bearer;
  var config = {
    // data : data,
    method: 'get',
    url: '/useremail/' + email,
    headers: {
      'Authorization': 'Bearer' + bearer,
      'Content-Type': 'text/plain'
    },

  };

  return axios(config)
    .then(function (response) {
      const x = JSON.stringify(response.data);
      console.log(response.data);
      return x;


    })
    .catch(function (error) {
      console.log(error);
    });


}
async function blogdetailid(id) {
  // console.log(email);
  // const navigate=useNavigate();
  const bearer = process.env.bearer;
  var config = {
    // data : data,
    method: 'get',
    url: '/experienceid/' + id,
    headers: {
      'Authorization': 'Bearer' + bearer,
      'Content-Type': 'text/plain'
    },

  };

  return axios(config)
    .then(function (response) {
      const x = JSON.stringify(response.data);
      console.log(response.data);
      return x;


    })
    .catch(function (error) {
      console.log(error);
    });


}


async function getallexperience() {
  const bearer = process.env.bearer;
  var config = {

    method: 'get',
    url: '/experienceall',
    headers: {
      'Authorization': 'Bearer' + bearer,
      'Content-Type': 'text/plain'
    },

  };

  return axios(config)
    .then(function (response) {
      const x = JSON.stringify(response.data);
      console.log(response.data);
      return x;


    })
    .catch(function (error) {
      console.log(error);
    });


}

export {getallusers,blogdetailid, getuserdetails,getallexperience };
// export default 