import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css"
import "swiper/components/pagination/pagination.min.css"
import GatsbyImage from 'gatsby-image';


// import Swiper core and required modules
import SwiperCore, {
    EffectCoverflow,
    Pagination
} from 'swiper/core'

// install Swiper modules
SwiperCore.use([EffectCoverflow,Pagination])

export default function Gallery ({ main, images, alt}) {
    const slideImages = [main, ...images]
    return <Swiper 
        effect={'slide'} 
        grabCursor={true} 
        centeredSlides={true} 
        slidesPerView={1} 
        spaceBetween={10}
        pagination={true} 
        autoplay={true}
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        loop={true}
        loopAdditionalSlides={1}
    >
        {slideImages.map((image, index) => (<SwiperSlide
            className="flex flex-cols items-center justify-center inline-block align-middle"
            key={`${alt}-${index}`}
        >
            <GatsbyImage
                fluid={{
                    ...image,
                    alt: `Imagen de ${alt}`,
                }}
                className="w-full md:w-1/2 max-h-96 rounded shadow-md"
            />
        </SwiperSlide>))}
    </Swiper>
}