import React, { useState } from 'react'
import '../../css/service/service.css'

import { GiBatteryPackAlt } from "react-icons/gi";
import { RiGlobalFill } from "react-icons/ri";
import { IoHammer } from "react-icons/io5";
import { MdOutlineConstruction } from "react-icons/md";
import { FaPersonRunning } from "react-icons/fa6";
import { SiEsotericsoftware } from "react-icons/si";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import serviceimg from '../../assets/service/service_img-removebg-preview.png'
import serviceCornerImg from '../../assets/footer/footer_img1.png'
import { FaGraduationCap } from "react-icons/fa6";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdFlight } from "react-icons/md";

function Services() {

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const [showTooltip, setShowTooltip] = useState(true);



  const servicedata = [
    {
      title: "Smart & Scalable Complete EV Charging infrastructure",
      icon: <GiBatteryPackAlt class="custom-icon" />,
      para: "Complete hardware + software + operations ecosystem Our services cover public, commercial, and residential charging setups, fleet charging infrastructure, and complete installation & commissioning.",
      points: [
        "EV DC Fast Charger Manufacturing (30kW–350kW)",
        "EV AC Chargers (3.3kW–22kW)",
        "Fleet charging setup & deployment",
        "Public, Commercial & Residential Charging Solutions",
        "Load study and infra requirement analysis",
        "Charger Installation & Commissioning",
        "Multi-brand Charger Repair & Upgradation",
        "Single gun, dual gun & multi-gun Architectures",


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
        "Real-time monitoring & analytics with Remote troubleshooting",
        "Remote diagnostics & customer support",
        "Plug & Charge + Autocharge support with futuristic features",
        "Latest OCPP compatible (1.6J - 2.0.1) controllers with high efficiency Power modules"

      ]
    },
    {
      title: "Engineering & Technical Consultancy",
      icon: <MdOutlineConstruction class="custom-icon" />,
      para: "We offer professional consultancy for EV infrastructure planning for cities, corporate campuses, and fleet operators. Services include load feasibility studies, SLD design, CAD/3D cabinet design, component rating optimization, and energy efficiency guidance.",
      points: [
        "EV infra planning for cities, fleets & corporates",
        "Technical load study & feasibility",

        "Component rating selection & optimization",
        "Energy efficiency consulting",
        "Project documentation & EPC support"
      ]
    },
    {
      title: "Customer focused Support & Maintenance System",
      icon: <RiCustomerService2Fill class="custom-icon" />,
      para: "We provide reliable, customer-first support and maintenance services to ensure uninterrupted EV operations. Our expert team offers proactive monitoring, timely assistance, and efficient maintenance solutions to keep your vehicles and charging infrastructure performing at their best.",
      points: [
        "24/7 technical customer support",
        "Remote and On-site Services",
        "Customer training and product knowledge sessions",
        "Preventive and corrective maintenance",
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
        "Electrical safety & load study sessions",
        "Encouraging people to switch to electric vehicles for a sustainable future",
        "Creating Employment Opportunities in the EV Sector",
        "Supporting Make-in-India and आत्मनिर्भर भारत "

      ]
    },
    {
      title: "Advance IoT, Software & Digital Technology",
      icon: <SiEsotericsoftware class="custom-icon" />,
      para: "Our technology suite includes CMS platforms, mobile applications (User & CPO), and OCPP backend integration. We develop IoT gateways with cloud connectivity, real-time monitoring dashboards, and predictive maintenance systems.",
      points: [
        "CMS (Charger Management System)",
        "Mobile Apps (User + CPO)",
        "OCPP backend integration",
        "IoT gateway + cloud infrastructure",
        "Real-time monitoring dashboard",
        "Predictive maintenance system",
        "Payment gateway & wallet integration",
        "Websocket + OCPP Communication Modules",
        "Custom Software Solutions development Tailored to Client Needs"
      ]
    },
    {
      title: "Engineering, Electrical & Civil Services",
      icon: <FaGraduationCap class="custom-icon" />,
      para: "We offer multiple partnership models, including EV charging franchises, landowner collaboration, and investor onboarding for network expansion.",
      points: [
        "Trasformer Load assessment",
        "LEarthing & Electrical Safety Audit",
        "EV site Readiness Execution",
        "Electrical Turnkey project solutions",
        "Civil groundwork for EV Charging Stations"
      ]
    },
    {
      title: "Investment & Partnership Programs",
      icon: <FaHandsHoldingCircle class="custom-icon" />,
      para: "We offer multiple partnership models, including EV charging franchises, landowner collaboration, and investor onboarding for network expansion.",
      points: [
        "Franchise based EV charging station setups",
        "Landowner partnership",
        "Investor onboarding for EV network development",
        "Corporate tie-ups & fleet electrification projects",
        "Dealership opportunities"
      ]
    },
    {
      title: "Futuristic EV Solutions & Innovations",
      icon: <MdFlight class="custom-icon" />,
      para: "We provide reliable, customer-first support and maintenance services to ensure uninterrupted EV operations. Our expert team offers proactive monitoring, timely assistance, and efficient maintenance solutions to keep your vehicles and charging infrastructure performing at their best.",
      points: [
        "AI-based charging optimization",
        "Fast battery cooling and thermal management",
        "Smart grid integration",
        "V2G (Vehicle-to-Grid), V2V (Vehicle-to-Vehicle) likewise technology compatible architecture",
        "Robotic charging concepts with intelligent AI bots",
        "Wireless Charging (research roadmap)"
      ]
    }
  ]

  const handleLearnMore = (card) => {
    setSelected(card);
    setOpen(true);
  };



  return (
    <>
      <div className="service-hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 text-section">
              <p className="service-subtitle">Our Service</p>
              <p className="service-main-title">
                We provide reliable and innovative solutions for electric vehicle owners and businesses. From charging infrastructure installation to maintenance and support, our team ensures your EV operations run smoothly and efficiently.
              </p>
              <hr className="service-divider d-md-block d-none" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 img-section">
              <div className="image-3d-wrapper">
                <img
                  src={serviceimg}
                  alt="Services"
                  className="service-img image-3d-animate"
                />
              </div>
            </div>


          </div>
        </div>
      </div>


      <div className='service_back_color' data-aos="fade-up">
        <div className='text-center pt-4 header-service-name'>
          <p><b>Company Overview</b></p>
        </div>

        {/* <p className='service_title mt-3'>Service Providers for Electric Vehicles</p> */}
        <div className="intro-container">
          <h2 className="intro-text">
            At our EV service company, we are committed to powering the future with reliable, efficient, and innovative electric mobility solutions.
            From seamless charging infrastructure to expert maintenance and support, we ensure every electric vehicle runs at its best.
            With a focus on sustainability and next-generation technology, we strive to make clean energy accessible for all.
            <span className="highlight"> Charging Today! Tomorrow </span> — driving a greener world, one charge at a time.
          </h2>
        </div>

        <div className='container pb-5'>
          <div className='mt-5'>
            <div class="row justify-content-center">
              {
                servicedata.map((a) => {
                  return (
                    <>
                      <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
                        <div className="service-card">
                          <div className="service-icon">{a.icon}</div>

                          <h4 className="service-title">{a.title}</h4>

                          <p className="service-desc">
                            {a.para}
                          </p>

                          <button
                            className="learn-more-btn"
                            onClick={() => handleLearnMore(a)}
                          >
                            Learn More →
                          </button>
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

      {showTooltip && (
        <div className="fixed-tooltip slide-in">
          <span className="tooltip-text ">
            ⚡<b> Smart EV Charging & Infrastructure Solutions </b>
          </span>

          <span
            className="tooltip-close"
            onClick={() => setShowTooltip(false)}
          >
            ✕
          </span>
        </div>
      )}



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
