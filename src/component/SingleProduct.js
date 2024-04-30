import React, { useEffect } from "react";
import { useProductData } from "../context/product";
import { useParams } from "react-router-dom";
import PictureProduct from "./PictureProduct";
import { CiDeliveryTruck } from "react-icons/ci";
import { GiRecycle } from "react-icons/gi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import TabNavBar from "./TabNavBar";
import AddToCart from "./AddToCart";
import Loding from "./CommonTemplate/Loding";

function SingleProduct() {
  let { id: alias } = useParams();
  let body={
    display: "flex",
    flexDirection: "column",
    alignItems:"center",
    flexGrow:"1"
    
  }

  let url = "https://api.pujakaitem.com/api/products";
  let { singleProductFetch, singleProduct, isSingleLoading } = useProductData();
  let {
    category,
    color,
    company,
    description,
    id,
    image,
    name,
    price,
    reviews,
    stars,
    stock,
  } = singleProduct;
  console.log('single product',singleProduct)


  useEffect(() => {
    singleProductFetch(`${url}?id=${alias}`);
  }, []);

  if (isSingleLoading) {
    return  <Loding/>
  }
  return (
    <>
    <TabNavBar company={company}/>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <PictureProduct img={image} />
        </div>
        <div className="col-md-5">
          <h1>{name}</h1>
          <p>{stars}</p>
          <p>
            MRP:
            <span>
              <del>{price * 5}</del>
            </span>
          </p>
          <p className="text-primary">deal of the day:{price}</p>
          <p>{description}</p>
          <div className="d-flex justify-content-center flex-grow-1">
            <div style={body}>
              <CiDeliveryTruck style={{fontSize:"35px"}} />
              <p>Free Delivery</p>
            </div>
            <div style={body}>
              <GiRecycle  style={{fontSize:"35px"}}/>
              <p>20 Days Replacement</p>
            </div>
            <div style={body}>
              <CiDeliveryTruck style={{fontSize:"35px"}} />
              <p>Utsav Delievery</p>
            </div>
            <div style={body}>
              <VscWorkspaceTrusted style={{fontSize:"35px" }} />
              <p>2 Year Warranty</p>
            </div>

          </div>
          <hr/>
          <p>Available:<b>In Stock</b></p>
          <p>ID:<b>{id}</b></p>
          <p>BRAND:<b>{company}</b></p>
          <hr/>
          {stock>0&&<AddToCart product={singleProduct}/>}
        </div>

      </div>
    </div>
    </>
  );
}

export default SingleProduct;
