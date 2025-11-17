import React from 'react'
import '../../css/service/service.css'

import { GiBatteryPackAlt } from "react-icons/gi";
import { RiGlobalFill } from "react-icons/ri";
import { IoHammer } from "react-icons/io5";


function Services() {
  const servicedata = [
    {
      title: "EV Charging Solutions (End-to-End) Complete hardware + software + operations ecosystem",
      icon: <GiBatteryPackAlt class="custom-icon"/>,
      para: "Tolestiae non recusandae Itaue eau em rerum hic tenetur a sapiente delec aut reiciendis voluptatibus"
    },
    {
      title: "Charge Point Operator (CPO) Services Making charging accessible, affordable & reliable",
      icon: <RiGlobalFill class="custom-icon" />,
      para: "Tolestiae non recusandae Itaue eau em rerum hic tenetur a sapiente delec aut reiciendis voluptatibus"
    },
    {
      title: "Power Electronics & Hardware Manufacturing EV DC Charger Modules Charging Guns (CCS2, Bharat, GB/T)",
      icon: <IoHammer class="custom-icon"/>,
      para: "Tolestiae non recusandae Itaue eau em rerum hic tenetur a sapiente delec aut reiciendis voluptatibus"
    }
  ]
  return (
    <>
      <div className='service_back_color'>
        <div className='container pt-5 pb-5'>
          <p className='custom-our-services'>- Our Service</p>
          <p className='service_title mt-3'>Service Providers for Electric Vehicles</p>

          <div className='mt-5'>
            <div class="row">
              {
                servicedata.map((a) => {
                  return (
                    <>
                      <div class="col-lg-4 col-md-6 col-sm-12">
                        <div class="card custom_service_card mt-3">
                          <div class="card-body">
                            {a.icon}
                            <p class="custom-title1 mt-4">{a.title}</p>
                            <p className='service-card-para'>{a.para}</p>
                            <button className="learn-more-btn">
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


    </>
  )
}

export default Services
