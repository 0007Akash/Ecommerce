import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.css'
const BestPicks = () => {

    const [banners, setBanners] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/get-banner?section=ourbestpicks')
            .then(response => setBanners(response.data.banners))
            .catch(error => console.error('Error fetching slides:', error));
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 968,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className='mt-6'>
                <div className='w-full flex items-center justify-center font-semibold text-[20px] tracking-wider'>
                    <h1>Our Best Picks</h1>
                </div>
                <Slider {...settings}>
                    {banners.map(banner => (
                        <div key={banner._id} className='relative sm:h-[280px] md:h-[370px] lg:h-[512px]'>
                            <img className='p-2 sm:p-0 sm:h-[280px] md:h-[370px] lg:h-[512px]' src={banner.imgUrl} alt="Slider" style={{ width: '100%' }} />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    )
}

export default BestPicks
