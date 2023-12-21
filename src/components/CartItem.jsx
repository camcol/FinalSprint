import React, { useContext } from "react";
import { ShopContext } from "../context/shoppingCartContext";

export const CartItem = (props) => {
  const { id, name, price, productImage, altText } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);
  return (
    <div className="cartItem">
      ,<img src={productImage} alt={altText} />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p id="productPrice">${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
