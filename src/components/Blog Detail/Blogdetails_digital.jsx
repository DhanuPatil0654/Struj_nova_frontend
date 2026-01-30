import React, { useEffect, useState } from 'react';
import '../../css/blogs/blogdetail.css';
import { FaChargingStation } from "react-icons/fa6";
import { RiChargingPile2Fill } from "react-icons/ri";
import { FaCarAlt } from "react-icons/fa";
import { MdOutlineNaturePeople } from "react-icons/md";
import { PiPottedPlantFill } from "react-icons/pi";
import { MdElectricBolt } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";

import { FaBatteryFull } from "react-icons/fa";
import { GiBatteryPackAlt } from 'react-icons/gi';
import { FaJetFighterUp } from "react-icons/fa6";
import { FaCarSide } from "react-icons/fa";
import { MdOutlineTwoWheeler } from "react-icons/md";
import { Link } from 'react-router-dom';

function Blogdetails_digital() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const sheetId = "1Ha5QXTQeg2c0nyWQ8pkP-2ia-IQwrJSWcxg-V_V38VE";
        const sheetName = "blogdetails"; // your sheet name
        const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`;

        fetch(url)
            .then(res => res.text())
            .then(text => {
                const json = JSON.parse(text.substring(47).slice(0, -2));
                const rows = json.table.rows.map(row => ({
                    intro_para: row.c[0]?.v || "",
                    points: row.c[1]?.v ? row.c[1].v.split("\n") : [], // split points by newline
                    detail: row.c[2]?.v ? row.c[2].v.split("\n") : [], // split points by newline
                    table_point: row.c[3]?.v || "",
                    desc: row.c[4]?.v || "",

                }));
                setData(rows);
                console.log("Sheet2 Data:", rows);
            })
            .catch(err => console.error("Fetch error:", err));
    }, []);

    return (
        <>
            <div className='blogsStart p-3'>
                <div className="card blogsstratcard">
                    <span className="card-badge"></span>
                    <div className="card-body">
                        <div className='blog-title'>
                            <h1 className='title_blog'>EV Charging Software: Transforming the Future of Charging Stations</h1>
                        </div>
                        {data.length > 1 &&
                            data.slice(1).map((item, index) => (
                                <div key={index}>

                                    {/* Intro paragraph */}
                                    <div className='blog-intro'>
                                        <p className='blog-intro-para text-justify'>
                                            {item.intro_para}
                                        </p>
                                    </div>

                                    {/* Points timeline */}
                                    <div className="ev-timeline">
                                        {item.points.map((point, idx) => {
                                            if (!point || point.trim() === "") return null;

                                            return (
                                                <div key={idx} className="timeline-item">
                                                    <span className="timeline-dot"></span>
                                                    <p className="text-justify">{point}</p>
                                                </div>
                                            );
                                        })}
                                    </div>

                                </div>
                            ))}
                        <div className='title_blog mt-3' style={{ textAlign: "center", fontSize: "20px" }}>
                            EV Charging Software explained with Real-Life Examples
                        </div>
                        <div className='point_details'>
                            {data.length > 1 &&
                                data.slice(1).map((item, index) => (
                                    <React.Fragment key={index}>
                                        {item.detail
                                            .map(point1 => point1.trim())
                                            .filter(point1 => point1 !== "" && point1 !== "\r")
                                            .map((point1, idx) => {
                                                const isHeading = /^\d+\./.test(point1); // number + dot
                                                const isParagraph = !isHeading && !point1.startsWith("-"); // simple check for normal paragraph
                                                return isParagraph ? (
                                                    <p key={idx} className="timeline-text-dash">
                                                        {point1}
                                                    </p>
                                                ) : (
                                                    <div key={idx} className="timeline-item-dash">
                                                        {isHeading ? null : <span className="timeline-dash"></span>}
                                                        <p className={`timeline-text-dash ${isHeading ? "dash-heading" : ""}`}>
                                                            {point1}
                                                        </p>
                                                    </div>
                                                );
                                            })}
                                    </React.Fragment>
                                ))
                            }
                        </div>

                        <div className='title_blog mt-3 mb-2' style={{ fontSize: "20px" }}>
                            Role of Smart Charging in Energy Management
                        </div>
                        <p>
                            As the demand for electric vehicles (EVs) continues to rise, smart charging solutions play a crucial role in ensuring efficient energy distribution, cost savings, and sustainability. Unlike conventional charging methods, smart charging integrates data analytics, grid interaction, and load management to optimize energy use while reducing strain on power systems.
                        </p>
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
                                    {data.length > 1 &&
                                        data.slice(1).map((item, index) => (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{item.table_point}</td>
                                                <td>{item.desc}</td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="read-more-wrapper">
                            <Link
                                to="/contact-us"

                                onClick={() => window.scrollTo(0, 0)}
                            >
                                <p className="read-more">Contact for More Info →</p>
                            </Link>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogdetails_digital;
