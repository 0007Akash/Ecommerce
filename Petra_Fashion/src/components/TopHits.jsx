import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.css'
import { useContext } from 'react'
import { EcomContext } from '../context/EcomContext'

const TopHits = () => {
    const { banners } = useContext(EcomContext);
    // State to hold an array of banners
    const [banner, setBanner] = useState([]);




    useEffect(() => {
        const bannerCopy = banners.filter(item => item.section === "tophits");

        setBanner(bannerCopy);

    }, [banners]);

    if (!banner.length) {
        return <div></div>;
    }

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

    // Do not render anything if still loading


    return (
        <>
            {/* Title only shows when data is fetched */}
            <div className='w-full flex items-center justify-center font-semibold text-[20px] tracking-wider'>
                <h1>Bewakoof's Top Hits</h1>
            </div>

            {/* Render the slider */}
            <Slider {...settings}>
                {banner.map(banner => (
                    <div key={banner._id} className='relative sm:h-[280px] md:h-[370px] lg:h-[512px] border-none outline-none'>
                        <img className='p-2 sm:p-0 sm:h-[280px] md:h-[370px] lg:h-[512px]' src={banner.imgUrl} alt="Slider" style={{ width: '100%' }} />
                    </div>
                ))}
            </Slider>
        </>
    );
}

export default TopHits;
