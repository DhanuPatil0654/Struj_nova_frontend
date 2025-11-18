import React, { useState } from 'react';
import './Navbar.css';
import { FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { FiSearch, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import logo from '../../assets/logo/StrujNova_LOGO.png'
import { Link } from 'react-router';
function NavbarHeader() {
    const [cartCount] = useState(0);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    {/* Mobile Toggle Button */}
                    <button className="toggle-btn" onClick={toggleSidebar}>
                        <FiMenu />
                    </button>

                    {/* Navigation Links - Desktop */}
                    <ul className="nav-menu desktop-menu">
                        <li className="nav-item dropdown">
                            <img src={logo} width={50} height={50} />
                            {/* <a href="#home" className="nav-link active">
                                HOME
                            </a> */}
                        </li>
                        <li className="nav-item dropdown">
                            <a href="/" className="nav-link active">
                                HOME
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="/about" className="nav-link">
                                ABOUT US
                                {/* ABOUT US <span className="dropdown-icon">▼</span> */}
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="/service" className="nav-link">
                                SERVICES
                                {/* SERVICES <span className="dropdown-icon">▼</span> */}
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#gallery" className="nav-link">
                                GALLERY
                                {/* GALLERY <span className="dropdown-icon">▼</span> */}
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a href="#blog" className="nav-link">
                                BLOG
                                {/* BLOG <span className="dropdown-icon">▼</span> */}
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">
                                CONTACT US
                            </a>
                        </li>
                    </ul>
                    <div className="nav-icons">
                        <button className="icon-btn cart-btn" aria-label="Shopping Cart">
                            <FiShoppingCart />
                            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                        </button>
                    </div>

                    {/* Right Side Icons */}
                    {/* <div className="nav-icons">
                        <button className="icon-btn cart-btn">
                            <FiShoppingCart />
                            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                        </button>
                    </div> */}
                </div>
            </nav>

            {/* Overlay */}
            {isSidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}

            {/* Mobile Sidebar */}
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <img src={logo} width={50} height={50} /><p className='head_text1'>STRUJNOVA ENERGY</p>
                    <button className="close-btn" onClick={closeSidebar}>
                        <FiX />
                    </button>
                </div>

                <ul className="sidebar-menu">
                    <li className="sidebar-item">
                        <a href="/" className="sidebar-link active" onClick={closeSidebar}>
                            {/* HOME <span className="dropdown-icon">▼</span> */}
                            HOME
                        </a>

                    </li>
                    <li className="sidebar-item">
                        <a href="/about" className="sidebar-link" onClick={closeSidebar}>
                            ABOUT US
                            {/* PAGES <span className="dropdown-icon">▼</span> */}
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="/service" className="sidebar-link" onClick={closeSidebar}>
                            SERVICES
                            {/* SERVICES <span className="dropdown-icon">▼</span> */}
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="#gallery" className="sidebar-link" onClick={closeSidebar}>
                            GALLERY
                            {/* GALLERY <span className="dropdown-icon">▼</span> */}
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="#blog" className="sidebar-link" onClick={closeSidebar}>
                            BLOG
                            {/* BLOG <span className="dropdown-icon">▼</span> */}
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="#contact" className="sidebar-link" onClick={closeSidebar}>
                            CONTACT US
                        </a>
                    </li>
                </ul>

                <div className="sidebar-footer">
                    <div className="sidebar-icons">
                        <a href="#facebook" className="sidebar-social-icon">
                            <FaFacebookF />
                        </a>
                        <a href="#twitter" className="sidebar-social-icon">
                            <FaXTwitter />
                        </a>
                        <a href="#youtube" className="sidebar-social-icon">
                            <FaYoutube />
                        </a>
                        <a href="#linkedin" className="sidebar-social-icon">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavbarHeader;