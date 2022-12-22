import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const Footer = () =>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        draggable: true
      };
    return (
        <div className="row">
            <div className="panel panel-default mb-5 bg-white w-75 mx-auto rounded-big position-absolute translate-middle footer">
                <div className="panel-body p-3">
                    <div className="text-dark">
                        {/* slick */ }
                        <Slider {...settings}>
                            <div>
                                <p className="base-color">High quality laundry service</p>
                                <div className="slick-content base-text">Experience premium laundry service tailored to your needs.</div>
                            </div>
                            <div>
                                <p className="base-color">Secure, fast & safe</p>
                                <div className="slick-content base-text">Qube ensures that your items are safe & sound and will be ready in a heartbeat</div>
                            </div>
                            <div>
                                <p className="base-color">On-the-go</p>
                                <div className="slick-content base-text">Laundry, drop services, and keeping your items while on the go?</div>
                            </div>
                        </Slider>
                    </div>
                    <div className="d-flex justify-content-around align-items-center">
                       
                    </div>
                </div>
            </div>
            <div className="footer position-absolute w-75 end-0 footer-img">
                
            </div>
        </div>
    )
}

export default Footer