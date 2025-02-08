import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {

        let navigate=useNavigate();

        useEffect(()=>{
            setTimeout(()=>{
            navigate('/home')
            },5000)
            
        })
  return (
    <>
      <h3>Error</h3>
      <img src='Notfound.png' style={{width:'600px', height:'400px'}} />
    </>
  )
}

export default NotFound;
