import { render, screen } from "@testing-library/react";
import ProductListing from "../components/ProductListing";
import { BrowserRouter as Router } from "react-router-dom";
import { Products } from "../api";

describe("ProductListing component", () => {
  test("renders ProductListing component correctly", () => {
    render(
      <Router>
        <ProductListing />
      </Router>
    );

    expect(screen.getByText("WeBay")).toBeInTheDocument();

    Products.forEach((product) => {
      const productName = screen.getByText(product.name);
      expect(productName).toBeInTheDocument();
    });

    const specificProduct = Products[0];
    expect(screen.getByText(specificProduct.name)).toBeInTheDocument();
    expect(
      screen.getByText(`Price: $${specificProduct.price}`)
    ).toBeInTheDocument();

    Products.forEach((product) => {
      const productLink = screen.getByRole("link", { name: product.name });
      expect(productLink).toHaveAttribute("href", `/product/${product.id}`);
    });
  });
});
