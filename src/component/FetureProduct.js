import React from "react";
import { useProductData } from "../context/product";
import Products from "./Products";
import Loding from "./CommonTemplate/Loding";

function FetureProduct() {
  let {loading,fetured_Data} = useProductData();
 
  
  if (loading) {
    return  <Loding/>
  }
  return (
    <>
      <div className="container-fluid bg-light p-5" >
      <p className="text-primary">CHECK NOW</p>
          <h4>Our Feature Services</h4>
        <div className="row justify-content-evenly">
             { fetured_Data? fetured_Data.map((data)=>{
                return  <Products product={data} key={data.id}/>
              }):null}
        </div>
      </div>
    </>
  );
}

export default FetureProduct;
