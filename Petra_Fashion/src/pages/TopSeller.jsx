import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CiHeart } from "react-icons/ci";

const TopSeller = () => {
    const [products, setProducts] = useState([]);

    // Fetch product data from the API
    useEffect(() => {
        axios.get('http://localhost:3001/get-products?section=September%20Buzz') // Replace with your API endpoint
            .then(response => {
                setProducts(response.data.products); // Adjust according to your API response structure
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Top Seller Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {products.map(product => (
                    <div key={product._id} className="border rounded-lg overflow-hidden shadow-lg bg-white">
                        <img src={product.imgUrl} alt={product.title} className="w-full h-345 object-cover" />
                        <div className='w-full pt-2'>
                            <div className='flex items-start justify-start w-full'>
                                <div className='flex-row items-start justify-start w-[80%]'>
                                    <h3 className='font-bold text-[12px] text-left mb-1 ml-2'>{product.manufacturerBrand}</h3>
                                    <p className='text-[10px] text-left whitespace-nowrap overflow-hidden truncate mt-1 ml-2'>{product.title}</p>
                                </div>
                                <div className='m-0 w-[20%] text-2xl h-[30px] flex justify-center items-center'>
                                    <CiHeart />
                                </div>
                            </div>
                            <div className='flex gap-[5px] items-center ml-2 mb-3'>
                                <p className='text-[16px] font-bold'>₹
                                    {product.discountedPrice}</p>
                                <p className='text-[12px] line-through text-[#a4a1a1]'>₹
                                    {product.price}</p>
                                <p className='text-[12px] text-[#00B852] font-semibold'>{product.discountPercentage}% OFF</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopSeller;
