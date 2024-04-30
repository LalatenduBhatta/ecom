import React from "react";
import Button from "./CommonTemplate/Button";

 

function Contact() {
  
  return (
    <div className="container mb-5">
      <div className="header">
        <h2 className="m-3 text-center">Feel Free To Contact Us</h2>
      </div>
      <div className="map">
        <iframe title="map intrigation"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2588458604637!2d77.69820641482185!3d12.95528159086657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13afc62813f9%3A0xdcf1837520b28dfa!2sJSpiders%20Marathahalli!5e0!3m2!1sen!2sin!4v1685278222603!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div
        className="contact_form d-flex justify-content-center  "
        style={{ width: "100%" }}
      >
        <div className="d-flex flex-column     " style={{ width: "600px" }}>
          <form action="https://formspree.io/f/xeqwwvrb" method="POST">
            <div>
              {" "}
              <input
                type="text"
                placeholder="USERNAME"
                className="form-control mb-2 mt-3"
                name="userName"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="EMAIL"
                className="form-control mb-2"
                name="email"
              />
            </div>
            <div>
              {" "}
              <textarea
                rows="4"
                cols="4"
                className="form-control mb-2"
                name="message"
              ></textarea>
            </div>
            <div>
              {" "}
              <Button btnName="SEND" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
