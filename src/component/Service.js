import React from "react";
import { BsTruck } from "react-icons/bs";
import { RiSecurePaymentLine } from "react-icons/ri";
function Service() {
  return (
    <div className="container">
      <div className="row mt-5 justify-content-center">
        {/* card1 */}
        <div className="col-md-3">
          <div
            className="card text-dark bg-light mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-body ">
              <div
                className="rounded-circle bg-white d-flex justify-content-center align-items-center"
                style={{ margin: "0 auto", height: "60px", width: "60px" }}
              >
                <BsTruck className="fs-2" />
              </div>

              <p>Super Fast and Free delivery</p>
            </div>
          </div>
        </div>
        {/* card2 */}
        <div className="col-md-3">
          <div className="card text-dark bg-light mb-3">
            <p>
              <span>
                <RiSecurePaymentLine className="fs-2" />
              </span>
              Super Secure Payment System
            </p>
          </div>
          <div className="card text-dark bg-light mb-3">
            <p>
              <span>
                <RiSecurePaymentLine className="fs-2" />
              </span>
              Super Secure Payment System
            </p>
          </div>
        </div>

        {/* card3 */}
        <div className="col-md-3">
          <div
            className="card text-dark bg-light mb-3"
            style={{ maxWidth: "18rem" }}
          >
            <div className="card-body ">
              <div
                className="rounded-circle bg-white d-flex justify-content-center align-items-center"
                style={{ margin: "0 auto", height: "60px", width: "60px" }}
              >
                <RiSecurePaymentLine className="fs-2" />
              </div>

              <p>Super Secure Payment System</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
