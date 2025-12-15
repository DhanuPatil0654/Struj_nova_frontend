import React, { useState } from 'react';
import './home.css';
import homeimg from '../../assets/Home/charger_img.png';
import Features from '../Features/Features';
function Homepage() {

  


  const isTouchDevice = () => {
    return (
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0
    );
  };

  const handleMouseMove = (e) => {
    if (isTouchDevice()) return;

    const img = e.currentTarget.querySelector("img");
    const rect = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 20;
    const rotateY = (x - centerX) / 20;

    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = (e) => {
    if (isTouchDevice()) return;

    const img = e.currentTarget.querySelector("img");
    img.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  const [showTooltip, setShowTooltip] = useState(true);




  return (
    <>

      <div className="background_color my-5" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-stretch position-relative"> {/* changed align-items-center to stretch */}

            {/* Left Content */}
            <div className="col-lg-5 col-md-12 text-lg-start text-center mb-4 mb-lg-0 d-flex">
              <div className="text-bg-box align-self-center">
                <h1 className="head_text">STRUJNOVA ENERGY</h1>
                <p className="tagline">Charging Tomorrow, Today!</p>
                <p className="ev-para">
                  StrujNova Energy is driving the electric future with smart EV charging
                  solutions, advanced power systems, and sustainable energy innovation.
                  We empower businesses and individuals to adopt clean mobility with
                  reliable, efficient, and future-ready EV infrastructure.
                </p>
              </div>
            </div>

            {/* Vertical Divider */}
            <div className="col-lg-2 d-none d-lg-flex justify-content-center">
              <span className="vertical-divider"></span>
            </div>

            {/* Right Image */}
            <div className="col-lg-5 col-md-12 text-lg-end text-center d-flex">
              <div
                className="image-3d-wrapper align-self-center"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={homeimg}
                  className="img-fluid home-img image-3d"
                  alt="EV"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Features />

      {showTooltip && (
        <div className="fixed-tooltip slide-in">
          <span className="tooltip-text ">
            ⚡<b> Powering the Future of Electric Mobility </b>
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
  );
}

export default Homepage;












// import React from 'react';
// import './home.css';
// import first_img_home from '../../assets/Home/homepage_first.png';
// import Aboutpage from '../About/Aboutpage';
// import CustomersSpeak from './CustomersSpeak';
// import Introduction from './Introduction';
// import Features from '../Features/Features';

// function Homepage() {
//   return (
//     <>
//       <div className='background_color 'data-aos="fade-up" >
//         <h1 className='head_text'>STRUJNOVA ENERGY</h1>
//         <p>Charging Tomorrow, Today !</p>
//         <img src={first_img_home} class="img-fluid" alt="..."></img>
//       </div>
//       <Introduction />
//       <Features />
//       <CustomersSpeak />


//     </>
//   );
// }

// export default Homepage;
