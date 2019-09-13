import React from "react";
import { Route, NavLink } from "react-router-dom";
import Product from "./Product";

function Products(props) {
  const products = [
    {
      id: 1,
      slug: "iphone",
      name: "iPhone 11 Pro Max",
      price: 3000000
    },
    {
      id: 2,
      slug: "samsung",
      name: "SamSung Galaxy Note 10",
      price: 2500000
    },
    {
      id: 3,
      slug: "xiaomi",
      name: "Xiaomi Pro X",
      price: 1800000
    }
  ];

  const { match } = props;
  const url = match.url;

  const result = products.map((product, index) => (
    <NavLink key={index} to={`${url}/${product.slug}`} className="list-group-item">
      {product.id} - {product.name} - {product.price}
    </NavLink>
  ));

  return (
    <div className="container">
      <h1>List of products</h1>
      <div className="row">
        <div className="list-group">{result}</div>
      </div>
      <div className="row">
        <Route path="/products/:slug" component={Product} />
      </div>
    </div>
  );
}

export default Products;
