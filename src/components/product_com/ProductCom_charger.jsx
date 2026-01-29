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

import charger1 from "../../assets/products/product_DC/product30kw.png";
import charger2 from "../../assets/products/product_DC/product30kw_and80.png";
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

            <div className="container charger-container">
                <div className="row">
                    <div className="charger-card m-2">
                        <div className="card-body">
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
                                            <img src={charger2} alt="Charger 1" />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                            <hr></hr>

                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <b><p>Charging Interface</p></b>
                                    <div className="table-responsive mb-3">
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
                                <div className="col-lg-6 col-md-6 col-sm-12 ">

                                    <b><p> Why StrujNova Energy?</p></b>
                                    <ul className="ev-bullets ">
                                        <li>
                                            Indigenous engineering & manufacturing
                                        </li>
                                        <li>
                                            Scalable & future-ready design
                                        </li>
                                        <li>
                                            CMS-ready smart chargers
                                        </li>
                                        <li>
                                            Service-focused architecture
                                        </li>
                                        <li>
                                            Custom branding & configuration support
                                        </li>
                                    </ul>

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

                        </div>
                    </div>
                </div>

            </div>



        </>
    );
}

export default ProductCom_charger;



