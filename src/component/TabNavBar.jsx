import React from 'react'
import { NavLink } from 'react-router-dom'

function TabNavBar({company}) {
    
  return (
    <div className="p-2 bg-light">
       <NavLink to="/" style={{textDecoration:"none"}}>Home</NavLink>/{company}
    </div>
  )
}

export default TabNavBar