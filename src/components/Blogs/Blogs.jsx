import React, { useEffect, useState } from "react";
import "../../css/blogs/blogs.css";
import blog1 from '../../assets/blog/blogposter.png';
import blog2 from '../../assets/blog/blogimg2.webp';
import blog3 from '../../assets/blog/blogimg3.webp';
import { Link } from "react-router-dom";

const blogData = [
    {
        img: blog1,
        date: "May 3, 2020",
        category: "by Neha Desle",
        title: "EV & CHARGING ECOSYSTEM",
        desc: "Electric Vehicles are cleaner and quieter, but their growth depends on strong charging infrastructure.",
    },

];

function Blogs() {

    const [data, setData] = useState([]);

    useEffect(() => {
        const sheetId = "1Ha5QXTQeg2c0nyWQ8pkP-2ia-IQwrJSWcxg-V_V38VE";
        const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`;

        fetch(url)
            .then(res => res.text())
            .then(text => {
                // Google returns invalid JSON → clean it
                const json = JSON.parse(
                    text.substring(47).slice(0, -2)
                );

                const rows = json.table.rows.map(row => ({
                    time: row.c[0]?.v || "",
                    day: row.c[1]?.v || "",
                    name: row.c[2]?.v || "",
                    blog_title: row.c[3]?.v || "",
                    blog_short_paragrap: row.c[4]?.v || "",
                    img: row.c[5]?.v || "",
                    endpoint: row.c[6]?.v || "",
                   
                }));

                setData(rows);
                console.log("Sheet JSON Data:", rows);
            })
            .catch(err => console.error("Fetch error:", err));
    }, []);

    const getSmartTime = (dateString) => {
        try {
            const postDate = new Date(dateString);
            const now = new Date();

            // If date is invalid → fallback
            if (isNaN(postDate.getTime())) {
                return dateString;
            }

            const diffMs = now - postDate;
            const diffMinutes = Math.floor(diffMs / (1000 * 60));
            const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

            const dayName = postDate.toLocaleDateString("en-US", {
                weekday: "long",
            });

            const exactTime = postDate.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
            });

            if (diffMinutes < 60) {
                return `${diffMinutes} minute${diffMinutes !== 1 ? "s" : ""} ago · ${dayName}`;
            }

            if (diffHours < 24) {
                return `${diffHours} hour${diffHours !== 1 ? "s" : ""} ago · ${dayName}`;
            }

            return `${exactTime} · ${dayName}`;
        } catch {
            return dateString;
        }
    };



    return (
        <section className="blog-section py-5">
            <div className="container">
                <h2 className="text-center mb-2">
                    <span className="myblog">MY</span> <span className="blog-highlight">BLOG</span>
                </h2>
                <p className="text-center text-muted mb-5">
                    StrujNova Energy delivers intelligent EV charging and advanced energy solutions designed for efficiency, reliability, and sustainability. We empower individuals, businesses, and infrastructure partners to accelerate the transition toward cleaner and smarter electric mobility
                </p>

                {/* <div className="row g-4">
                    {blogData.map((blog, index) => (
                        <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                            <div className="blog-card">
                                <div className="blog-img-wrapper">
                                    <img src={blog.img} alt="blog" className="blog-img" />
                                    <div className="blog-img-overlay"></div>
                                </div>

                                <div className="blog-content">
                                    <p className="blog-meta">
                                        <span>🕒 {getSmartTime(blog.date)} </span>
                                        | <span>{blog.category}</span>
                                    </p>

                                    <h5 className="blog-title">{blog.title}</h5>
                                    <p className="blog-desc">{blog.desc}</p>

                                    <Link to='/blogs-details' className="nav-link-footer" onClick={() => window.scrollTo(0, 0)}><p className="read-more">
                                        Read More →
                                    </p></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div> */}

                <div className="row g-4">
                    {data.length > 1 &&  // check if there is actual data after the first row
                        data.slice(1).map((blog, index) => (
                            <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                                <div className="blog-card">
                                    <div className="blog-img-wrapper">
                                        <img src={blog.img} alt="blog" className="blog-img" />
                                        <div className="blog-img-overlay"></div>
                                    </div>

                                    <div className="blog-content">
                                        <p className="blog-meta">
                                            <span>🕒 {blog.time} </span>
                                            | <span>by {blog.name}</span>
                                        </p>

                                        <h5 className="blog-title">{blog.blog_title}</h5>
                                        <p className="blog-desc">{blog.blog_short_paragrap}</p>

                                        <Link to={blog.endpoint} className="nav-link-footer" onClick={() => window.scrollTo(0, 0)}><p className="read-more">
                                            Read More →
                                        </p></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
}

export default Blogs;
