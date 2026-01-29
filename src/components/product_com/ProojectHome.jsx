import React from "react";
import "./product.css";
import { Link } from "react-router-dom";

import charger1 from "../../assets/products/product_DC/product30kw.png";
import charger2 from "../../assets/products/product_DC/product60kw.png";
import charger3 from "../../assets/products/product_DC/product120kw.png";
import charger4 from "../../assets/products/product_DC/product180kwand240kw.png";

const productData = [
    {
        img: charger1,
        category: "EV Charger",
        title: "DC Fast Charger (30 kW)",
        desc: "StrujNova’s 30 kW DC Fast Charger delivers fast, safe, and reliable charging with smart OCPP connectivity for public and commercial EV use.",
        endpoitns: "/our-products-charger",
    },
    {
        img: charger2,
        category: "EV Charger",
        title: "DC Fast Charger (60 kW)",
        desc: "StrujNova’s 60 kW DC Fast Charger delivers high-power, fast, and reliable charging with smart OCPP connectivity for public and commercial EV applications.",
        endpoitns: "/our-products-charger-DC",
    },
    {
        img: charger3,
        category: "EV Charger",
        title: "DC Fast Charger (120 kW)",
        desc: "StrujNova’s 120 kW DC Fast Charger delivers ultra-fast, high-power charging with smart OCPP connectivity for public and commercial EV stations.",
        endpoitns: "/our-products-charger-DC_120",
    },
    {
        img: charger4,
        category: "EV Charger",
        title: "DC Fast Charger (180 kW & 240 kW)",
        desc: "Ultra-high-power DC fast charging for highways and high-demand EV hubs with smart OCPP connectivity.",
        endpoitns: "/our-products-charger-DC_180_and_240",
    },
    {
        img: charger4,
        category: "EV Charger",
        title: "DC Dispenser Charging System",
        desc: "Ultra-high-power DC fast charging for highways and high-demand EV hubs with smart OCPP connectivity.",
        endpoitns: "/our-products-charger-dispencer",
    }





];

function ProductHome() {
    return (
        <section className="blog-section py-5">
            <div className="container">
                <h2 className="text-center mb-2">
                    <span className="myblog">OUR</span>{" "}
                    <span className="blog-highlight">PRODUCTS</span>
                </h2>

                <p className="text-center text-muted mb-5">
                    Strujnova Energy’s EV charging products are built to meet the evolving demands of modern electric mobility. Combining robust hardware, smart software integration, and flexible power configurations, our chargers enable efficient, safe, and future-ready charging infrastructure. Whether for high-capacity public stations or customized fleet solutions, our products are engineered to deliver consistent performance with maximum uptime
                </p>

                <div className="row g-4">
                    {productData.map((product, index) => (
                        <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                            <div className="blog-card">
                                <div className="blog-img-wrapper">
                                    <img
                                        src={product.img}
                                        alt={product.title}
                                        className="blog-img"
                                    />
                                    <div className="blog-img-overlay"></div>
                                </div>
                                <div className="blog-content">
                                    <p className="blog-meta">
                                        <span>{product.category}</span>
                                    </p>

                                    <h5 className="blog-title">{product.title}</h5>
                                    <p className="blog-desc">{product.desc}</p>

                                    <Link
                                        to={product.endpoitns}
                                        className="nav-link-footer"
                                        onClick={() => window.scrollTo(0, 0)}
                                    >
                                        <p className="read-more">View Product →</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProductHome;
