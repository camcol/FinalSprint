import product1 from "./images/1.jpeg";
import product2 from "./images/2.jpeg";
import product3 from "./images/3.jpg";
import product4 from "./images/4.jpg";
import product5 from "./images/5.jpg";
import product6 from "./images/6.jpg";

export const Products = [
  {
    id: 1,
    name: "T-Shirt",
    description:
      "Elevate your casual wardrobe with our comfortable and stylish cotton T-shirt, featuring a classic design and a perfect fit for everyday wear.",
    price: 39.99,
    productImage: product1,
    altText: "T-Shirt Image",
  },
  {
    id: 2,
    name: "MacBook Air M2",
    description:
      "Discover the ultra-thin and lightweight MacBook Air, a versatile and powerful laptop featuring a brilliant Retina display, all-day battery life, and the latest Apple technology.",
    price: 1499.99,
    productImage: product2,
    altText: "MacBook Air M2 Image",
  },
  {
    id: 3,
    name: "Stanely Mug",
    description:
      "Whichever way your day flows, the H2.0 FlowState tumbler keeps you refreshed with fewer refills. Double wall vacuum insulation means drinks stay cold, iced or hot for hours.",
    price: 49.0,
    productImage: product3,
    altText: "Stanley Mug Image",
  },
  {
    id: 4,
    name: "Stand Mixer",
    description:
      "The Power and Durability to Take It All On. Durable and built-to-last metal construction, with 59 touchpoints around the mixer bowl for great mixing results.",
    price: 259.0,
    productImage: product4,
    altText: "Stand Mixer Image",
  },
  {
    id: 5,
    name: "Hiking Boots",
    description:
      " This Hiking Boot features a seam-sealed construction, combined with our TECHLITE lightweight midsole, for long-lasting comfort with superior cushioning and high energy return.",
    price: 103.98,
    productImage: product5,
    altText: "Hiking Boots Image",
  },
  {
    id: 6,
    name: "Rubik's Cube",
    description:
      "A combination of math, art, & science- the iconic Rubik’s Cube is here to challenge your mind. The 3x3 Cube is the world’s best-known puzzle and has fascinated fans since its 1980 launch.",
    price: 12.99,
    productImage: product6,
    altText: "Rubik's Cube Image",
  },
];

export const getProducts = () => {
  return Products;
};

export const GetProductById = (productId) => {
  return Products.find((product) => product.id === productId);
};
