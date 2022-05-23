import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from './Product';

const Products = () => {
    const [products] = useProducts();

    return (
        <div>
            <h2 className="text-4xl text-center text-info mt-10">Parts</h2>
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-10 ml-14 mt-5 mb-5'>
                {
                    products.slice(0,6).map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </div>
    );
};

export default Products;