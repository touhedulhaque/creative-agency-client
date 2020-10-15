import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';
import carousel4 from '../../../images/carousel-4.png';
import carousel5 from '../../../images/carousel-5.png';
import './Carousel.css'

const Carousel = () => {
    return (
        <section style={{backgroundColor: 'black'}} className="mt-5 pt-5">
            <div className="container mt-5">
                <h3 style={{color: 'white'}} className="text-center">Here are some of <span style={{ color: '#7ab259' }}>Our Works</span> </h3>
                
                    <div className="d-flex justify-content-center mt-5">
                    <AliceCarousel autoPlay autoPlayInterval="3000">
                        <img src={carousel1} className="sliderimg" />
                        <img src={carousel2} className="sliderimg" />
                        <img src={carousel3} className="sliderimg" />
                        <img src={carousel4} className="sliderimg" />
                        <img src={carousel5} className="sliderimg" />
                    </AliceCarousel>
                    </div>

                

            </div>
        </section >
    );
};

export default Carousel;