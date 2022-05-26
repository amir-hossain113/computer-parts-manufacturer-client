import React from 'react';
import { Link } from 'react-router-dom';

const ManageProduct = ({product}) => {
    const { _id, name, description, price, minimumQuantity, availableQuantity, img } =
    product;

    return (
        <div class="card w-96 h-full border-double border-4 border-orange-300 shadow-xl bg-sky-50">
        <figure class="px-4 pt-4">
            <img
            src={img}
            alt=""
            class="rounded-xl"
            />
        </figure>
        <div class="card-body items-start text-center">
            <h2 class="card-title text-rose-700">{name}</h2>
            <p className="text-justify">{description}</p>
            <p><b className='text-lime-600'>Price: </b>${price} (per unit)</p>
            <p><b className='text-cyan-700'>Minimum Order Qty: </b>{minimumQuantity}</p>
            <p><b className='text-cyan-700'>Available Qty: </b>{availableQuantity}</p>
            <div class="card-actions">
                <Link to={`/product/${_id}`} class="btn btn-accent">Purchase</Link>
            </div>
        </div>
      </div>
    );
};

export default ManageProduct;