import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
function Navbar() {
const n=useNavigate();
  return (
    <div>
      <button onClick={()=>n("/si")}>
signin
      </button>
      <button onClick={()=>n("/home")}>
Home
      </button>
      <button onClick={()=>n("/cp")}>
Cp
      </button>
      
    </div>
  )
}

export default Navbar
