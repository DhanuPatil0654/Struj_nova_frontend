import React from 'react'
import '../../css/vission_mission/vission_mission.css'
function Vission_mission() {
    return (
        <>
            <div className='vission_mission_back'>
                <div className='container pt-5 pb-5 '>
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="card vission_card">
                                <div class="card-body">
                                    <p className='vission_mission_title'><span>|</span> VISSION</p>
                                    <p className='vission_para mt-3'>
                                        Our vision is to drive India’s evolution into a clean, intelligent, and energy-independent nation by pioneering world-class EV and sustainable energy technologies. We aim to build an ecosystem that empowers every citizen, fuels economic growth, and safeguards the planet for future generations. Through innovation, reliability, and a commitment to sustainability, we envision India as a global leader in smart mobility and green energy
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="card vission_card">
                                <div class="card-body">
                                    <p className='vission_mission_title'><span>|</span> MISSION</p>
                                    <p className='vission_para mt-3'>
                                        Our mission is to accelerate the nation’s transition to clean mobility by building advanced EV charging systems and intelligent CMS platforms that make electric vehicle adoption seamless and efficient. We strive to design a future-ready energy infrastructure that integrates renewable power, smart-grid technology, and high-performance storage solutions to ensure stability and sustainability.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Vission_mission
