import React from "react";
import "../../css/serviceinfo_card/serviceinfo.css";
import { FaShoppingCart } from "react-icons/fa";
import charger350 from '../../assets/service/service1/Smart & Scalable Complete EV Charging infrastructure2.png'
import ProductTwo from "./ProductTwo";

function ProductCom_charger() {
    // 350 kW Charger Specifications
    const chargerSpecs = {
        name: "Strujnova DC UltraFast",
        power: "350 kW",
        connector: "CCS2 / CHAdeMO",
        voltage: "400–1000V DC",
        efficiency: "≥95%",
        chargingTime: "15–20 min (0–80%)",
        usage: "Highway / Public Station",
        price: "₹45,00,000",
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
                                <h2 className="card-title">Charger Details</h2>
                                <div className="badge-group">
                                    <span className="badge badge-online">350kw Charger</span>
                                </div>
                            </div>

                            <div className="details-grid">
                                {/* Left: Details in 2 columns */}
                                <div className="details-column">
                                    <div className="detail-item">
                                        <span className="detail-label">Device Name</span>
                                        <span className="detail-value">{chargerSpecs.name} 350 kW</span>
                                    </div>

                                    <div className="detail-item">
                                        <span className="detail-label">Power</span>
                                        <span className="detail-value">{chargerSpecs.power}</span>
                                    </div>

                                    <div className="detail-item">
                                        <span className="detail-label">Connector Type</span>
                                        <span className="detail-value">{chargerSpecs.connector}</span>
                                    </div>

                                    <div className="detail-item">
                                        <span className="detail-label">Voltage</span>
                                        <span className="detail-value">{chargerSpecs.voltage}</span>
                                    </div>

                                    <div className="detail-item">
                                        <span className="detail-label">Efficiency</span>
                                        <span className="detail-value">{chargerSpecs.efficiency}</span>
                                    </div>

                                    <div className="detail-item">
                                        <span className="detail-label">Charging Time</span>
                                        <span className="detail-value">{chargerSpecs.chargingTime}</span>
                                    </div>

                                    <div className="detail-item">
                                        <span className="detail-label">Usage</span>
                                        <span className="detail-value">{chargerSpecs.usage}</span>
                                    </div>

                                    <div className="detail-item">
                                        <span className="detail-label">Price</span>
                                        <span className="detail-value">{chargerSpecs.price}</span>
                                    </div>
                                </div>

                                {/* Right: Product Image */}
                                <div className="product-image">
                                    <img src={charger350} alt="Charger"  />
                                </div>
                            </div>



                            {/* Quotation / Feature Highlight */}
                            <div className="quotation-section">
                                <blockquote>
                                    Strujnova DC UltraFast 350 kW delivers ultra-high-speed charging with maximum efficiency, designed for highways and public stations. Reliable, robust, and ready for the future of electric mobility.
                                </blockquote>
                            </div>

                            {/* Connector Details Section */}
                            <div className="connector-section">
                                <div className="connector-header">
                                    <h3 className="connector-title">
                                        Connector Details
                                        <span className="info-icon">ⓘ</span>
                                    </h3>
                                    {/* <button className="session-history-btn">
                                    <span>🕐</span>
                                    Session History
                                </button> */}
                                </div>

                                {/* Responsive Wrapper */}
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
                                                {/* <th>Purches</th> */}

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
                                                {/* <td>
                                                    <button className="purchase-btn">
                                                        <span className="btn-text">Buy Now</span>
                                                        <FaShoppingCart className="btn-icon" />
                                                    </button>
                                                </td> */}
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
                                                {/* <td>
                                                    <button className="purchase-btn">
                                                        <span className="btn-text">Buy Now</span>
                                                        <FaShoppingCart className="btn-icon" />
                                                    </button>
                                                </td> */}
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>


            <ProductTwo/>
        </>
    );
}

export default ProductCom_charger;
