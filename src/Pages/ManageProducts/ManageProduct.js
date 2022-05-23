import React from 'react';

const ManageProduct = ({product}) => {
    const { name, description, price, minimumQuantity, availableQuantity, img } =
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
            <h2 class="card-title">{name}</h2>
            <p className="text-justify">{description}</p>
            <p><b>Price: </b>${price}</p>
            <p><b>Minimum Order Qty: </b>{minimumQuantity}</p>
            <p><b>Available Qty: </b>{availableQuantity}</p>
            <div class="card-actions">
                <button class="btn btn-accent">Purchase</button>
            </div>
        </div>
      </div>
    );
};

export default ManageProduct;