import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './style.css'
const Sliding = () => {

    const [slides, setSlides] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/get-Slides')
            .then(response => setSlides(response.data))
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
    };
    return (
        <Slider {...settings}>
            {slides.map(slide => (
                <div key={slide._id} style={{ position: 'relative', height: '200px', }}>
                    <img src={slide.imgUrl} alt="Slider" style={{ width: '100%' }} />
                </div>
            ))}
        </Slider>
    )
}

export default Sliding
