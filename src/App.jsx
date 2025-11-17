import React from 'react'
import NavbarHeader from './components/Header/NavbarHeader'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router'
import Homepage from './components/Home/Homepage'
import Services from './components/services/Services'
import Aboutpage from './components/About/Aboutpage'

function App() {
  return (
    <>

      <BrowserRouter>
        <NavbarHeader />
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/service' element={<Services />}></Route>
          <Route path='/about' element={<Aboutpage />}></Route>
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
