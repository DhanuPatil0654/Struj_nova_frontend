import React from 'react'
import aboutimg from '../../assets/about/about_page.jpg'
import chargerimg from '../../assets/about/chargerimg.png'
import chargermonry from '../../assets/about/chargermoney.png'
import './about.css'
function Aboutpage() {
  return (
    <>
      <div class="container mt-5">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12">
            <p className='aboutus_name'>| About Us - </p>
            <p className='we_pro_para'>We Provide Best Charging Services For Your EV</p>
            <p className='pt-2 text-justify'>At Struj Nova, we are driving the future of electric mobility by delivering innovative and reliable EV charging solutions.</p>
            <p className='text-justify'><b style={{ color: "rgba(36, 77, 36, 1)" }}>Our mission is to make electric vehicle charging simple, accessible, and efficient for everyone.</b> We provide smart EV chargers, CSM (Charger Station Management) systems, and a user-friendly mobile application that allows users to monitor, control, and manage their charging sessions with ease</p>




          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 ">
            {/* <img src={aboutimg} class="img-fluid" alt="..."></img> */}
            <div className='row mt-5'>
              <div className='col-lg-6 col-md-12 col-sm-12 mb-5'>
                <div className="card custom-card position-relative" style={{ paddingLeft: '32px', paddingTop: '24px' }}>
                  <div
                    className="overlap-circle position-absolute"
                    style={{
                      top: '-24px',
                      left: '-24px',
                      width: '64px',
                      height: '64px',
                      background: '#fff',
                      borderRadius: '50%',
                      boxShadow: '0 0 6px rgba(0,0,0,0.10)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '2.5px solid #eee',
                      zIndex: 2
                    }}
                  >
                    {/* Circular progress bar (SVG) */}
                    <div className="progress-circle">
                      <svg width="54" height="54">
                        <circle
                          cx="27" cy="27" r="25"
                          fill="none"
                          stroke="#3cb2ec"
                          strokeWidth="4"
                          strokeDasharray="157"
                          strokeDashoffset="0"
                          className="progress-bg"
                        />
                        <circle
                          cx="27" cy="27" r="25"
                          fill="none"
                          stroke="#44ef77"
                          strokeWidth="4"
                          strokeDasharray="157"
                          strokeDashoffset="125"
                          className="progress-bar"
                        />
                      </svg>
                    </div>
                    <img
                      src={chargerimg}
                      alt="Charger"
                      style={{
                        width: '52px',
                        height: '52px',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        background: '#e9f3fd',
                        position: 'absolute'
                      }}
                    />
                  </div>
                  <div className="card-body text-justify">
                    At Struj Nova, Charging your electric vehicle is now simpler and smarter with Struj Nova.
                    Our advanced EV chargers are designed for fast, safe, and efficient charging, whether at home, work, or public stations.
                  </div>
                </div>
              </div>
              <div className='col-lg-6 col-md-12 col-sm-12 mb-3'>
                <div className="card custom-card position-relative" style={{ paddingLeft: '32px', paddingTop: '24px' }}>
                  <div
                    className="overlap-circle position-absolute"
                    style={{
                      top: '-24px',
                      left: '-24px',
                      width: '64px',
                      height: '64px',
                      background: '#fff',
                      borderRadius: '50%',
                      boxShadow: '0 0 6px rgba(0,0,0,0.10)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '2.5px solid #eee',
                      zIndex: 2
                    }}
                  >
                    {/* Circular progress bar (SVG) */}
                    <div className="progress-circle">
                      <svg width="54" height="54">
                        <circle
                          cx="27" cy="27" r="25"
                          fill="none"
                          stroke="#3cb2ec"
                          strokeWidth="4"
                          strokeDasharray="157"
                          strokeDashoffset="0"
                          className="progress-bg"
                        />
                        <circle
                          cx="27" cy="27" r="25"
                          fill="none"
                          stroke="#44ef77"
                          strokeWidth="4"
                          strokeDasharray="157"
                          strokeDashoffset="125"
                          className="progress-bar"
                        />
                      </svg>
                    </div>
                    <img
                      src={chargerimg}
                      alt="Charger"
                      style={{
                        width: '52px',
                        height: '52px',
                        objectFit: 'cover',
                        borderRadius: '50%',
                        background: '#e9f3fd',
                        position: 'absolute'
                      }}
                    />
                  </div>
                  <div className="card-body text-justify">
                    At Struj Nova, we provide the best charging solutions designed for speed, reliability, and affordability. Our smart EV chargers and cost-efficient CSM platform make powering your vehicle easier than ever.                  </div>
                </div>
              </div>
            </div>

          </div>
          


        </div >
      </div >
    </>
  )
}

export default Aboutpage
