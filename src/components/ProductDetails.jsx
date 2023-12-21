// ProductDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { GetProductById } from "../api.js";
import "../index.css";

const ProductDetails = () => {
  const { productId } = useParams();
  console.log("productId:", productId);

  const product = GetProductById(parseInt(productId, 10));
  console.log("product:", product);

  return (
    <div>
      <center>
        <h2>Product Details</h2>
      </center>
      <center>
        <Link to="/">
          <button class="backBttn">Back</button>
        </Link>
      </center>
      {product ? (
        <div class="productDetailsBox">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <br></br>
          <img
            src={product.productImage}
            alt={product.name}
            style={{ maxWidth: "300px" }}
          />
          <button className="addToCartBttn">Add to Cart</button>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetails;
