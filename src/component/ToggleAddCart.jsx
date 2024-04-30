import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function ToggleAddCart({ incToggler, decToggler, cartCount }) {
  return (
    <div className='d-flex flex-column'>
      <div className='d-flex' >
        <p style={{ marginLeft: "8px" }}> <AiOutlineMinus style={{ fontSize: "22px", cursor: "pointer" }} onClick={() => { decToggler() }} /></p>
        <span style={{ fontSize: "22px", fontWeight: "bolder", margin: "0px 18px" }}>{cartCount}</span>
        <p> <AiOutlinePlus style={{ fontSize: "22px", cursor: "pointer" }} onClick={() => { incToggler() }} /></p>
      </div>

    </div>
  )
}

export default ToggleAddCart