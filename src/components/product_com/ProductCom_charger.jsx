import React from "react";
import "../../css/serviceinfo_card/serviceinfo.css";
import { FaShoppingCart } from "react-icons/fa";
import charger350 from '../../assets/service/service1/Smart & Scalable Complete EV Charging infrastructure2.png'
import ProductTwo from "./ProductTwo";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { MdOutlinePhoneCallback } from "react-icons/md";
import { GiWorld } from "react-icons/gi";

import charger1 from "../../assets/service/service1/Smart & Scalable Complete EV Charging infrastructure2.png";
import charger2 from "../../assets/service/service1/Smart & Scalable Complete EV Charging infrastructure2.png";
import charger3 from "../../assets/service/service1/Smart & Scalable Complete EV Charging infrastructure2.png";

function ProductCom_charger() {
    // 350 kW Charger Specifications
    const chargerSpecs = {
        name: "DC Fast Charger",
        power: "30 kW",
        connector: "CCS2 / CHAdeMO",
        voltage: "400–1000V DC",
        efficiency: "≥95%",
        chargingTime: "15–20 min (0–80%)",
        usage: "Highway / Public Station",
        price: "₹45,00,000",
    };

    const DCchargerData = {
        electrical_specification: [
            { label: "Device Name", value: "DC Fast Charger" },
            { label: "Rated Output Power", value: "30 kW" },
            { label: "Output Voltage Range", value: "200 – 1000 V DC" },
            { label: "Maximum Output Current", value: "Up to 100 A" },
            { label: "Input Supply", value: "3-Phase AC" },
            { label: "Input Voltage", value: "380 – 415 V AC" },
            { label: "Input Frequency", value: "50 Hz" },
            { label: "Power Factor", value: "≥ 0.99" },
            { label: "Efficiency", value: "≥ 95%" }
        ],
        charging_interface: [
            { feature: "Connector Type", details: "CCS2 (Optional CHAdeMO / GB-T)" },
            { feature: "Charging Mode", details: "Mode-4 DC Fast Charging" },
            { feature: "Cable Length", details: "4.5 – 5 m (Customizable)" },
            { feature: "Current Regulation", details: "Dynamic current & voltage control" }
        ],
        smartConnectivity: [
            { feature: "Communication Protocol", Support: "OCPP 1.6J (Upgradeable to OCPP 2.0.1)" },
            { feature: "Network", Support: "4G / Ethernet / Wi-Fi" },
            { feature: "Backend Compatibility", Support: "CMS / Billing / Remote Monitoring" },
            { feature: "Remote Operations", Support: "Start / Stop / Diagnostics / Firmware Updates" }
        ],
        MechanicalandEnviornmental: [
            { feature: "Mounting Type", Support: "Floor-mounted / Wall-mounted" },
            { feature: "Enclosure Material", Support: "Powder-coated steel" },
            { feature: "Ingress Protection", Support: "IP54 / IP55" },
            { feature: "Cooling Method", Support: "Forced air cooling" },
            { feature: "Operating Temperature", Support: "–20 °C to +55 °C" },
            { feature: "Operating Humidity", Support: "Up to 95% (non-condensing)" },
            { feature: "Noise Level", Support: "< 65 dB" },

        ]

    };


    return (
        <>
            <div className="container py-5">
                <p className="para_about mb-4">
                    <h1 className="gradient-text">Our Products</h1>
                    Strujnova Energy’s EV charging products are built to meet the evolving demands of modern electric mobility. Combining robust hardware, smart software integration, and flexible power configurations, our chargers enable efficient, safe, and future-ready charging infrastructure. Whether for high-capacity public stations or customized fleet solutions, our products are engineered to deliver consistent performance with maximum uptime.
                </p>
            </div>

            <div className="container charger-container">
                <div className="row">
                    <div className="charger-card m-2">
                        <div className="card-body">
                            {/* Header Section */}
                            <div className="card-header">
                                <h2 className="card-title">StrujNova Energy – DC Fast Charger (30 kW)</h2>
                                <div className="badge-group">
                                    <span className="badge badge-online">30 kw Charger</span>
                                </div>
                            </div>

                            <p>
                                StrujNova’s 30 kW DC Fast Charger is designed for public charging stations, commercial fleets, workplaces, and highway locations. Built with industrial-grade power electronics, advanced safety features, and OCPP-based smart connectivity, it ensures fast, safe, and efficient charging for a wide range of electric vehicles.
                            </p>


                            <div className="details-grid">
                                {/* Left: Details in 2 columns */}
                                <div className="details-column">
                                    {DCchargerData.electrical_specification.map((item, index) => (
                                        <div className="detail-item" key={index}>
                                            <span className="detail-label">{item.label}</span>
                                            <span className="detail-value">{item.value}</span>
                                        </div>
                                    ))}
                                </div>


                                {/* Right: Product Image */}
                                <div className="product-image">
                                    <Swiper
                                        modules={[Pagination, Autoplay]}
                                        slidesPerView={1}
                                        spaceBetween={10}
                                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                                        pagination={{ clickable: true }}
                                        loop={true}
                                    >
                                        <SwiperSlide className="image-slide">
                                            <img src={charger1} alt="Charger 1" />
                                        </SwiperSlide>

                                        <SwiperSlide className="image-slide">
                                            <img src={charger2} alt="Charger 2" />
                                        </SwiperSlide>

                                        <SwiperSlide className="image-slide">
                                            <img src={charger3} alt="Charger 3" />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                            <hr></hr>

                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <b><p>Charging Interface</p></b>
                                    <div className="table-responsive">
                                        <table className="connector-table">
                                            <thead>
                                                <tr>
                                                    <th>Sr.No</th>
                                                    <th>Feature</th>
                                                    <th>Details</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {DCchargerData.charging_interface.map((item, index) => (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>

                                                        <td>
                                                            <div className="connector-type">
                                                                {/* <div className="connector-icon">⚡</div> */}
                                                                <span>{item.feature}</span>
                                                            </div>
                                                        </td>

                                                        <td>{item.details}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">

                                    <b><p> User Interface & Authentication</p></b>
                                    <div className="ev-timeline">
                                        <div className="timeline-item">
                                            <span className="timeline-dot"></span>
                                            <p className="text-justify">
                                                <b>LCD / HMI Display</b> for charging status, SOC, voltage, current & energy
                                            </p>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-dot"></span>
                                            <p className="text-justify">
                                                <b>RFID Authentication (ISO/IEC 14443 A/B)</b>
                                            </p>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-dot"></span>
                                            <p className="text-justify">
                                                <b>Plug & Charge</b> capability (vehicle-dependent)
                                            </p>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-dot"></span>
                                            <p className="text-justify">
                                                <b>Emergency Stop Button</b>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>

                            <b><p>Smart Connectivity</p></b>
                            <div className="table-responsive">
                                <table className="connector-table">
                                    <thead>
                                        <tr>
                                            <th>Sr.No</th>
                                            <th>Feature</th>
                                            <th>Details</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {DCchargerData.smartConnectivity.map((item, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>

                                                <td>
                                                    <div className="connector-type">
                                                        <span>{item.feature}</span>
                                                    </div>
                                                </td>

                                                <td>{item.Support}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <hr></hr>

                            <b>Protection & Safety</b>
                            <div className="row">
                                <div className="col-lg-6 col-sm-12">
                                    <ul>
                                        <li>
                                            <p className="text-justify">
                                                Over-voltage protection
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-justify">
                                                Under-voltage protection
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-justify">
                                                Over-current protection
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-justify">
                                                Automatic fault shutdown
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-justify">
                                                IP-rated enclosure for outdoor use
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 col-sm-12">
                                    <ul>
                                        <li>
                                            <p className="text-justify">
                                                Short-circuit protection
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-justify">
                                                Ground fault protection
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-justify">
                                                Surge protection (SPD Type-II)
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-justify">
                                                Insulation monitoring
                                            </p>
                                        </li>


                                    </ul>
                                </div>
                            </div>
                            <hr></hr>

                            <b><p>Mechanical & Environmental</p></b>
                            <div className="table-responsive">
                                <table className="connector-table">
                                    <thead>
                                        <tr>
                                            <th>Sr.No</th>
                                            <th>Feature</th>
                                            <th>Details</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {DCchargerData.MechanicalandEnviornmental.map((item, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>

                                                <td>
                                                    <div className="connector-type">
                                                        {/* <div className="connector-icon">⚡</div> */}
                                                        <span>{item.feature}</span>
                                                    </div>
                                                </td>

                                                <td>{item.Support}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <hr></hr>

                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <b><p> Compliance & Standards</p></b>
                                    <div className="ev-timeline">
                                        <div className="timeline-item">
                                            <span className="timeline-dot"></span>
                                            <p className="text-justify">
                                                <b>IEC 61851-1 / IEC 61851-23 / IEC 61851-24</b>
                                            </p>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-dot"></span>
                                            <p className="text-justify">
                                                <b>IEC 62196-3</b>
                                            </p>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-dot"></span>
                                            <p className="text-justify">
                                                <b>AIS-138 (where applicable)</b>
                                            </p>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-dot"></span>
                                            <p className="text-justify">
                                                <b>CE / BIS (as applicable)</b>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <b><p> Applications</p></b>
                                    <div className="ev-timeline">
                                        <div className="timeline-item">
                                            <span className="timeline-dot"></span>
                                            <p className="text-justify">
                                                Public EV Charging Stations
                                            </p>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-dot"></span>
                                            <p className="text-justify">
                                                Commercial Parking & Malls
                                            </p>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-dot"></span>
                                            <p className="text-justify">
                                                Fleet & Depot Charging
                                            </p>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-dot"></span>
                                            <p className="text-justify">
                                                Highway Fast Charging
                                            </p>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-dot"></span>
                                            <p className="text-justify">
                                                Residential Societies & Campuses
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            </hr>

                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <b><p> Why StrujNova Energy?</p></b>
                                    <div className="ev-timeline">
                                        <div className="timeline-item">
                                            <span className="timeline-dot"></span>
                                            <p className="text-justify">
                                                Indigenous engineering & manufacturing
                                            </p>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-dot"></span>
                                            <p className="text-justify">
                                                Scalable & future-ready design
                                            </p>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-dot"></span>
                                            <p className="text-justify">
                                                CMS-ready smart chargers
                                            </p>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-dot"></span>
                                            <p className="text-justify">
                                                Service-focused architecture
                                            </p>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-dot"></span>
                                            <p className="text-justify">
                                                Custom branding & configuration support
                                            </p>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <b><p> Optional Add-Ons</p></b>
                                    <div className="ev-timeline">
                                        <div className="timeline-item">
                                            <span className="timeline-dot"></span>
                                            <p className="text-justify">
                                                Dual-gun configuration
                                            </p>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-dot"></span>
                                            <p className="text-justify">
                                                Canopy & branding solutions
                                            </p>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-dot"></span>
                                            <p className="text-justify">
                                                Solar-ready integration
                                            </p>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-dot"></span>
                                            <p className="text-justify">
                                                Load management system
                                            </p>
                                        </div>
                                        <div className="timeline-item">
                                            <span className="timeline-dot"></span>
                                            <p className="text-justify">
                                                Remote energy analytics
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr></hr>

                            <b><p>Support & Service</p></b>
                            <p>
                                Pan-India service support with remote diagnostics, preventive maintenance, and firmware upgrades.
                            </p>
                            <p>
                                <MdOutlinePhoneCallback /> Customer Support:
                                <a href="tel:+918275108855" className="phone-link">
                                     (+91) 8275108855
                                </a>
                            </p>
                            <p className="mb-0">

                            </p>
                            <p>
                                <GiWorld /> Brand: StrujNova Energy
                            </p>






















                            {/* Quotation / Feature Highlight */}
                            {/* <div className="quotation-section">
                                <blockquote>
                                    Strujnova DC UltraFast 350 kW delivers ultra-high-speed charging with maximum efficiency, designed for highways and public stations. Reliable, robust, and ready for the future of electric mobility.
                                </blockquote>
                            </div> */}

                            {/* Connector Details Section */}
                            {/* <div className="connector-section">
                                <div className="connector-header">
                                    <h3 className="connector-title">
                                        Connector Details
                                        <span className="info-icon">ⓘ</span>
                                    </h3>
                                </div> */}

                            {/* Responsive Wrapper */}
                            {/* <div className="table-responsive">
                                    <table className="connector-table">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Type</th>
                                                <th>kW</th>
                                                <th>Status</th>
                                                <th>Guns</th>
                                                <th>Price</th>
                                               

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>
                                                    <div className="connector-type">
                                                        <div className="connector-icon">⚡</div>
                                                        <span>CCS2</span>
                                                    </div>
                                                </td>
                                                <td><strong>350</strong></td>
                                                <td><span className="status-badge status-available">Available</span></td>
                                                <td>1 Gun</td>
                                                <td>₹45,00,000</td>
                                               
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>
                                                    <div className="connector-type">
                                                        <div className="connector-icon">⚡</div>
                                                        <span>CHAdeMO</span>
                                                    </div>
                                                </td>
                                                <td><strong>350</strong></td>
                                                <td><span className="status-badge status-available">Available</span></td>
                                                <td>2 Gun</td>
                                                <td>₹85,00,000</td>
                                                
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>

            </div>


        </>
    );
}

export default ProductCom_charger;



// <ProductTwo />