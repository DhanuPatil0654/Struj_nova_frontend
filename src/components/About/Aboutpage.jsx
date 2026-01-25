import React, { useState } from 'react'
// import aboutimg from '../../assets/about/about_page.jpg'
import chargerimg from '../../assets/about/chargerimg.png'
import chargermonry from '../../assets/about/chargermoney.png'
import './about.css'
import aboutimg1 from '../../assets/about/aboutus_img.jpg'
import { FaArrowRight } from "react-icons/fa";
import Vission_mission from '../vissionmission/Vission_mission'
import aboutimg from '../../assets/about/aboutpage_img-removebg-preview.png'
import { GiBurningEye } from "react-icons/gi";
function Aboutpage() {

  const [showTooltip, setShowTooltip] = useState(true);



  return (
    <>

      <div className="service-hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-12 text-section">
              <p className="service-subtitle">About Us</p>
              <p className="service-main-title">
                StrujNova is a next-generation electric mobility and clean-energy company powering India’s transition to a smarter, greener future. We develop high-performance EV chargers and intelligent energy solutions backed by strong R&D—delivering scalable, future-ready infrastructure for businesses, fleets, and smart cities.
              </p>
              <hr className="service-divider d-md-block d-none" />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 img-section">
              <div className="image-3d-wrapper">
                <img
                  src={aboutimg}
                  alt="Services"
                  className="service-img image-3d-animate"
                />
              </div>
            </div>


          </div>
        </div>
      </div>
      {/* <div className="about_para">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12 p-0 m-0">
            <div className="about_content">
              <p className="about_title">
                <span>|</span>
                <span className="typing_text"> About Us</span>
              </p>

              <p className='p-0 m-0'>
                StrujNova is a next-generation electric mobility and clean-energy company committed to accelerating India’s transition toward a smarter, greener, and fully sustainable future. We design and develop high-performance EV chargers, power electronics, CMS platforms, IoT-driven energy solutions, and renewable-integrated infrastructure that redefine how India charges, moves, and progresses.With deep expertise in R&D, manufacturing, and energy technology, we create scalable solutions for individuals, businesses, fleets, industries, and smart cities — enabling seamless charging, intelligent energy distribution, and long-term operational excellence.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 p-0 m-0">
            <img src={aboutimg} alt="about" className="img-fluid w-100" />
          </div>

        </div>




      </div> */}
      {/* </div> */}

      <div className='container mt-5'>
        <p className='para_about'>
          At StrujNova, our expertise in R&D, manufacturing, and energy technology enables us to deliver scalable EV and clean-energy solutions for individuals, enterprises, fleets, industries, and smart cities. We focus on seamless charging, intelligent energy management, and reliable long-term performance.
          Driven by sustainability and innovation, we support India’s transition toward energy independence through indigenous technology and future-ready infrastructure. Our mission is to make clean mobility efficient, accessible, and dependable—empowering businesses and communities while reducing environmental impact.
          At StrujNova, we are shaping India’s electric future—where mobility is cleaner, energy is smarter, and progress is sustainable.
          {/* At StrujNova deep expertise in R&D, manufacturing, and energy technology, we create scalable solutions for individuals, businesses, fleets, industries, and smart cities — enabling seamless charging, intelligent energy distribution, and long-term operational excellence.
          Our work is driven by sustainability, user convenience, national progress, and a commitment to clean energy for all.As the first-generation pioneers of India’s EV and clean-energy revolution, we take responsibility for advancing the nation’s technological independence, strengthening indigenous innovation, and supporting the vision of an E-Atmanirbhar Bharat. We believe that clean mobility should be effortless, accessible, and open to everyone — empowering communities while reducing environmental impact.
          At StrujNova, we are not just building products.
          We are building India’s electric era — a future where mobility is cleaner, energy is smarter, and progress is sustainable. */}
        </p>
      </div>
      <Vission_mission />
      {showTooltip && (
        <div className="fixed-tooltip slide-in">
          <span className="tooltip-text ">
            🚀<b>  Next-Gen EV Charging, Software & Energy Solutions </b>
          </span>

          <span
            className="tooltip-close"
            onClick={() => setShowTooltip(false)}
          >
            ✕
          </span>
        </div>
      )}


    </>
  )
}

export default Aboutpage
