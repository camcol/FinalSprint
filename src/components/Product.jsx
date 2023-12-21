import React, { useContext } from "react";
import { Products } from "../api";
import { ShopContext } from "../context/shoppingCartContext";

export const Product = (props) => {
  const { id, name, description, price, productImage, altText } = props.data;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="product">
      <img src={productImage} alt={altText} />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p id="productPrice">${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add to Cart
      </button>
    </div>
  );
};
