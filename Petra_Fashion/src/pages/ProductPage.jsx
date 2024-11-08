import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { EcomContext } from '../context/EcomContext';

const ProductPage = () => {
    const [data, setData] = useState([]);
    const { sectionName } = useParams();

    const { products } = useContext(EcomContext);
    // Fetch product data from the API
    useEffect(() => {
        const filteredData = products.filter(item => item.section === `${sectionName}`);

        setData(filteredData);

    }, [products]);
    // console.log("Section Name", sectionName);
    if (!data.length) {
        return <div></div>;
    }


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 capitalize">{sectionName} Products</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {data.map(product => (
                    <Link to={`/${sectionName}/${product._id}`} key={product._id}>
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
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProductPage;
