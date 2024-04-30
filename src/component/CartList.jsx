import React from "react";
import ToggleAddCart from "./ToggleAddCart";
import { AiFillDelete } from "react-icons/ai";
import { useCart } from "../context/cartContext";
import { NavLink } from "react-router-dom";
function CartList({ quantity, price, name, image, id, color }) {
  let { delteCartHandler,incToggler,decToggler } = useCart();

  return (
    <>
      <div className="row d-flex justify-content-center">
        <div className="col-2">
          <div className="row">
            <div className="col-6">
              <img src={image} style={{ height: "50px", width: "50px" }} />
            </div>
            <div className="col-6">
              <p>{name}</p>
              <p>
                color:{" "}
                <button
                  style={{
                    borderRadius: "50%",
                    height: "20px",
                    width: "20px",
                    backgroundColor: color,
                  }}
                >
                  {color ? "" : null}
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <p>PRICE:{price}</p>
        </div>
        {/* //col */}
        <div className="col-2">
          <ToggleAddCart
            incToggler={()=>{
              incToggler(id)
            }}
            decToggler={()=>{
              decToggler(id)
            }}
            cartCount={quantity}
          />
        </div>

        <div className="col-2">
          <p>{price * quantity}</p>
        </div>
        {/* //col */}
        <div className="col-2">
          <button
            style={{ backgroundColor: "white", border: "none" }}
            onClick={() => {
              delteCartHandler(id);
            }}
          >
            <AiFillDelete style={{ color: "red", fontSize: "35px" }} />
          </button>
        </div>
        <hr />
      </div>
   
    </>
  );
}

export default CartList;
