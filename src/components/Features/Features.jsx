import React from 'react';
import '../../css/features/feature.css';
import { FaBolt, FaCar, FaBatteryFull, FaChargingStation, FaLeaf, FaCogs, FaPlug, FaTachometerAlt, FaBrain, FaWifi, FaCarSide } from 'react-icons/fa';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const features = [
    {
        icon: <FaBolt />,
        title: "Fast Charging",
        description: "Charge your EV quickly and efficiently with our advanced charging stations."
    },
    {
        icon: <FaCar />,
        title: "Electric Mobility",
        description: "Experience smooth, zero-emission mobility with our state-of-the-art EVs."
    },
    {
        icon: <FaBatteryFull />,
        title: "Long Range Battery",
        description: "Travel longer distances with our high-capacity, reliable battery systems."
    },
    {
        icon: <FaChargingStation />,
        title: "Charging Network",
        description: "Access a wide network of charging stations across cities and highways."
    },
    {
        icon: <FaLeaf />,
        title: "Eco-Friendly",
        description: "Commitment to sustainability with low-carbon footprint vehicles."
    },
    {
        icon: <FaCogs />,
        title: "Smart Features",
        description: "Advanced AI and smart connectivity features for a seamless experience."
    },
    {
        icon: <FaPlug />,
        title: "Plug & Play",
        description: "Simple and convenient integration with home and public charging points."
    },
    {
        icon: <FaTachometerAlt />,
        title: "High Performance",
        description: "Efficient, powerful, and smooth driving with cutting-edge EV technology."
    }
];


const techFeatures = [
    {
        icon: <FaBatteryFull />,
        title: "Smart Charging",
        description: "Optimized battery systems for longer range and faster charging through our AI Integrated Machines ."
    },
    {
        icon: <FaBrain />,
        title: "Smart Features",
        description: "AI-assisted driving, predictive maintenance, and intelligent controls."
    },
    {
        icon: <FaWifi />,
        title: "Connectivity",
        description: "Seamless mobile app integration and vehicle-to-cloud communication."
    },
    {
        icon: <FaCarSide />,
        title: "Autonomous Tech",
        description: "Advanced driver assistance and autonomous driving capabilities."
    },
];


function Features() {
    return (
        <>
            <div className="features-container">
                <h1 className="gradient-text">Our Features</h1>
                {/* <div className="underline-gradient"></div> */}

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <div className="feature-icon-circle">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="technology-container">
                <h2 className="tech-title">Technology & Innovation</h2>
                <p className="tech-subtitle">
                    At Struj Nova, we pioneer EV technologies to make driving smarter, safer, and greener.
                </p>
                <div className='container'>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        loop={true}
                        autoplay={{ delay: 3000 }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        modules={[Autoplay]}
                    >
                        {techFeatures.map((feature, index) => (
                            <SwiperSlide key={index} className="tech-slide pt-3 pb-3">
                                <div className="tech-card">
                                    <div className="tech-icon">{feature.icon}</div>
                                    <h3 className="tech-feature-title">{feature.title}</h3>
                                    <p className="tech-feature-desc">{feature.description}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default Features;
