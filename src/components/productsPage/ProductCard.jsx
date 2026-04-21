import React from "react";

const ProductCard = ({ product }) => {
  const { name, price, description } = product;

  return (
    <div className="card bg-base-100 card-md shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>

        <span className="text-lg font-bold">${price}</span>

        <p>{description}</p>

        <div className="justify-end card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
