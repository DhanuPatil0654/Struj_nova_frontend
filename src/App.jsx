import React from 'react'
import NavbarHeader from './components/Header/NavbarHeader'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router'
import Homepage from './components/Home/Homepage'
import Services from './components/services/Services'
import Aboutpage from './components/About/Aboutpage'
import Footer from './components/footer/Footer';
import Contact_us from './components/contact_us/Contact_us';

function App() {
  return (
    <>

      <BrowserRouter>
        <NavbarHeader />
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/service' element={<Services />}></Route>
          <Route path='/about' element={<Aboutpage />}></Route>
          <Route path='/contact-us' element={<Contact_us />}></Route>
        </Routes>
        <Footer/>

      </BrowserRouter>

    </>
  )
}

export default App
