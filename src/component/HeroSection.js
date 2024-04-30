import React from "react";

import Button from "./CommonTemplate/Button";
import myimage from "../image/hero.jpg";

function HeroSection({ name }) {
  return (
    <div className="container">
      <div className="row justify-content-center gx-5 mt-5 ">
        <div className="col-md-4">
          <p>WELCOME TO</p>
          <h2>{name ? name : "ELECTRO KART"}</h2>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
          </p>
          <Button btnName="SHOW NOW" />
        </div>
        <div className="col-md-4">
          <figure>
            <img src={myimage} className="img-fluid" alt="herosectionimage" />
          </figure>
        </div>
      </div>

    </div>
  );
}

export default HeroSection;
