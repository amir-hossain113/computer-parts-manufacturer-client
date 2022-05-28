import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, description, price, minimumQuantity, availableQuantity, img } =
    product;

  return (
      <div className="card w-96 h-full border-double border-4 border-orange-300 shadow-xl bg-sky-50">
        <figure className="px-4 pt-4">
            <img
            src={img}
            alt=""
            className="rounded-xl"
            />
        </figure>
        <div className="card-body items-start text-center">
            <h2 className="card-title text-rose-700">{name}</h2>
            <p className="text-justify">{description}</p>
            <p><b className="text-lime-600">Price: </b>${price} (per unit)</p>
            <p><b className="text-cyan-700">Minimum Order Qty: </b>{minimumQuantity}</p>
            <p><b className="text-cyan-700">Available Qty: </b>{availableQuantity}</p>
            <div className="card-actions">
                <Link to={`/product/${_id}`} className="btn btn-accent">Purchase</Link>
            </div>
        </div>
      </div>
  );
};

export default Product;
