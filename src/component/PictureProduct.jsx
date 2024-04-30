import React, { useState } from 'react'

function PictureProduct({img=[{url:" "}]}) {
  let [data,setData]=useState(img[0])
  console.log(img)
  return (
     <div className="row justify-content-evenly">
      <div className="col-md-6">
        {img.map((data)=>{
         return <img src={data.url} key={data.id} alt={data.id}  className="img-fluid" style={{margin:"5px"}}
          onClick={()=>{setData(data)}}
         />
        })}
      </div>
      <div  className="col-md-6 d-flex justify-content-center align-items-center">
      <img src={data.url}   alt={data.id}  className="img-fluid"/>
      </div>
     </div>
  )
}

export default PictureProduct