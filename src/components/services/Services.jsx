import React, { useState } from 'react'
import '../../css/service/service.css'

import { GiBatteryPackAlt } from "react-icons/gi";
import { RiGlobalFill } from "react-icons/ri";
import { IoHammer } from "react-icons/io5";
import { MdOutlineConstruction } from "react-icons/md";
import { FaPersonRunning } from "react-icons/fa6";
import { SiEsotericsoftware } from "react-icons/si";
import { FaHandsHoldingCircle } from "react-icons/fa6";

function Services() {

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);



  const servicedata = [
    {
      title: "EV Charging Solutions (End-to-End) ",
      icon: <GiBatteryPackAlt class="custom-icon" />,
      para: "Complete hardware + software + operations ecosystem Our services cover public, commercial, and residential charging setups, fleet charging infrastructure, and complete installation & commissioning.",
      points: [
        "EV DC Fast Charger Manufacturing (30kW–350kW)",
        "EV AC Chargers (3.3kW–22kW)",
        "Fleet charging setup & deployment",
        "Public, Commercial & Residential Charging Solutions",
        "Charger Installation & Commissioning",
        "Multi-brand Charger Repair & Upgradation",
        "24/7 charger monitoring & support"
      ]
    },
    {
      title: "Charge Point Operator (CPO) Services",
      icon: <RiGlobalFill class="custom-icon" />,
      para: "We develop and manage scalable charging networks with a powerful Smart CMS platform. Our CPO services include payment & wallet integration, OCPP backend connectivity, and complete host management & revenue sharing",
      points: [
        "Charging Network Development",
        "Smart CMS Platform",
        "Payment, Wallet & Billing Integration",
        "OCPP Backend & Interoperability",
        "Host management & revenue sharing",
        "Real-time monitoring & analytics",
        "Remote diagnostics & customer support"
      ]
    },
    {
      title: "Engineering & Technical Consultancy",
      icon: <MdOutlineConstruction class="custom-icon" />,
      para: "We offer professional consultancy for EV infrastructure planning for cities, corporate campuses, and fleet operators. Services include load feasibility studies, SLD design, CAD/3D cabinet design, component rating optimization, and energy efficiency guidance.",
      points: [
        "EV infra planning for cities, fleets & corporates",
        "Technical load study & feasibility",
        "Single Line Diagram (SLD) design",
        "CAD/3D cabinet design & thermal study",
        "Component rating selection & optimization",
        "Energy efficiency consulting",
        "Project documentation & EPC support"
      ]
    },
    {
      title: "Training & Skill Development",
      icon: <FaPersonRunning class="custom-icon" />,
      para: "Our training programs include EV charger technology workshops, hands-on sessions for ITI and engineering students, and professional training in OCPP, software systems, and electrical safety. We also conduct load study sessions to enhance technical competency",
      points: [
        "EV charger technology workshops",
        "Technical training for ITI/Engineering students",
        "Software & OCPP protocol training",
        "Electrical safety & load study sessions"
      ]
    },
    {
      title: "Software, IoT & Digital Technology",
      icon: <SiEsotericsoftware class="custom-icon" />,
      para: "Our technology suite includes CMS platforms, mobile applications (User & CPO), and OCPP backend integration. We develop IoT gateways with cloud connectivity, real-time monitoring dashboards, and predictive maintenance systems.",
      points: [
        "CMS (Charger Management System)",
        "Mobile Apps (User + CPO)",
        "OCPP backend integration",
        "IoT gateway + cloud infrastructure",
        "Real-time monitoring dashboard",
        "Predictive maintenance system",
        "Payment gateway & wallet integration"
      ]
    },
    {
      title: "Investment & Partnership Programs",
      icon: <FaHandsHoldingCircle class="custom-icon" />,
      para: "We offer multiple partnership models, including EV charging franchises, landowner collaboration, and investor onboarding for network expansion.",
       points: [
        "EV charging franchise model",
        "Landowner partnership",
        "Investor onboarding for EV network development",
        "Corporate tie-ups & fleet electrification projects",
        "Dealership opportunities"
      ]
    }
  ]

  const handleLearnMore = (card) => {
    setSelected(card);
    setOpen(true);
  };



  return (
    <>
      <div className='service_back_color' data-aos="fade-up">
        <div className='container pt-5 pb-5'>
          <p className='custom-our-services'>- Our Service -</p>
          <p className='service_title mt-3'>Service Providers for Electric Vehicles</p>

          <div className='mt-5'>
            <div class="row">
              {
                servicedata.map((a) => {
                  return (
                    <>
                      <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="card custom_service_card mt-3 equal-height-card">
                          <div class="card-body equal-height-body">
                            {a.icon}
                            <p class="custom-title1 mt-4">{a.title}</p>

                            <p className="service-card-para truncated-text">{a.para}</p>

                            <button
                              className="learn-more-btn card-bottom-btn"
                              onClick={() => handleLearnMore(a)}
                            >
                              Learn More <span className="arrow">&#8594;</span>
                            </button>

                          </div>
                        </div>
                      </div>


                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>

      {open && (
        <div className="popup-overlay">
          <div className="popup-box popup-animate">

            <button className="popup-close" onClick={() => setOpen(false)}>✕</button>

            <h3 className="popup-title">{selected.title}</h3>

            <ul className="popup-list">
              {selected.points?.map((p, i) => (
                <li key={i}><b>{p}</b></li>
              ))}
            </ul>

          </div>
        </div>
      )}



    </>
  )
}

export default Services
