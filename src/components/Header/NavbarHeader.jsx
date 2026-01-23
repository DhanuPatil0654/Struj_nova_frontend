import React, { useState } from 'react';
import './navbar.css';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../../assets/logo/StrujNova_LOGO.png';
import { useLocation } from 'react-router-dom'; // <-- use this to get current URL

function NavbarHeader() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const location = useLocation(); // current URL path

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const closeSidebar = () => setIsSidebarOpen(false);

    // Menu items
    const menuItems = [
        { name: 'HOME', path: '/' },
        { name: 'ABOUT US', path: '/about' },
        { name: 'SERVICES', path: '/service' },
        { name: 'PRODUCT', path: '/our-products' },
        { name: 'CONTACT US', path: '/contact-us' },
    ];

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <button className="toggle-btn" onClick={toggleSidebar}>
                        <FiMenu />
                    </button>

                    {/* Desktop Menu */}
                    <ul className="nav-menu desktop-menu">
                        <li className="nav-item">
                            <img src={logo} width={50} height={50} />
                        </li>
                        {menuItems.map((item, index) => (
                            <li key={index} className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}>
                                <a href={item.path} className="nav-link">
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Overlay */}
            {isSidebarOpen && <div className="overlay" onClick={closeSidebar}></div>}

            {/* Mobile Sidebar */}
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <img src={logo} width={50} height={50} />
                    <p className="head_text1">STRUJNOVA ENERGY</p>
                    <button className="close-btn" onClick={closeSidebar}>
                        <FiX />
                    </button>
                </div>

                <ul className="sidebar-menu">
                    {menuItems.map((item, index) => (
                        <li key={index} className={`sidebar-item ${location.pathname === item.path ? 'active' : ''}`}>
                            <a href={item.path} className="sidebar-link" onClick={closeSidebar}>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="sidebar-footer">
                    <div className="sidebar-icons">
                        <a href="https://www.facebook.com/share/1G6w28Zra8/" className="sidebar-social-icon">
                            <FaFacebookF />
                        </a>
                        <a href="https://www.instagram.com/strujnova_energy_official?igsh=MWp2bTVzamtxeGdwNw==" className="sidebar-social-icon">
                            <FaInstagram />
                        </a>
                        <a href="https://wa.me/918275108855" className="sidebar-social-icon">
                            <FaWhatsapp />
                        </a>
                        <a href="https://www.linkedin.com/in/strujnova-energy-401591388" className="sidebar-social-icon">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NavbarHeader;
