import React from 'react';
import './home.css';
import first_img_home from '../../assets/Home/homepage_first.png';
import Aboutpage from '../About/Aboutpage';
import CustomersSpeak from './CustomersSpeak';
import Introduction from './Introduction';
import Features from '../Features/Features';

function Homepage() {
  return (
    <>
      <div className='background_color 'data-aos="fade-up" >
        <h1 className='head_text'>STRUJNOVA ENERGY</h1>
        <p>Charging Tomorrow, Today !</p>
        <img src={first_img_home} class="img-fluid" alt="..."></img>
      </div>
      <Introduction />
      <Features />
      <CustomersSpeak />


    </>
  );
}

export default Homepage;
