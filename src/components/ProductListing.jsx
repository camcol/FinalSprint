import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { Products } from "../api";
import { Product } from "./Product.jsx";

const ProductListing = () => {
  return (
    <div id="shop">
      <div className="shopTitle">
        <h1>WeBay</h1>
        <p>
          Your One-Stop Shop for Quality and Convenience – Unbox Joy, Discover
          Choice, Shop with Ease!
        </p>
      </div>
      <div className="products">
        {Products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <Product data={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
