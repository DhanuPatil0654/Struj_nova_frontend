import React from 'react';
import Slider from 'react-slick';
import './home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar } from 'react-icons/fa';
import logoimg from '../../assets/logo/StrujNova_LOGO.png'
function CustomersSpeak() {
    const feedbacks = [
        {
            quote: "Struj Nova’s Charging Management System has redefined the way we operate.",
            details: "With its real-time monitoring, intelligent analytics, and seamless control over pricing and charger performance, Struj Nova CMS has empowered us to maintain 99% uptime across our network. From detecting issues before they impact users to enabling dynamic fleet and tariff management, it’s the backbone of our reliable and customer-first EV ecosystem — keeping drivers powered and confident every day."
        },
        {
            quote: "The Struj Nova CMS greatly improved our operational efficiency.",
            details: "By leveraging data-driven insights, we could optimize our resource allocation and enhance customer satisfaction significantly."
        },
        {
            quote: "Our EV fleet has never run smoother.",
            details: "Thanks to Struj Nova's dynamic control over charging schedules and pricing, we save costs while providing excellent service."
        }
    ];

    const settings = {
        dots: false,

        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false, // hides next/previous arrows
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 1 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <>

            <div className="customers-wrapper" data-aos="fade-up">
                <h1 className="section-title">Our Customers Speak</h1>
                <img src={logoimg} className="img-fluid rounded-small" alt="..." />

                <div className="slider-card">
                    <Slider {...settings}>
                        {feedbacks.map((feedback, index) => (
                            <div key={index} className="feedback-slide">
                                <p className="feedback-text">
                                    <span className="feedback-quote">“{feedback.quote}”</span> {feedback.details}
                                </p>
                                <div className="stars">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar key={i} className="star" />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default CustomersSpeak;
