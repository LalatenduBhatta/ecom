import React from "react";
import { useCart } from "../context/cartContext";
import CartList from "./CartList";
import { NavLink } from "react-router-dom";

function Cart() {
  let { cart,clearAllCart, total_amount,shipping_fee } = useCart();
  console.log("hii i am cart component", cart);
  return (
    <div className="container mt-3 ">
      <div className="row d-flex justify-content-center">
        {/* //col */}
        <div className="col-2">
          <p>ITEM</p>
        </div>
        {/* //col */}
        <div className="col-2">
          <p>PRICE</p>
        </div>
        {/* //col */}
        <div className="col-2">
          <p>QUANTITY</p>
        </div>
        {/* //col */}
        <div className="col-2">
          <p>SUBTOTAL</p>
        </div>
        {/* //col */}
        <div className="col-2">
          <p>REMOVE</p>
        </div>
        <hr />
      </div>
      {cart.length === 0 && <h1>no data in cart</h1>}
      {cart.map((data) => {
        return <CartList {...data} />;
      })}

      <div className="row p-2 m-3">
        <div className="col   d-flex  justify-content-between">
          <NavLink to="/products">
            <button className="btn btn-primary">CONTINUE SHOPPING</button>
          </NavLink>

          <div>
            {" "}
            <button className="btn btn-danger" onClick={clearAllCart}>CLEAR CART</button>
          </div>
        </div>
      </div>
      {/* //this is for billing */}
        <div className="row mt-5 flex-row-reverse ">
          <div className="col-3 bg-light p-3 ">
            <p>SUBTOTAL   <b>{total_amount}</b></p>
            <p className="mb-3"> shipping Fee <b>{shipping_fee}</b></p>
            <hr/>
            <p className="m-2">
              Order Total:  {total_amount+shipping_fee}
            </p>
            
          </div>

        </div>
    </div>
  );
}

export default Cart;
