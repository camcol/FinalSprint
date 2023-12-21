import React, { useContext } from "react";
import { Products } from "../api";
import { ShopContext } from "../context/shoppingCartContext";
import { CartItem } from "./CartItem";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../index.css";

function submitbutton() {
  return alert("Payment complete :D");
}

const Cart = () => {
  const { cartItems, getSubtotal } = useContext(ShopContext);
  const navigate = useNavigate();
  const subtotal = getSubtotal();
  const total = subtotal * 0.15 + subtotal;
  const taxes = subtotal * 0.15;

  return (
    <div className="cart">
      <div>
        <h1>Your Cart:</h1>
      </div>
      <div className="cartItems">
        {Products.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      <div className="checkout">
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <button onClick={() => navigate("/")}>Continue Shopping</button>
      </div>
      <div className="checkoutbox">
        <h1>HST: ${taxes.toFixed(2)}</h1>
        <br />
        <h1>Total: ${total.toFixed(2)}</h1>

        <input
          name="message-input"
          type="text"
          placeholder="Enter Card Number"
        ></input>

        <input
          name="message-input"
          type="text"
          placeholder="Enter Address"
        ></input>

        <button type="submit" onClick={submitbutton}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Cart;
