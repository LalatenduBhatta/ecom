import React from 'react'
import logo1 from '../image/icons8-amazon-alexa-logo-80.png';
import logo2 from '../image/icons8-disney-logo-48.png';
import logo3 from '../image/icons8-huawei-logo-32.png'
import logo4 from '../image/icons8-mastercard-logo-48.png'
import logo5 from '../image/icons8-old-vmware-logo-50.png'
import logo6 from '../image/icons8-oracle-logo-50.png'

function Truseted() {
  return (
    <div className='bg-light p-5'>
        <div>
            <p className='text-center'>Trusted By 1000+ Companies</p>
        </div>
        <div className='d-flex align-items-center justify-content-evenly'> 
        <span><img src={logo1} alt={logo1}/></span>  
         <span><img src={logo2} alt={logo2}/></span>  
         <span><img src={logo3} alt={logo3}/></span>  
         <span><img src={logo4} alt={logo4}/></span>  
         <span><img src={logo5} alt={logo5}/></span>  
         <span><img src={logo6} alt={logo6}/></span>  
        </div>
         
    </div>
  )
}

export default Truseted