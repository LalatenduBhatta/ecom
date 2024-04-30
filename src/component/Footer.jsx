import React from 'react'
import Button from './CommonTemplate/Button'

import { BsInstagram, BsYoutube, BsGithub } from "react-icons/bs";

function Footer() {

    return (
        <div className="container-fluid   d-flex  flex-column  position-relative bottom-0 mt-5 ms-0 me-0" style={{ width: "100%", background: "yellow" }}>
            {/* //1 */}
            <div className="row bg-light d-flex justify-content-between rounded-1 position-absolute  top-0 start-50  translate-middle" style={{ width: "800px" }}>
                <div className="col-3 ms-5">
                    <p>Ready to get started? tailk to us today</p>
                </div>
                <div className="col-2 me-5">
                    <Button btnName="GET STARTED" />
                </div>
            </div>
            {/* //2 */}
            <div className="row p-5 d-flex  flex-grow-1 justify-content-around " style={{ backgroundColor: "blue", color: "white" }}>
                <div className='col-md-2'>
                    <p>ELECTRO KART</p>
                    <p>Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
                <div className='col-md-2 d-flex '>
                    <h6>Subscribe to get important updates</h6>
                    <form>
                        <input type='text' placeholder='YOUR E-MAIL' />
                        <Button btnName="SUBSCRIBE" />
                    </form>
                </div>
                <div className='col-md-2 d-flex flex-column'>
                    <p>Folllow Us</p>

                    <p>  <span className="  m-2"><BsGithub /></span>
                        <span className="  m-2"><BsInstagram /></span>
                        <span className="  m-2"><BsYoutube /></span> </p>

                </div>
                <div className='col-md-2'>
                    <p>Call Us</p>
                    <h5>63500XXXXX</h5>
                </div>
                <hr />
                <div className="row">
                    <div className='col-md-3'>
                        <p>@ {new Date().getFullYear()} utsav jha. All Rights Reserved</p>
                    </div>
                    <div className='col-md-3'>
                        <p>PRIVACY POLICY</p>
                        <p>TERMS & CONDTIONS</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer