import React from 'react'
import axios from "./axios"
async function getallusers() {
const bearer=process.env.bearer;
        var config = {
          // data : data,
          method: 'get',
          url: '/userall',
          headers: { 
            'Authorization': 'Bearer'+bearer, 
            'Content-Type': 'text/plain'
          },
        
        };

      return  axios(config)
        .then(function (response) {
            const x=JSON.stringify(response.data);
          console.log(response.data);
          return x;
         

        })
        .catch(function (error) {
          console.log(error);
        });
        
          
        }






        async function getuserdetails(email) {
          // console.log(email);
          const bearer=process.env.bearer;
                  var config = {
                    // data : data,
                    method: 'get',
                    url: '/useremail/'+email.email,
                    headers: { 
                      'Authorization': 'Bearer'+bearer, 
                      'Content-Type': 'text/plain'
                    },
                  
                  };
          
                return  axios(config)
                  .then(function (response) {
                      const x=JSON.stringify(response.data);
                    console.log(response.data);
                    return x;
                   
          
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
                  
                    
                  }

                  export {getuserdetails};
                  export default getallusers