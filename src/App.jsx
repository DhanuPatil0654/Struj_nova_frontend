import React, { useEffect, useState } from 'react'
import NavbarHeader from './components/Header/NavbarHeader'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router'
import Homepage from './components/Home/Homepage'
import Services from './components/services/Services'
import Aboutpage from './components/About/Aboutpage'
import Footer from './components/footer/Footer';
import Contact_us from './components/contact_us/Contact_us';
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css'
import loadingimg from './assets/loading/loading_im.png'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: true, // run animation only once
    });
  }, []);


  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Loader timeout
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="loader-overlay">
          <div className="loader-3d-wrapper">
            <img
              src={loadingimg}   // your 3D EV image (PNG/WebP)
              alt="EV Charging"
              className="ev-3d-image"
            />
          </div>

          <p className="loader-text">Charging the Future...</p>
        </div>
      )}

      <div className={`page-content ${loading ? 'blurred' : ''}`}>

        <BrowserRouter>
          <NavbarHeader />
          <Routes>
            <Route path='/' element={<Homepage />}></Route>
            <Route path='/service' element={<Services />}></Route>
            <Route path='/about' element={<Aboutpage />}></Route>
            <Route path='/contact-us' element={<Contact_us />}></Route>
          </Routes>
          <Footer />

        </BrowserRouter>
      </div>
    </>
  )
}

export default App
