import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const productData = {...data, price: Number(data.price), minimumQuantity: Number(data.minimumQuantity), availableQuantity: Number(data.availableQuantity)}
        
        fetch('http://localhost:5000/product', {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => res.json())
        .then(result => {
            if(result){
                toast.success('Your product added successfully');
            }
            else{
              toast.error('Your product failed to add');
            }
        })
    };

    return (
        <div className='px-20 py-10'>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-2 border-2 px-10 py-10 lg:px-20 border-cyan-800" >
                <h2 className='text-2xl text-center mb-3 text-teal-900 mt-2'>Add New Product</h2>
                <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Product Name"
                        class="input input-bordered w-full"
                        {...register("name", {required: true, maxLength: 20})}
                    />
                </div>

                <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text">Description</span>
                    </label>
                    <textarea
                        type="text"
                        placeholder="Product Description"
                        class="input input-bordered w-full"
                        {...register("description")}
                    />
                </div>

                <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text">Price</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Product Price"
                        class="input input-bordered w-full"
                        {...register("price")}
                    />
                </div>

                <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text">Minimum Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Minimum Order Quantity"
                        class="input input-bordered w-full"
                        {...register("minimumQuantity")}
                    />
                </div>

                <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text">Available Quantity</span>
                    </label>
                    <input
                        type="number"
                        placeholder="Available Quantity"
                        class="input input-bordered w-full"
                        {...register("availableQuantity")}
                    />
                </div>

                <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text">Image URL</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Available Quantity"
                        class="input input-bordered w-full"
                        {...register("img")}
                    />
                </div>

                <input
                    className="btn btn-primary w-full mx-w-xs mt-4"
                    type="submit"
                    value="Add Item"
                />

            </form>
        </div>
    );
};

export default AddProduct;