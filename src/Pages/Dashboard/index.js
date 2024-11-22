import React, { useEffect } from 'react'
import "./dashboard.css"

export default function Dashboard() {
    useEffect(()=>{
        console.log("Hello")
    })

  return (
    <div className='dashboard'>
      Hello dashboard
      
    </div>
  )
}
