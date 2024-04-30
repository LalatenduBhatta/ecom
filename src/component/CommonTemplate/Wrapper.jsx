import React from 'react'
import './Wrapper.css'

function Wrapper({children}) {
  return (
    <div className='wrapper_container'>
        {children}

    </div>
  )
}

export default Wrapper