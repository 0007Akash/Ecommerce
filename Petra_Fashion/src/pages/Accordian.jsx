import React from 'react'
import { useState } from 'react';
import { IoIosStarOutline } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { AiOutlineFileDone } from "react-icons/ai";
import { TbArrowsExchange } from "react-icons/tb";

const Accordian = ({ product }) => {
    const [hide1, setHide1] = useState(false);
    const [hide2, setHide2] = useState(false);
    const [hide3, setHide3] = useState(false);


    const handleClickOffers = () => {
        setHide1(!hide1);
        setHide2(false);
        setHide3(false);
    }
    const handleClickProduction = () => {
        setHide1(false);
        setHide2(!hide2);
        setHide3(false);
    }
    const handleClickReturns = () => {
        setHide1(false);
        setHide2(false);
        setHide3(!hide3);
    }
    return (
        <div>
            <div className='mt-5'>
                <div className='flex items-center justify-between pr-3'>
                    <div className='flex items-center gap-3'>
                        <IoIosStarOutline size={25} />
                        <div>
                            <p className='text-sm font-semibold'>Offers</p>
                            <p className='text-xs text-[#878787] uppercase'>save extra with 2 offers</p>
                        </div>
                    </div>
                    <p onClick={handleClickOffers} className='cursor-pointer text-xl'>{hide1 ? "-" : "+"}</p>
                </div>
                <div className='my-3'>
                    {hide1 && (
                        <>
                            <div className='flex gap-2'>
                                <BiSolidOffer size={30} />
                                <div className='text-xs text-[#606060]'>
                                    <p className='mb-1 text-xs font-medium text-[#606060] leading-5'>Get Extra 10% instant discount on all orders above Rs.2999.</p>
                                    <p> Coupon code - <span className='font-bold'>FLAT10</span></p>
                                </div>
                            </div>
                            <div className='flex gap-2 mt-2'>
                                <BiSolidOffer size={30} />
                                <div className='text-xs text-[#606060]'>
                                    <p className='mb-1 text-xs font-medium text-[#606060] leading-5'>Get Extra 5% instant discount on all orders above Rs.1499.</p>
                                    <p> Coupon code - <span className='font-bold'>FLAT5</span></p>
                                </div>
                            </div>
                        </>
                    )}

                </div>
                <div className='w-full h-[2px] bg-[#eeeeee] my-5'>
                </div>
                <div className='mt-3'>
                    <div className='flex items-center justify-between pr-3'>
                        <div className='flex items-center gap-3'>
                            <AiOutlineFileDone size={25} />
                            <div>
                                <p className='text-sm font-semibold'>Product Description</p>
                                <p className='text-xs text-[#878787] uppercase'>Manufacture, Care and Fit</p>
                            </div>
                        </div>
                        <p onClick={handleClickProduction} className='cursor-pointer text-xl'>
                            {hide2 ? "-" : "+"}
                        </p>
                    </div>

                    {/* Accordion Content */}
                    {hide2 && (
                        <div className='my-3'>
                            <p className='text-xs font-medium text-[#606060] leading-5'>Embrace the bond that lasts through all thick and thin with this {product.title}. Club this Official Peanuts white t-shirt with parachute pants and sneakers for a trendy look.
                                <br /> <span className='font-bold'>Country of Origin </span>- India</p>
                            <p className='text-xs font-medium text-[#606060] leading-5 mt-3'><span className='font-bold'>Manufactured By</span> - Bewakoof Brands Pvt Ltd, Sairaj logistic hub #A5,BMC pipeline road, Opposite all saints high school, Amane, Bhiwandi, Thane, Maharashtra 421302</p>
                            <p className='text-xs font-medium text-[#606060] leading-5 mt-3'><span className='font-bold'>Packed By</span> - Bewakoof Brands Pvt Ltd, Sairaj logistic hub #A5,BMC pipeline road, Opposite all saints high school, Amane, Bhiwandi, Thane, Maharashtra 421302</p>
                            <p className='text-xs font-medium text-[#606060] leading-5 mt-3'>
                                <span className='text-[#42A2A2]'>Product Specifications</span>
                                <ul >
                                    <li >
                                        Super Loose On Body Thoda Hawa Aane De

                                    </li>
                                    <li>
                                        Classic, lightweight jersey fabric comprising 100% cotton.
                                    </li>
                                </ul>
                            </p>
                        </div>
                    )}
                </div>
                <div className='w-full h-[2px] bg-[#eeeeee] my-5'></div>
                <div className='mt-3'>
                    <div className='flex items-center justify-between pr-3'>
                        <div className='flex items-center gap-3'>
                            <TbArrowsExchange size={25} />
                            <div>
                                <p className='text-sm font-semibold uppercase'>15 day returns</p>
                                <p className='text-xs text-[#878787] uppercase'>Know about return & exchange policy</p>
                            </div>
                        </div>
                        <p onClick={handleClickReturns} className='cursor-pointer text-xl'>
                            {hide3 ? "-" : "+"}
                        </p>
                    </div>

                    {/* Accordion Content */}
                    {hide3 && (
                        <div className='my-3'>
                            <div className='flex gap-2'>

                                <div className='text-xs text-[#606060]'>
                                    <p className='mb-1 text-xs font-medium text-[#606060] leading-5'>Easy returns upto 15 days of delivery.</p>
                                </div>
                            </div>

                        </div>
                    )}
                </div>
                <div className='w-full h-[2px] bg-[#eeeeee] my-5'></div>
            </div>
        </div>
    )
}

export default Accordian
