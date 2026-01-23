import React from 'react';
import '../../css/blogs/Blogdetail.css';
import { FaChargingStation } from "react-icons/fa6";
import { RiChargingPile2Fill } from "react-icons/ri";
import { FaCarAlt } from "react-icons/fa";
import { MdOutlineNaturePeople } from "react-icons/md";
import { PiPottedPlantFill } from "react-icons/pi";
import { MdElectricBolt } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";

import { FaBatteryFull } from "react-icons/fa"; // Using react-icons for battery icon
import { GiBatteryPackAlt } from 'react-icons/gi';
import { FaJetFighterUp } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";
import { MdOutlineTwoWheeler } from "react-icons/md";

function Blogdetail() {


    const servicedata = [
        {
            title: "Battery Electric Vehicles (BEVs)",
            icon: <GiBatteryPackAlt class="custom-icon" />,
            // para: "Complete hardware + software + operations ecosystem Our services cover public, commercial, and residential charging setups, fleet charging infrastructure, and complete installation & commissioning.",
            points: [
                "Fully electric",
                "Run only on battery power",
                "Need external charging",
                "Zero emissions",
                "Examples:Electric cars, e-bikes, e-scooters",



            ]
        },
        {
            title: "Plug-in Hybrid Electric Vehicles (PHEVs)",
            icon: <FaJetFighterUp class="custom-icon" />,
            // para: "Complete hardware + software + operations ecosystem Our services cover public, commercial, and residential charging setups, fleet charging infrastructure, and complete installation & commissioning.",
             points: [
                "Use both battery and fuel",
                "Can be charged externally",
                "Switch to fuel if battery runs out",
                "Best for: Long-distance users transitioning to EVs",
            ]
        },
        {
            title: "Hybrid Electric Vehicles (HEVs)",
            icon: <FaCarSide class="custom-icon" />,
            // para: "Complete hardware + software + operations ecosystem Our services cover public, commercial, and residential charging setups, fleet charging infrastructure, and complete installation & commissioning.",
             points: [
                "Use fuel + small electric motor",
                "Battery charges automatically (no plug)",
                "Better mileage than regular vehicles",
                "Note: Not fully electric, but more efficient",
            ]
        },
        {
            title: "Electric Two-Wheelers & Three-Wheelers",
            icon: <MdOutlineTwoWheeler class="custom-icon" />,
            // para: "Complete hardware + software + operations ecosystem Our services cover public, commercial, and residential charging setups, fleet charging infrastructure, and complete installation & commissioning.",
             points: [
                "Widely adopted in India",
                "Ideal for daily commuting and last-mile delivery",
                "Lower cost and faster adoption",
                "Examples:E-scooters, e-rickshaws, delivery bikes",
            ]
        },

    ]

    return (
        <>
            <div className='blogsStart p-3'>
                <div class="card blogsstratcard">
                    <span className="card-badge"></span>
                    <div class="card-body">
                        <div className='blog-title'>
                            <h1 className='title_blog'>What Are EVs and Why Charging Infrastructure Matters ?</h1>
                        </div>
                        <div className='blog-intro'>
                            <p className='blog-intro-para text-justify'>
                                Electric Vehicles (EVs) are vehicles powered by electricity instead of petrol or diesel. They use electric motors and rechargeable batteries to run, making them cleaner, quieter, and more energy-efficient than traditional internal combustion engine vehicles. EVs produce zero tailpipe emissions, helping reduce air pollution and carbon emissions, which makes them a key solution for sustainable transportation.
                            </p>
                        </div>

                        <div className="ev-timeline">
                            <div className="timeline-item">
                                <span className="timeline-dot"></span>
                                <p className="text-justify">
                                    EVs also offer lower running and maintenance costs. Since they have fewer
                                    moving parts than conventional vehicles, they require less servicing and
                                    are cheaper to operate over time. With advancements in battery technology,
                                    EVs now offer improved driving range, faster charging, and better
                                    performance, making them a practical choice for daily use.
                                </p>
                            </div>

                            <div className="timeline-item">
                                <span className="timeline-dot"></span>
                                <p className="text-justify">
                                    However, the success of electric vehicles depends heavily on reliable
                                    charging infrastructure. Just as petrol vehicles need fuel stations, EVs
                                    require accessible and efficient charging points. A strong charging
                                    network ensures that EV users can charge their vehicles conveniently at
                                    homes, workplaces, highways, and public locations.
                                </p>
                            </div>

                            <div className="timeline-item">
                                <span className="timeline-dot"></span>
                                <p className="text-justify">
                                    Well-developed charging infrastructure reduces range anxiety, encourages
                                    more people to adopt EVs, and supports long-distance travel. Fast chargers,
                                    smart charging solutions, and renewable energy integration further improve
                                    the EV ecosystem by making charging quicker, safer, and more sustainable.
                                </p>
                            </div>
                        </div>

                        <div>
                            <p>
                               Electric Vehicles (EVs) are revolutionizing the way we move, offering a smarter, cleaner alternative to traditional petrol and diesel vehicles. By running on rechargeable batteries and electric motors, EVs provide a quieter ride, lower emissions, and significant energy savings. But the true potential of EVs comes alive only when paired with reliable charging infrastructure.                            </p>
                            <div className="container why-charge-wrapper">
                                <div className="row align-items-stretch justify-content-center">

                                    <p className="text-center mb-4 demo">
                                        Why Charging Infrastructure Is Important ?
                                    </p>

                                    {/* Left Column */}
                                    <div className="col-lg-5 col-md-6 col-sm-12 d-flex justify-content-lg-end justify-content-center">
                                        <ul className="list-unstyled why-list text-lg-end text-center pe-lg-4">
                                            <li>
                                                <RiChargingPile2Fill className="icon" />
                                                <span>Ensures EV users can charge anytime, anywhere</span>
                                            </li>
                                            <li>
                                                <FaCarAlt className="icon" />
                                                <span>Reduces range anxiety (fear of battery running out)</span>
                                            </li>
                                            <li>
                                                <MdElectricBolt className="icon" />
                                                <span>Accelerates the transition from fossil fuels to electric mobility</span>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* Vertical Divider */}
                                    <div className="col-lg-1 d-none d-lg-flex justify-content-center">
                                        <div className="vertical-line"></div>
                                    </div>

                                    {/* Right Column */}
                                    <div className="col-lg-5 col-md-6 col-sm-12 d-flex justify-content-lg-start justify-content-center">
                                        <ul className="list-unstyled why-list text-lg-start text-center ps-lg-4">
                                            <li>
                                                <MdOutlineNaturePeople className="icon" />
                                                <span>Enables EV adoption across cities, highways, offices, and homes</span>
                                            </li>
                                            <li>
                                                <PiPottedPlantFill className="icon" />
                                                <span>Supports India’s clean energy and sustainability goals</span>
                                            </li>
                                            <li>
                                                <FaRupeeSign className="icon" />
                                                <span>
                                                    Creates new economic opportunities in EV charging, maintenance, and renewable energy
                                                </span>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <p className='text-justify'>
                                Without widespread chargers, EV adoption slows down—no matter how good the vehicles are. A strong charging ecosystem is the backbone of the EV revolution. Reliable and accessible charging stations not only reduce “range anxiety” for EV owners but also encourage more people to consider switching from traditional petrol and diesel vehicles. Efficient charging networks integrated with renewable energy sources can make EVs more sustainable and cost-effective. Moreover, government support, strategic placement of chargers, and fast-charging technologies are essential to ensure that EVs become a practical choice for daily commuting, long-distance travel, and commercial transportation alike.
                            </p>

                            <b><h1 className='title_blog1 text-center'>Why India Needs EVs Today ?</h1></b>
                            <p className='text-justify'>
                                India is at a turning point in its journey toward cleaner and smarter transportation. EV adoption is no longer just an option—it’s becoming a necessity. Rising fuel costs, worsening air pollution, and the urgent need to reduce carbon emissions make the shift to electric vehicles crucial. But the benefits don’t stop there. EVs also promise lower running costs, quieter rides, and a chance for India to strengthen its energy security by reducing dependence on imported oil. With the right infrastructure and supportive policies, switching to EVs is not just a choice for the environment—it’s a step toward a smarter, more sustainable, and cost-effective future for every Indian commuter.
                            </p>
                            <div className="ev-card p-3">
                                <p>
                                    <b>1. Rising Fuel Costs</b>
                                    <span>
                                        Petrol and diesel prices continue to increase, impacting daily commuters and businesses. EVs significantly reduce running costs.
                                    </span>
                                </p>
                            </div>
                            <div className="ev-card p-3">
                                <p>
                                    <b>2. Air Pollution & Climate Change</b>
                                    <span>
                                        Transport is one of the biggest contributors to air pollution in Indian cities. EVs produce zero tailpipe emissions, improving air quality.
                                    </span>
                                </p>
                            </div>
                            <div className="ev-card p-3">
                                <p>
                                    <b>3. Energy Security</b>
                                    <span>
                                        India imports a large portion of its crude oil. EVs reduce dependence on imports and promote energy independence.
                                    </span>
                                </p>
                            </div>
                            <div className="ev-card p-3">
                                <p>
                                    <b>4. Government Support</b>
                                    <span>
                                        India strongly promotes EVs through FAME II scheme State EV policiesSubsidies & tax benefits Charging infrastructure development
                                    </span>
                                </p>
                            </div>
                            <div className="ev-card p-3">
                                <p>
                                    <b>5. Economic & Job Growth</b>
                                    <span>
                                        The EV ecosystem creates jobs in: Charging infrastructure Manufacturing Software & energy management Maintenance & services EVs are not just vehicles—they are part of India’s sustainable future.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className='blog-title mb-5'>
                            <h1 className='title_blog mt-5'>Types of Electric Vehicles Explained Simply </h1>
                            <p className='text-center mb-5'>There are different types of electric vehicles based on how they use electricity and fuel.</p>
                        </div>

                        <div className="row justify-content-center mt-5">
                            {servicedata.map((a, index) => (
                                <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4 mt-5">
                                    <div className="service-card p-4 ">
                                        <div className="service-icon mb-3">
                                            {a.icon}
                                        </div>
                                        <h4 className="service-title text-center mb-3">{a.title}</h4>
                                        <ul className="service-points">
                                            {a.points.map((point, idx) => (
                                                <li key={idx}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>


                </div>
            </div>


        </>
    )
}

export default Blogdetail;


// <div className="ev-blog-page">
//     {/* Section 1 */}
//     <section className="ev-blog-container ">
//         <h2 className="ev-blog-heading">
//             What Are EVs and Why Charging Infrastructure Matters
//         </h2>

//         <p className="ev-blog-paragraph">
//             Electric Vehicles (EVs) run on electricity instead of petrol or diesel.
//             They are cleaner, quieter, and more efficient. However, EVs cannot
//             succeed alone—just like petrol vehicles need fuel stations, EVs need
//             reliable charging infrastructure.
//         </p>

//         <h5 className="ev-blog-subheading">
//             Why charging infrastructure is important
//         </h5>

//         <ul className="ev-blog-points">
//             <li className="ev-blog-point">🔌 Charge anytime, anywhere</li>
//             <li className="ev-blog-point">🚗 Reduces range anxiety</li>
//             <li className="ev-blog-point">🏙️ Enables EV adoption across cities & highways</li>
//             <li className="ev-blog-point">🌱 Supports India’s clean energy goals</li>
//         </ul>

//         <p className="ev-blog-highlight">
//             A strong charging ecosystem is the backbone of the EV revolution.
//         </p>
//     </section>

//     {/* Section 2 */}
//     <section className="ev-blog-container full-width">
//         <h2 className="ev-blog-heading">
//             Why India Needs EVs Today
//         </h2>

//         <p className="ev-blog-paragraph">
//             EV adoption in India is no longer optional—it is essential for building a sustainable and energy-efficient future. Rising fuel costs, increasing air pollution, and the country’s dependence on imported oil make the transition to electric mobility urgent. By embracing electric vehicles, India can reduce greenhouse gas emissions, lower transportation costs for citizens, and create new opportunities in manufacturing, charging infrastructure, and clean energy innovation. With supportive government policies and growing public awareness, EVs are poised to play a crucial role in India’s green revolution.
//         </p>


//         <ol className="ev-blog-ordered-list">
//             <li className="ev-blog-point">
//                 <strong>Rising Fuel Costs</strong> – Lower daily running expenses
//             </li>
//             <li className="ev-blog-point">
//                 <strong>Air Pollution</strong> – Zero tailpipe emissions
//             </li>
//             <li className="ev-blog-point">
//                 <strong>Energy Security</strong> – Reduced oil imports
//             </li>
//             <li className="ev-blog-point">
//                 <strong>Government Support</strong> – FAME II, subsidies, EV policies
//             </li>
//             <li className="ev-blog-point">
//                 <strong>Job Creation</strong> – Manufacturing, charging & software
//             </li>
//         </ol>

//         <p className="ev-blog-highlight">
//             EVs are not just vehicles—they are India’s sustainable future.
//         </p>
//     </section>

//     {/* Section 3 */}
//     <section className="ev-blog-container">
//         <h2 className="ev-blog-heading">
//             Types of Electric Vehicles Explained Simply
//         </h2>

//         <p className="ev-blog-paragraph">
//             Electric vehicles are classified based on how they use electricity and fuel.
//             Each type serves different driving needs and usage patterns.
//         </p>

//         <hr className="ev-blog-divider" />

//         {/* BEVs */}
//         <div className="ev-vehicle-card">
//             <h5 className="ev-vehicle-title">🔋 Battery Electric Vehicles (BEVs)</h5>
//             <ul className="ev-blog-points">
//                 <li>Fully electric vehicles</li>
//                 <li>Run only on battery power</li>
//                 <li>Require external charging</li>
//                 <li>Produce zero tailpipe emissions</li>
//             </ul>
//             <p className="ev-example-text">
//                 <strong>Examples:</strong> Electric cars, e-bikes, e-scooters
//             </p>
//         </div>

//         <hr className="ev-blog-divider" />

//         {/* PHEVs */}
//         <div className="ev-vehicle-card">
//             <h5 className="ev-vehicle-title">🔌 Plug-in Hybrid Electric Vehicles (PHEVs)</h5>
//             <ul className="ev-blog-points">
//                 <li>Use both battery and fuel</li>
//                 <li>Can be charged externally</li>
//                 <li>Automatically switch to fuel when battery runs out</li>
//             </ul>
//             <p className="ev-example-text">
//                 <strong>Best for:</strong> Long-distance users transitioning to EVs
//             </p>
//         </div>

//         <hr className="ev-blog-divider" />

//         {/* HEVs */}
//         <div className="ev-vehicle-card">
//             <h5 className="ev-vehicle-title">⚙️ Hybrid Electric Vehicles (HEVs)</h5>
//             <ul className="ev-blog-points">
//                 <li>Use fuel with a small electric motor</li>
//                 <li>Battery charges automatically (no plug required)</li>
//                 <li>Provide better mileage than regular vehicles</li>
//             </ul>
//             <p className="ev-note-text">
//                 <strong>Note:</strong> Not fully electric, but more efficient
//             </p>
//         </div>

//         <hr className="ev-blog-divider" />

//         {/* 2W & 3W */}
//         <div className="ev-vehicle-card">
//             <h5 className="ev-vehicle-title">🛵 Electric Two-Wheelers & Three-Wheelers</h5>
//             <ul className="ev-blog-points">
//                 <li>Widely adopted across India</li>
//                 <li>Ideal for daily commuting and last-mile delivery</li>
//                 <li>Lower cost and faster adoption</li>
//             </ul>
//             <p className="ev-example-text">
//                 <strong>Examples:</strong> E-scooters, e-rickshaws, delivery bikes
//             </p>
//         </div>
//     </section>
// </div>

{/* Section 1 */ }
// <section className="blog-section p-3">
//     <h4 className="section-title">
//         What Are EVs and Why Charging Infrastructure Matters
//     </h4>
//     <p className="blog-text">
//         Electric Vehicles (EVs) run on electricity instead of petrol or diesel.
//         They are cleaner, quieter, and more efficient. However, EVs cannot
//         succeed alone—just like petrol vehicles need fuel stations, EVs need
//         reliable charging infrastructure.
//     </p>

//     <h6 className="list-title">Why charging infrastructure is important:</h6>
//     <ul className="blog-list">
//         <li>🔌 Charge anytime, anywhere</li>
//         <li>🚗 Reduces range anxiety</li>
//         <li>🏙️ Enables EV adoption across cities & highways</li>
//         <li>🌱 Supports India’s clean energy goals</li>
//     </ul>

//     <p className="highlight-text">
//         A strong charging ecosystem is the backbone of the EV revolution.
//     </p>
// </section>

// {/* Section 2 */}
// <section className="blog-section p-3">
//     <h4 className="section-title">Why India Needs EVs Today</h4>
//     <p className="blog-text">
//         EV adoption in India is no longer optional—it is essential.
//     </p>

//     <ol className="blog-list ordered">
//         <li><strong>Rising Fuel Costs</strong> – Lower daily running expenses</li>
//         <li><strong>Air Pollution</strong> – Zero tailpipe emissions</li>
//         <li><strong>Energy Security</strong> – Reduced oil imports</li>
//         <li><strong>Government Support</strong> – FAME II, subsidies, EV policies</li>
//         <li><strong>Job Creation</strong> – Manufacturing, charging & software</li>
//     </ol>

//     <p className="highlight-text">
//         EVs are not just vehicles—they are India’s sustainable future.
//     </p>
// </section>

// {/* Section 3 */}
// <section className="blog-section p-3">
//     <h4 className="section-title">
//         Types of Electric Vehicles Explained Simply
//     </h4>

//     <p className="blog-text mb-4">
//         Electric vehicles are classified based on how they use electricity and fuel.
//         Each type serves different driving needs and usage patterns.
//     </p>
//     <hr></hr>
//     {/* BEVs */}
//     <div className="vehicle-box">
//         <h6>🔋 Battery Electric Vehicles (BEVs)</h6>
//         <ul className="blog-list">
//             <li>Fully electric vehicles</li>
//             <li>Run only on battery power</li>
//             <li>Require external charging</li>
//             <li>Produce zero tailpipe emissions</li>
//         </ul>
//         <p className="example-text">
//             <strong>Examples:</strong> Electric cars, e-bikes, e-scooters
//         </p>
//     </div>
//     <hr></hr>
//     {/* PHEVs */}
//     <div className="vehicle-box">
//         <h6>🔌 Plug-in Hybrid Electric Vehicles (PHEVs)</h6>
//         <ul className="blog-list">
//             <li>Use both battery and fuel</li>
//             <li>Can be charged externally</li>
//             <li>Automatically switch to fuel when battery runs out</li>
//         </ul>
//         <p className="example-text">
//             <strong>Best for:</strong> Long-distance users transitioning to EVs
//         </p>
//     </div>
//     <hr></hr>
//     {/* HEVs */}
//     <div className="vehicle-box">
//         <h6>⚙️ Hybrid Electric Vehicles (HEVs)</h6>
//         <ul className="blog-list">
//             <li>Use fuel with a small electric motor</li>
//             <li>Battery charges automatically (no plug required)</li>
//             <li>Provide better mileage than regular vehicles</li>
//         </ul>
//         <p className="note-text">
//             <strong>Note:</strong> Not fully electric, but more efficient
//         </p>
//     </div>
//     <hr></hr>
//     {/* 2W & 3W */}
//     <div className="vehicle-box">
//         <h6>🛵 Electric Two-Wheelers & Three-Wheelers</h6>
//         <ul className="blog-list">
//             <li>Widely adopted across India</li>
//             <li>Ideal for daily commuting and last-mile delivery</li>
//             <li>Lower cost and faster adoption</li>
//         </ul>
//         <p className="example-text">
//             <strong>Examples:</strong> E-scooters, e-rickshaws, delivery bikes
//         </p>
//     </div>
// </section>