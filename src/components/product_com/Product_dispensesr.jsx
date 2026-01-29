import React from "react";
import "../../css/serviceinfo_card/serviceinfo.css";
import { FaShoppingCart } from "react-icons/fa";
import charger350 from '../../assets/service/service1/Smart & Scalable Complete EV Charging infrastructure2.png'



import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { MdOutlinePhoneCallback } from "react-icons/md";
import { GiWorld } from "react-icons/gi";

import charger1 from "../../assets/products/product_DC/productDisender.png";
import charger2 from "../../assets/service/service1/Smart & Scalable Complete EV Charging infrastructure2.png";
import charger3 from "../../assets/service/service1/Smart & Scalable Complete EV Charging infrastructure2.png";

function ProductDC_dispensesr() {

  const DCchargerData = {
    electrical_specification: [
      { label: "Device Name", value: "DC Dispenser" },
      { label: "Total System Power", value: "120 kW – 600 kW (scalable)" },
      { label: "Power Module Rating", value: "30 / 40 / 60 kW hot-swappable modules" },
      { label: "Output Voltage Range", value: "200 – 1000 V DC" },
      { label: "Maximum Output Current", value: "Up to 600 A per dispenser" },
      { label: "Input Supply", value: "3-Phase AC" },
      { label: "Input Voltage", value: "380 – 415 V AC" },
      { label: "Input Frequency", value: "50 Hz" },
      { label: "Power Factor", value: "≥ 0.99" },
      { label: "Efficiency", value: "≥ 95%" }
    ],
    charging_interface: [
      { feature: "No. of Dispensers", details: "2 to 12 (system-dependent)" },
      { feature: "Connectors", details: "CCS2 (optional CHAdeMO / GB-T)" },
      { feature: "Cable Type", details: "Liquid-cooled (for high current)" },
      { feature: "Charging Mode", details: "Mode-4 DC Fast / Ultra-Fast Charging" },
      { feature: "Power Allocation", details: "Dynamic & priority-based" }
    ],
    smartConnectivity: [
      { feature: "Communication Protocol", Support: "OCPP 1.6J (Upgradeable to OCPP 2.0.1)" },
      { feature: "Internal Communication", Support: "CAN / Ethernet" },
      { feature: "Network Interfaces", Support: "4G LTE / Ethernet / Wi-Fi" },
      { feature: "Backend Integration", Support: "CMS, billing, EMS & analytics" },
      { feature: "Remote Operations", Support: "Power allocation, diagnostics, OTA updates" }
    ],
    MechanicalandEnviornmental: [
      { feature: "Mounting Type", Support: "Floor-mounted " },
      { feature: "Enclosure Material", Support: "Powder-coated steel" },
      { feature: "Ingress Protection", Support: "IP54 / IP55" },
      { feature: "Cooling Method", Support: "Forced air cooling" },
      { feature: "Operating Temperature", Support: "–20 °C to +55 °C" },
      { feature: "Operating Humidity", Support: "Up to 95% (non-condensing)" },
      { feature: "Noise Level", Support: "< 70 dB" },

    ]

  };

  return (
    <>

      <div className="container charger-container">
        <div className="row">
          <div className="charger-card m-2">
            <div className="card-body">
              {/* Header Section */}
              <div className="card-header">
                <h2 className="card-title">StrujNova Energy – DC Dispenser Charging System</h2>
                <div className="badge-group">
                  {/* <span className="badge badge-online">120 kw Charger</span> */}
                </div>
              </div>

              <p>
                StrujNova’s DC Dispenser Charging System is a centralized ultra-fast charging architecture designed for high-capacity EV charging hubs, highways, fleet depots, bus terminals, and urban fast-charging parks.
                The system consists of a centralized Power Cabinet housing high-density DC power modules and multiple remote DC Dispensers that deliver power to vehicles. This architecture enables dynamic power sharing, higher utilization, reduced CAPEX per outlet, and simplified maintenance, making it ideal for scalable, multi-vehicle charging environments.

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

                    {/* <SwiperSlide className="image-slide">
                                            <img src={charger2} alt="Charger 2" />
                                        </SwiperSlide>

                                        <SwiperSlide className="image-slide">
                                            <img src={charger3} alt="Charger 3" />
                                        </SwiperSlide> */}
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

export default ProductDC_dispensesr;


