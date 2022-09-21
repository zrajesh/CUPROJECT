import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import 'swiper/css';
import "./MainComponent.css";
import { Link } from 'react-router-dom';

const MainComponent = () => {
    return (
        <div className="main-component">
            <div className="hero-section">
                <div className="text-hero">
                    <p className="text-hero-title">
                    Piloting young <br /> Careers...
                    </p>
                    <p className="text-hero-desc">
                    An engaging, supportive alumni network will further institutions /organizations success.  This online portal will provide a platform where all the students can interact and help each other by hand-holding in self-employment as well as other job opportunities in the industries .
                    </p>
                </div>

                <div className="carousel-hero">
                <Carousel autoPlay infiniteLoop>
                <div>
                    <img src="https://i.ibb.co/VD6PCBx/carousel1.jpg" alt='carouselImg' />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/ZYThtZ8/carousel2.jpg" alt='carouselImg' />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/Ydg0kYn/carousel3.jpg" alt='carouselImg' />
                    <p className="legend">Legend 3</p>
                </div>
                </Carousel>
                </div>
            </div>

            <div className="cta-section">
                <div className="cta-button">
                    <Link to="#" className="free-link cta-button-link">Get Started</Link>
                </div>
                <div className="cta-desc">
                    <p>
                    We use cookies to give you the best possible experience on our website.To find out more, read our updated Cookie Policy
                    <br />Release ver. 0.1.0 | Copyright &copy; 2022 <span className="cta-brand">Alumni <span className="cta-brand-yellow">Connect</span></span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MainComponent;
