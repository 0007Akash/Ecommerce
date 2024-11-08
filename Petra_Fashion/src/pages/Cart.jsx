import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { EcomContext } from '../context/EcomContext'

const Cart = () => {
    const { products, cartItem, getCartCount, deleteFromCart, getCartTotalPrice } = useContext(EcomContext);
    const [cartData, setCartData] = useState([]);
    const { totalOriginalPrice, totalDiscountedPrice } = getCartTotalPrice();

    useEffect(() => {
        const tempData = [];
        for (const items in cartItem) {
            for (const item in cartItem[items]) {
                if (cartItem[items][item] > 0) {
                    tempData.push({
                        _id: items,
                        size: item,
                        quantity: cartItem[items][item]
                    })
                }
            }
        }
        setCartData(tempData);
    }, [cartItem]);



    return (
        <>
            <div className='w-full px-4 sm:px-16 min-h-[70vh] mt-[40px]'>
                <h1 className='text-lg font-semibold mt-3'>My Bag ({getCartCount()} items) </h1>
                <div className='flex flex-col sm:flex-row mt-6 sm:gap-5 gap-3'>
                    <div className='flex-1 flex-col'>
                        {
                            cartData.length > 0 ?
                                <div className=' bg-[#fff9e5] text-center text-xs py-3'>
                                    <p>Yay! You get <span className='font-semibold'>FREE delivery</span> on this order</p>
                                </div>
                                :
                                <div className=' bg-[#fff9e5] text-center text-xs py-3'>
                                    <p>No product available in your cart...</p>
                                </div>
                        }
                        {
                            cartData.map((item, index) => {
                                const data = products.find((product) => product._id === item._id);
                                return (
                                    <>
                                        <div key={index} className='border-[1px] border-gray-200 flex flex-col sm:border-none mt-3 rounded-lg'>
                                            <div key={index} className='sm:border-[1px]  flex border-gray-200 mt-2 rounded-xl p-2 sm:p-3 md:p-4 lg:p-5 '>
                                                <div className='w-[25%] sm:w-[17%]'>
                                                    <img className='rounded-lg' src={data.imgUrl} alt="product_image" />
                                                </div>
                                                <div className='flex flex-col justify-between flex-1'>
                                                    <div className='pl-4 flex-1 flex flex-col gap-1 sm:gap-2'>
                                                        <p className='text-sm font-[500]'>{data.manufacturerBrand}</p>
                                                        <p className='text-[11px] text-[#737e93]'>{data.title}</p>
                                                        <p className='text-[11px] text-[#737e93]'>Ships in <span className='font-medium text-black'>2-3 days</span></p>
                                                    </div>
                                                    <div className='pl-4 sm:flex gap-4 hidden '>
                                                        <p className='text-[#1c6c93] text-sm'>Size: {item.size}</p>
                                                        <p className='text-[#1c6c93] text-sm'>Qty: {item.quantity}</p>
                                                    </div>
                                                </div>
                                                <div className='flex flex-col justify-between items-end'>
                                                    <div onClick={() => deleteFromCart(item._id, item.size, 0)} className='text-lg cursor-pointer'>x</div>
                                                    <div className='hidden sm:block'>
                                                        <div className='flex items-center justify-between'>
                                                            <p className='text-[16px] font-semibold'>₹
                                                                {data.discountedPrice}</p>
                                                            <p className='text-[12px] line-through'>₹
                                                                {data.price}</p>
                                                        </div>
                                                        <p className='text-[12px] text-[#2ca003]'>{`You save ₹${data.price - data.discountedPrice}`}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='px-4 flex justify-between items-center  md:hidden '>
                                                <div className=' flex gap-4'>
                                                    <p className='text-[#1c6c93] text-sm'>Size: {item.size}</p>
                                                    <p className='text-[#1c6c93] text-sm'>Qty: {item.quantity}</p>
                                                </div>
                                                <div className=''>
                                                    <div className='flex items-center justify-between'>
                                                        <p className='text-[16px] font-semibold'>₹
                                                            {data.discountedPrice}</p>
                                                        <p className='text-[12px] line-through'>₹
                                                            {data.price}</p>
                                                    </div>
                                                    <p className='text-[12px] text-[#2ca003]'>{`You save ₹${data.price - data.discountedPrice}`}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }

                    </div>
                    <div className='sm:w-[35%] w-full border-[1px] h-fit border-gray-200 rounded-lg p-5 sticky top-[60px]'>
                        <div>
                            <h1 className='text-[14px] uppercase font-[600]'>price summary</h1>
                            <div className='flex flex-col my-5 gap-3'>
                                <div className='flex text-[14px] items-center justify-between font-[500]'>
                                    <p className='text-[#676767]'>Total MRP (Incl. of taxes)</p>
                                    <p className='text-[#676767] tracking-wider'><span className='text-[16px]'>₹</span>{totalOriginalPrice}</p>
                                </div>
                                <div className='flex text-[14px] items-center justify-between font-[500]'>
                                    <p className='text-[#676767]'>Bag Discount</p>
                                    <p className='text-[#008c2d] tracking-wider '><span className='text-[16px]'>-₹</span>{totalOriginalPrice - totalDiscountedPrice}</p>
                                </div>
                                <div className='flex text-[14px] items-center justify-between font-[500]'>
                                    <p className='text-[#676767]'>Combo Offer Discount</p>
                                    <p className='text-[#008c2d] tracking-wider'><span className='text-[16px]'>-₹</span>{0}</p>
                                </div>
                                <div className='flex text-[14px] items-center justify-between font-[500]'>
                                    <p className='text-[#676767]'>Delivery Fee</p>
                                    <p className='text-[#008c2d]'>Free</p>
                                </div>
                                <hr className='bg-gray-400 border-t-[1px] border-dotted mt-[10px]' />
                                <div className='flex text-[18px] text-[#292d35] items-center justify-between font-[600] mt-[10px]'>
                                    <p className=''>Subtotal</p>
                                    <p className='tracking-wide'><span className='text-[20px]'>₹</span>{totalDiscountedPrice}</p>
                                </div>
                            </div>
                            <div className='bg-[#f4faf2] text-sm text-center py-3 font-[500]'>
                                <p>You are saving a total of  <span className='text-[16px] text-[#008c2d]'>₹</span><span className='text-[#008c2d]'>{totalOriginalPrice - totalDiscountedPrice}</span> on this order</p>
                            </div>
                            <div>
                                <button className='w-full bg-[#ffd232] text-md uppercase font-[600] py-2 my-3 rounded-lg'>Proceed</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </>
    )
}

export default Cart
