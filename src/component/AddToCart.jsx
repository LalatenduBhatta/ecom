import React, { useState } from "react";
import "./AddToCart.css";
import { FaCheck } from "react-icons/fa";
import ToggleAddCart from "./ToggleAddCart";
import { NavLink } from "react-router-dom";
import Button from "./CommonTemplate/Button";
import { useCart } from "../context/cartContext";

function AddToCart({ product }) {
     let {addToCart} =useCart()
  const { id, colors, stock } = product;
  //for active
  let [color, setColor] = useState(colors[0]);
  let [cartCount,setCartCount]=useState(1)
  function incToggler()
  {
    cartCount<stock?setCartCount(cartCount+1):setCartCount(stock)
  }
  function decToggler()
  {
    cartCount>1?setCartCount(cartCount-1):setCartCount(1)
  }
  return (
    <div>
      <p>
        colors:
        {colors.map((data, i) => {
          return (
            <button
              style={{ backgroundColor: data, margin: "8px", opacity: 0.5 }}
              className={
                color === data ? "add_cart_btn btn_active" : "add_cart_btn"
              }
              key={i}
              onClick={() => {
                setColor(data);
              }}
            >
              {color === data ? <FaCheck className="btn_check" /> : null}
            </button>
          );
        })}
      </p>
      {stock && <ToggleAddCart incToggler={incToggler} decToggler={decToggler} cartCount={cartCount}/>}
      <div>
         <NavLink to='/cart'  onClick={()=>{
          addToCart(id,color,cartCount,product)
         }} > <Button    btnName="ADD TO CART"/></NavLink>
        </div>
      
    </div>
  );
}

export default AddToCart;
