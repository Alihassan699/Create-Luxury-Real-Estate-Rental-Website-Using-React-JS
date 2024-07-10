import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import About2 from './components/About2'
import ContactUs from './components/ContactUs'
import Villas from './components/Villas'
import SingleVillas from './components/SingleVillas'

function App() {

  return (
    <>
     <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About2 /> } />
          <Route path='/contact' element={<ContactUs/>} />
          <Route path='/villas'  element={<Villas/>} />
          <Route path='/villas/:id' element={<SingleVillas />} />
        </Routes>
        <Footer />
      </Router> 
    </>
  )
}

export default App
