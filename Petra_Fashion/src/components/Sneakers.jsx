import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CiHeart } from "react-icons/ci";
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.css'
import { keyframes } from '@mui/system';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { EcomContext } from '../context/EcomContext';


const Sneakers = () => {
    const { products } = useContext(EcomContext);
    // State to hold an array of products
    const [productData, setProductData] = useState([]);




    useEffect(() => {
        const productcopy = products.filter(item => item.section === "Sneakers");

        setProductData(productcopy);

    }, [products]);

    if (!productData.length) {
        return <div></div>;
    }

    const tilt3D = keyframes`
    0% {
      transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: perspective(1000px) rotateX(10deg) rotateY(-10deg);
    }
    100% {
      transform: perspective(1000px) rotateX(0deg) rotateY(0deg);
    }
  `;



    const settings = {
        infinite: true,
        speed: 900,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]

    };


    return (
        <div className='mt-10 mb-[10px] pt-[5px] pl-2 pr-2 bg-custom-gradient'>
            <div className='w-full flex justify-center uppercase font-[500]'>
                <h1>bewkoof sneakers</h1>
            </div>
            <div className='w-full mt-5'>
                <Slider {...settings} className='flex justify-center'>
                    {productData.map(product => (
                        <Link to={`/product/${product._id}`} key={product._id}>
                            <div className=' flex justify-center items-center px-0 m-0 md:ml-0 md:px-6' key={product._id}>
                                <Card className='border border-grey-500' sx={{ maxWidth: 255, }}>
                                    <CardMedia
                                        sx={{
                                            height: 345, width: 255, transition: 'transform 0.3s ease-in-out',
                                            '&:hover': {
                                                // transform: 'scale(1.05) rotate(5deg) translateY(-20px)'
                                                animation: `${tilt3D} 0.8s ease-in-out forwards`, // Apply tilt and parallax effect on hover
                                                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.5)'
                                            },

                                        }}
                                        image={product.imgUrl}
                                        title={product.title}
                                    />
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
                                        <div className='flex gap-[5px] items-center ml-2'>
                                            <p className='text-[16px] font-bold'>₹
                                                {product.discountedPrice}</p>
                                            <p className='text-[12px] line-through text-[#a4a1a1]'>₹
                                                {product.price}</p>
                                            <p className='text-[12px] text-[#00B852] font-semibold'>{product.discountPercentage}% OFF</p>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </Link>
                    ))}
                </Slider>
            </div>
            <div className='w-full flex justify-center mt-[40px] underline font-[600] text-[#469f9c] text-sm'>
                <Link to={`/Sneakers`}>Explore All</Link>
            </div>
        </div>
    )

};

export default Sneakers;
