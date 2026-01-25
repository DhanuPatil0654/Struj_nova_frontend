
import React from "react";
import "../../css/vission_mission/vission_mission.css";
import { FaTrophy } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { GiBurningEye } from "react-icons/gi";
import { GiTiredEye } from "react-icons/gi";
import { GiCyberEye } from "react-icons/gi";
import { GiMissileLauncher } from "react-icons/gi";
import { GiSubmarineMissile } from "react-icons/gi";
function Vission_mission() {
    return (
        <>
            <div className="vission_mission_back" data-aos="fade-up">
                <div className="container pt-5 pb-5">
                   <div className="row justify-content-center align-items-stretch">


                        <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                            <div className="vission_card electric-accent">
                                <div className="icon_circle">
                                    <GiCyberEye size={40} color="#fff" />
                                </div>

                                <h4 className="vission_title">Our Vision</h4>
                                <p className="vission_text ">
                                    Our vision is to drive India’s evolution into a clean,
                                    intelligent, and energy-independent nation by pioneering
                                    world-class EV and sustainable energy technologies.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
                            <div className="vission_card">
                                <div className="icon_circle">
                                    <GiSubmarineMissile size={40} color="#fff" />
                                </div>
                                <h4 className="vission_title">Our Mission</h4>
                                <p className="vission_text">
                                    Our mission is to accelerate the nation’s transition to clean
                                    mobility by building advanced EV charging systems and CMS
                                    platforms that make EV adoption seamless and efficient.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Vission_mission;
