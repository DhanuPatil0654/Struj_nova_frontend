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
import Serviceinfo from './components/serviceinfo/Serviceinfo';
import ProductCom_charger from './components/product_com/ProductCom_charger';
import Blogs from './components/Blogs/Blogs';

import Blogdetail from './components/Blog Detail/Blogdetail';
import ProojectHome from './components/product_com/ProojectHome';
import ProductTwo from './components/product_com/ProductTwo';
import Product120kw from './components/product_com/Product120kw';
import Product180_and_240kw from './components/product_com/Product180_and_240kw';
import ProductDC_dispensesr from './components/product_com/Product_dispensesr';
import FetchData from './components/FetchData/FetchData';
import Blogdetails_digital from './components/Blog Detail/Blogdetails_digital';

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
  
        <BrowserRouter>
          <NavbarHeader />
          <Routes>
            <Route path='/' element={<Homepage />}></Route>
            <Route path='/service' element={<Services />}></Route>
            <Route path='/our-products' element={<ProojectHome />}></Route>
            <Route path='/fetch' element={<FetchData />}></Route>
            <Route path='/our-products-charger' element={<ProductCom_charger />}></Route>
            <Route path='/our-products-charger-DC' element={<ProductTwo />}></Route>
            <Route path='/our-products-charger-DC_120' element={<Product120kw />}></Route>
            <Route path='/our-products-charger-DC_180_and_240' element={<Product180_and_240kw />}></Route>
            <Route path='/our-products-charger-dispencer' element={<ProductDC_dispensesr />}></Route>
            <Route path='/about' element={<Aboutpage />}></Route>
            <Route path='/contact-us' element={<Contact_us />}></Route>
            <Route path='/blogs' element={<Blogs />}></Route>
            <Route path='/blogs-details' element={<Blogdetail />}></Route> 
            <Route path='/blogs-details-digital' element={<Blogdetails_digital />}></Route> 
          </Routes>
          <Footer />

        </BrowserRouter>
        
     
    </>
  )
}

export default App
