import React from 'react'
import '../../css/footar/footer.css'
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import logo from '../../assets/footer/loading_im.png'
import left_img from '../../assets/footer/footer_img3.png'
import right_img from '../../assets/footer/footer_img1.png'
function Footer() {
    return (
        <>
            <div className="footer-back">
                <div className="container">
                    <div class="row align-items-start footer-top">

                        {/* LEFT – LOGO */}
                        <div class="col-lg-4 col-md-4 col-sm-12 text-center">
                            <img src={logo} class="footer_logo" alt="logo" />
                            {/* <p class="company-name">StrujNova Energy</p> */}
                        </div>

                        {/* MIDDLE – QUICK LINKS */}
                        <div class="col-lg-4 col-md-4 col-sm-12 quick-links-container">
                            <p class="quick_link">QUICK LINKS</p>

                            <div class="row">
                                <div class="col-6">
                                    <ul class="quick-list">
                                        <li>Home</li>
                                        <li>About Us</li>
                                        <li>Products</li>
                                        <li>Facilities</li>
                                    </ul>
                                </div>

                                <div class="col-6">
                                    <ul class="quick-list">
                                        <li>Blogs</li>
                                        <li>News</li>
                                        <li>Careers</li>
                                        <li>Contact Us</li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                        {/* RIGHT – CONTACT */}
                        <div class="col-lg-4 col-md-4 col-sm-12 contact-box">
                            <p class="quick_link">CONTACT US</p>

                            <p class="contact-item">
                                <i class="fa-solid fa-phone contact-icon"></i>
                                +91-8275108855 <span></span>
                            </p>

                            <p class="contact-item">
                                <IoMdMail class="react-icon" />
                                info.strujnova@gmail.com
                            </p>

                            <p class="contact-item">
                                <FaLocationDot class="react-icon" />
                                Karvenagar, Pune-52
                            </p>
                        </div>
                    </div>

                    {/* BOTTOM LINE */}
                    <div class="footer-line"></div>

                    {/* SOCIAL ICONS */}
                    {/* <div class="footer-social text-center">
                        <p class="copy-text">© 2025 Copyright:</p>

                        <div class="social-icons">
                            <i class="fa-brands fa-twitter"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-youtube"></i>
                            <i class="fa-brands fa-linkedin"></i>
                            <i class="fa-brands fa-facebook"></i>
                        </div>
                    </div> */}
                </div>

                {/* BACKGROUND LEFT & RIGHT DESIGNS */}
                <img src={left_img} class="footer-bg-left" />

            </div>



        </>
    )
}

export default Footer
