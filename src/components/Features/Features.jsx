import React from 'react'
import '../../css/features/feature.css'
import { LuBatteryCharging } from "react-icons/lu";
import { RiGlobalFill } from "react-icons/ri";
import { IoHammer } from "react-icons/io5";
import { MdElectricBolt } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Features() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 600, settings: { slidesToShow: 1 } }
        ]
    };

    const featuresData = [
        {
            title: "EV Charging Solutions (End-to-End) Complete hardware + software + operations ecosystem",
            icon: <LuBatteryCharging />
        },
        {
            title: "Charge Point Operator (CPO) Services Making charging accessible, affordable & reliable",
            icon: <RiGlobalFill />
        },
        {
            title: "Power Electronics & Hardware Manufacturing",
            icon: <IoHammer />
        },
        {
            title: "Electrical Contracting & Energy Infrastructure",
            icon: <MdElectricBolt />
        }
    ];
    return (
        <>
            <div className='features_back_color mt-5'>
                <p className='out_feature_name'>Our Features</p>
                <div className='container'>
                    <Slider {...settings}>
                        {featuresData.map((feature, index) => (
                            <div key={index} className="feature-slide">
                                <span className='icons_ctosum'>{feature.icon}</span>
                                <p>{feature.title}</p>
                            </div>

                        ))}
                    </Slider>
                </div>

            </div>




        </>
    )
}

export default Features


{/* <div className='container mt-3 mb-3'>
                    <button class="btn custome-button-feature1" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="true" aria-controls="collapseExample">
                        <LuBatteryCharging className='custom_icon' />EV Charging Solutions (End-to-End)

                    </button>
                    <div class="collapse show" id="collapseExample">
                        <div class="card feature1_card card-body">
                            <ul>
                                <div className='row'>
                                    <div className='col-lg-4 col-md-6 col-sm-12'>
                                        <li>Complete hardware + software + operations ecosystem</li>
                                        <li>Customized Charging Systems (Fleet / Highway / Commercial / Society)</li>
                                        <li>EV Fleet Charging Consultation</li>
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-sm-12'>
                                        <li>DC Fast Charger Manufacturing (30kW–350kW)</li>
                                        <li>Charger Installation, Commissioning & Testing</li>
                                        <li>Multi-Brand Charger Repair & Upgradation</li>
                                    </div>
                                    <div className='col-lg-4 col-md-6 col-sm-12'>
                                        <li>AC Charger Manufacturing (3.3kW–22kW)</li>
                                        <li>Smart Energy Metering & Billing Integration</li>
                                        <li>Charging Infrastructure Feasibility Study</li>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>

                    <button
                        className="btn custome-button-feature1 mt-3"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseExample2"
                        aria-expanded="false"
                        aria-controls="collapseExample2"
                    >
                        <LuBatteryCharging className="custom_icon" />
                        Charge Point Operator (CPO) ServicesMaking charging accessible, affordable & reliable

                    </button>
                    <div className="collapse" id="collapseExample2">
                        <div className="card feature1_card card-body">
                            <ul>
                                <li>Charging Station Network Deployment</li>
                                <li>Tariff Optimization for ROI Maximization</li>
                                <li>Interoperability (OCPP 1.6J / OCPP 2.0.1)</li>
                                <li>Smart Load Management & Power Distribution</li>
                                <li>Smart Load Management & Power Distribution</li>
                                <li>Billing, Wallet & Payment Gateway Integration</li>
                                <li>Host Management & Revenue Sharing Models</li>
                            </ul>
                        </div>
                    </div>
                </div> */}