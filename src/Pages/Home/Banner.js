import React from 'react';
import bannerOne from '../../assets/images/banner/banner1.jpg';
import bannerTwo from '../../assets/images/banner/banner2.jpg';
import bannerThree from '../../assets/images/banner/banner3.jpg';
import bannerFour from '../../assets/images/banner/banner4.jpg';

const Banner = () => {
    return (
        <div class="carousel w-full">
            <div id="slide1" class="carousel-item relative w-full">
                <img src={bannerOne} class="w-full" alt='' /> 
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" class="btn btn-circle">❮</a> 
                <a href="#slide2" class="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide2" class="carousel-item relative w-full">
                <img src={bannerTwo} class="w-full" alt='' />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" class="btn btn-circle">❮</a> 
                <a href="#slide3" class="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide3" class="carousel-item relative w-full">
                <img src={bannerThree} class="w-full" alt='' />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" class="btn btn-circle">❮</a> 
                <a href="#slide4" class="btn btn-circle">❯</a>
                </div>
            </div> 
            <div id="slide4" class="carousel-item relative w-full">
                <img src={bannerFour} class="w-full" alt='' />
                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" class="btn btn-circle">❮</a> 
                <a href="#slide1" class="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;