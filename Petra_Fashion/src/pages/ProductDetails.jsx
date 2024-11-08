import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaStar } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { PiShoppingBag } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { AiFillHeart } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";

import Accordian from './Accordian';
import { useContext } from 'react';
import { EcomContext } from '../context/EcomContext';
import { toast } from 'react-toastify';



const ProductDetails = () => {
    const { products, getCartItem } = useContext(EcomContext);
    const { productId } = useParams();
    const [product, setProduct] = useState();
    const [delivery, setDelivery] = useState(false);
    // const [availableSizes, setAvailableSizes] = useState([]);
    const [selectedSize, setSelectedSize] = useState('');


    const randomNumber = Math.floor(Math.random() * (100 - 40 + 1)) + 40;

    const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'];

    useEffect(() => {
        const productcopy = products.filter(item => item._id === `${productId}`);
        // console.log("Product hai", productcopy.data)

        setProduct(productcopy[0]);
        // setAvailableSizes(productcopy[0].sizesAvailable);

    }, [products]);
    // console.log(productId);

    if (!product) {
        return <div></div>;
    }

    const setDDelivery = () => {
        setDelivery(!delivery);
        if (delivery === true) {
            toast.success("Hurray! We are now in your area...");
        }
    }



    const handleClick = (size) => {
        if (product.sizesAvailable.includes(size)) {
            setSelectedSize(size);
            // console.log(size);
        }
    };



    if (!product) return <div>Loading...</div>;

    return (
        <div className="mx-w-7xl h-auto md:h-[100vh]  flex justify-center">

            <div className=' w-full md:w-[60%] h-full flex gap-8 justify-center md:flex-row flex-col p-3'>
                <div className='rounded  md:w-[450px] md:h-[562px]'>
                    <img className='w-full h-full rounded-lg' src={product.imgUrl} alt={product.title} />
                </div>

                <div className=' md:w-1/2 h-full overflow-auto scrollbar-hide'>
                    <h3 className='text-lg text-[#4f5362] font-bold'>{product.manufacturerBrand}</h3>
                    <h1 className='text-base text-[#737373] mb-[2px] pt-2'>{product.title}</h1>
                    <div className='items-center border border-black inline-flex mt-3 px-2 py-[2px] text-[14px] gap-1 font-medium'>
                        <FaStar color='#fac704' />
                        {/* <p className=''>{product.ratings.averageRating}</p> */}
                    </div>
                    <div className='mt-3'>
                        <div className='flex gap-1 items-center'>
                            <p className='text-2xl font-semibold'>₹{product.discountedPrice}</p>
                            <p className='text-sm line-through text-[#a4a1a1]'>₹{product.price}</p>
                            <p className='text-base text-[#00B852] font-semibold'>{product.discountPercentage}% OFF</p>
                        </div>
                        <div><p className='text-xs text-[#a4a1a1]'>inclusive of all taxes</p></div>
                    </div>
                    <p className='inline-flex gap-1 px-1 py-[2px] rounded text-sm font-semibold bg-gradient-to-r from-[#bde3fa] to-[white] text-[#216a98] mt-3'><IoMdCart size={20} />{randomNumber} people bought this in the last 7 days
                    </p>
                    <div className='mt-2'>
                        <p className='border border-black inline-flex px-1 py-[2px] text-xs text-[#737373] uppercase font-semibold'> 100% cotton
                        </p>
                    </div>
                    <div className='w-full h-[3px] bg-[#eeeeee] mt-3'>
                    </div>
                    <div className='mt-3'>
                        <div className='flex justify-between'>
                            <p className='text-xs font-bold uppercase'>select size</p>
                            <p className='text-xs capitalize font-bold text-[#55999b]'>size guide</p>
                        </div>
                        <div className='flex items-center gap-4 text-sm w-[80%] mt-3'>
                            {sizes.map((size) => (
                                <div
                                    key={size}
                                    onClick={() => handleClick(size)}
                                    className={`cursor-pointer border border-black w-full py-3 flex justify-center items-center rounded ${product.sizesAvailable.includes(size) ? (selectedSize === size ? "border-blue-600 text-blue-600" : "bg-white") : 'border-gray-400 text-gray-400 cursor-not-allowed'
                                        }`}
                                >
                                    {size}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex justify-between gap-5 mt-8'>
                        <button onClick={() => getCartItem(product._id, selectedSize)} className='uppercase w-1/2 flex justify-center items-center gap-3 py-3 bg-[#ffd84d] font-semibold text-sm rounded active:bg-[#f9e16c]'><PiShoppingBag size={20} />add to bag</button>
                        <button className='uppercase w-1/2 flex justify-center items-center gap-3 py-3  font-semibold text-sm border text-[#93939f] rounded active:text-black active:border-black'><CiHeart size={20} /> wishlist</button>
                    </div>
                    <div className='w-full h-[3px] bg-[#eeeeee] mt-5'>
                    </div>
                    <p className='inline-flex items-center uppercase gap-2 text-xs font-semibold mt-5'><SlLocationPin size={20} /> check for delivery details</p>
                    <p className='text-xs font-semibold mt-3'>Delivering all across <span className='capitalize text-[#3189b5]'>india</span></p>
                    <div className='flex border border-[#d1d1d1] p-2 px-4 rounded mt-2'>
                        <input className='text-xs capitalize outline-none border-none w-full' type="text" placeholder='enter pincode' />
                        <button className='uppercase text-xs text-[#3188b3] font-semibold' onClick={() => setDDelivery()}>check</button>
                    </div>
                    {delivery && (
                        <>
                            <div>
                                <p className='text-sm text-[#00B852] mt-2'>Good news! We deliver to your area.</p>
                            </div>
                        </>
                    )}
                    <div className='mt-5'>
                        <h1 className='text-lg font-semibold'>Key Highlights</h1>
                        <div className='w-full grid grid-cols-2 gap-5 mt-1'>
                            <div className='w-full border-b-[1px] py-3'>
                                <p className='text-sm text-[#8f98a9] font-[500]'>Design</p>
                                <p className='text-base font-medium mt-2'>Mast Hai</p>
                            </div>
                            <div className='w-full border-b-[1px] py-3'>
                                <p className='text-sm text-[#8f98a9] font-[500]'>Fit</p>
                                <p className='text-base font-medium mt-2'>Ho jayega , buy to karo</p>
                            </div>
                            <div className='w-full border-b-[1px] py-3'>
                                <p className='text-sm text-[#8f98a9] font-[500]'>Discount</p>
                                <p className='text-base font-medium mt-2'>Aa jao de dunga</p>
                            </div>
                            <div className='w-full border-b-[1px] py-3'>
                                <p className='text-sm text-[#8f98a9] font-[500]'>Occassion</p>
                                <p className='text-base font-medium mt-2'>Kahi bhi Kabhi bhi</p>
                            </div>
                            <div className='w-full border-b-[1px] py-3'>
                                <p className='text-sm text-[#8f98a9] font-[500]'>Wash</p>
                                <p className='text-base font-medium mt-2'>Time rhe to kr lena</p>
                            </div>
                            <div className='w-full border-b-[1px] py-3'>
                                <p className='text-sm text-[#8f98a9] font-[500]'>Iron</p>
                                <p className='text-base font-medium mt-2'>Nhi karoge to bhi chalega</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[3px] bg-[#eeeeee] mt-10'>
                    </div>
                    {/*  ************ From here accordian starts  **************** */}
                    <Accordian product={product} />
                    <div className='w-full flex items-center justify-between px-6 my-8'>
                        <div className='w-[20%] flex-col items-center justify-center'>
                            <img className='w-[40%] mx-auto' src="https://images.bewakoof.com/web/trust-cart.svg" alt="payments_logo" />
                            <p className='text-center text-[8px] font-semibold text-[#8F98A9] uppercase mt-2'>100% secure <br /> payments</p>
                        </div>
                        <div className='w-[20%] flex-col items-center justify-center'>
                            <img className='w-[40%] mx-auto' src=" https://images.bewakoof.com/web/Easy-Returns.svg" alt="payments_logo" />
                            <p className='text-center text-[8px] font-semibold text-[#8F98A9] uppercase mt-2'>EASY RETURNS & <br /> INSTANT REFUNDS</p>
                        </div>
                        <div className='w-[20%] flex-col items-center justify-center'>
                            <img className='w-[40%] mx-auto' src="https://images.bewakoof.com/web/original-icon.png" alt="payments_logo" />
                            <p className='text-center text-[8px] font-semibold text-[#8F98A9] uppercase mt-2'>100% GENUINE <br /> PRODUCT</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ProductDetails;
