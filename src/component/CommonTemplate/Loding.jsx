import React from 'react'

import {RotatingLines } from  'react-loader-spinner'

function Loding() {
  return (
    <div className='d-flex justify-content-center'>
    <RotatingLines
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/>
</div>
  )
}

export default Loding