import React from "react";

function Product(props) {
  const { match } = props;

  return (
    <div className="product">This is product detail: {match.params.slug}</div>
  );
}

export default Product;
