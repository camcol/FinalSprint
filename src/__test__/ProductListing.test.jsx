import { render, screen } from "@testing-library/react";
import ProductListing from "../components/ProductListing";
import { BrowserRouter as Router } from "react-router-dom";
import { Products } from "../api"; // Import the products array

describe("Listing testing", () => {
  test("1. renders document correctly", async () => {
    render(
      <Router>
        <ProductListing />
      </Router>
    );
    // Check if the product names are rendered
    expect(screen.getByText("T-Shirt")).toBeInTheDocument();
    expect(screen.getByText("MacBook Air M2")).toBeInTheDocument();
    expect(screen.getByText("Stanely Mug")).toBeInTheDocument();
    expect(screen.getByText("Stand Mixer")).toBeInTheDocument();
    expect(screen.getByText("Hiking Boots")).toBeInTheDocument();
    expect(screen.getByText("Rubik's Cube")).toBeInTheDocument();

    //  Check if all images are present and have specific attributes
    const images = [
      { alt: "T-Shirt Image", src: "1.jpeg" },
      { alt: "MacBook Air M2 Image", src: "2.jpeg" },
      { alt: "Stanley Mug Image", src: "3.jpg" },
      { alt: "Stand Mixer Image", src: "4.jpg" },
      { alt: "Hiking Boots Image", src: "5.jpg" },
      { alt: "Rubik's Cube Image", src: "6.jpg" },
    ];

    images.forEach((image) => {
      const imgElement = screen.getByAltText(image.alt);
      expect(imgElement).toBeInTheDocument();
      expect(imgElement).toHaveAttribute("src", image.src);
    });

    // Check if the product prices are rendered correctly
    expect(screen.getByText("$39.99")).toBeInTheDocument();
    expect(screen.getByText("$1499.99")).toBeInTheDocument();
    expect(screen.getByText("$49")).toBeInTheDocument();
    expect(screen.getByText("$259")).toBeInTheDocument();
    expect(screen.getByText("$103.98")).toBeInTheDocument();
    expect(screen.getByText("$12.99")).toBeInTheDocument();
  });
});
