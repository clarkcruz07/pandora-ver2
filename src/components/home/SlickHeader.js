import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useLottie } from "lottie-react"
import bannerAnimation from '../../assets/json/textBannerAnimation.json'
export const SlickHeader = () =>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: bannerAnimation
    };

    const { View: lottie } = useLottie(defaultOptions);
    return (
        <div className="row pt-5">
           <div className="col-md-10 mx-auto slick-header position-relative">
            
                <Slider {...settings} >
                    
                    <div className='slick-text'>                        
                        Experience 360° services on-demand. Download QUBE app now!
                    </div>
                    <div className='slick-text'>                        
                        Hassle-free! Scan and book via the QUBE app now!
                    </div>
                   
                </Slider>
                <div className="lottieAnimation">{lottie}</div>
           </div>
        </div>
    )
}

export default SlickHeader