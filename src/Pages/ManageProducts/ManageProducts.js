import React from 'react';
import useProducts from '../../hooks/useProducts';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
    const [products] = useProducts();

    return (
        <div>
            <h2 className="text-4xl text-center text-info mt-10">All Parts</h2>
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-10 ml-14 mt-5 mb-5'>
                {
                    products.map(product => <ManageProduct key={product._id} product={product}></ManageProduct>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;