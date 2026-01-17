import React from "react";
import "../../css/serviceinfo_card/serviceinfo.css";
import { FaShoppingCart } from "react-icons/fa";
import charger22 from '../../assets/AC Modified/ChatGPT Image Jan 13, 2026, 10_44_42 PM.png'
import charger_imgs from '../../assets/AC Modified/WhatsApp Image 2025-12-29 at 11.15.05 PM.jpeg'
import charger_img1 from '../../assets/AC Modified/WhatsApp Image 2025-12-29 at 11.13.43 PM.jpeg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



function ProductTwo() {

    const twoWheelerSpecs = {
        name: "Strujnova Two-Wheeler Charger",
        power: "7 kW",
        connector: "Type 2",
        voltage: "230V AC",
        efficiency: "≥90%",
        chargingTime: "2–3 hours (0–100%)",
        usage: "Residential / Small Station",
        price: "₹75,000",
    };


    return (
        <>
            <div className="container charger-container">
                <div className="row">
                    <div className="charger-card m-2">
                        <div className="card-body">
                            {/* Header Section */}
                            <div className="card-header">
                                <h2 className="card-title">Two-Wheeler Charger Details</h2>
                                <div className="badge-group">
                                    <span className="badge badge-online">7 kW Charger</span>
                                </div>
                            </div>

                            <div className="details-grid">
                                {/* Left: Details in 2 columns */}
                                <div className="details-column">
                                    <div className="detail-item">
                                        <span className="detail-label">Device Name</span>
                                        <span className="detail-value">{twoWheelerSpecs.name}</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">Power</span>
                                        <span className="detail-value">{twoWheelerSpecs.power}</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">Connector Type</span>
                                        <span className="detail-value">{twoWheelerSpecs.connector}</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">Voltage</span>
                                        <span className="detail-value">{twoWheelerSpecs.voltage}</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">Efficiency</span>
                                        <span className="detail-value">{twoWheelerSpecs.efficiency}</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">Charging Time</span>
                                        <span className="detail-value">{twoWheelerSpecs.chargingTime}</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">Usage</span>
                                        <span className="detail-value">{twoWheelerSpecs.usage}</span>
                                    </div>
                                    <div className="detail-item">
                                        <span className="detail-label">Price</span>
                                        <span className="detail-value">{twoWheelerSpecs.price}</span>
                                    </div>
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
                                            <img src={charger22} alt="Charger 1" />
                                        </SwiperSlide>

                                        <SwiperSlide className="image-slide">
                                            <img src={charger_imgs} alt="Charger 2" />
                                        </SwiperSlide>

                                        <SwiperSlide className="image-slide">
                                            <img src={charger_img1} alt="Charger 3" />
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>

                            {/* Quotation Section */}
                            <div className="quotation-section">
                                <blockquote>
                                    Strujnova Two-Wheeler Charger 7 kW delivers safe and efficient charging for residential or small public stations. Compact, reliable, and designed for urban electric mobility.
                                </blockquote>
                            </div>

                            {/* Connector Details */}
                            <div className="connector-section">
                                <div className="connector-header">
                                    <h3 className="connector-title">
                                        Connector Details
                                        <span className="info-icon">ⓘ</span>
                                    </h3>
                                </div>
                                <div className="table-responsive">
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
                                                        <span>Type 2</span>
                                                    </div>
                                                </td>
                                                <td><strong>7</strong></td>
                                                <td><span className="status-badge status-available">Available</span></td>
                                                <td>1 Gun</td>
                                                <td>₹75,000</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>
                                                    <div className="connector-type">
                                                        <div className="connector-icon">⚡</div>
                                                        <span>CCS1</span>
                                                    </div>
                                                </td>
                                                <td><strong>7</strong></td>
                                                <td><span className="status-badge status-available">Available</span></td>
                                                <td>2 Guns</td>
                                                <td>₹1,25,000</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* <div className="col-lg-6 d-flex justify-content-center align-items-center image-container">
                        <img src={charger350} className="img-fluid" />
                    </div> */}



            </div>
        </>
    );
}

export default ProductTwo;
