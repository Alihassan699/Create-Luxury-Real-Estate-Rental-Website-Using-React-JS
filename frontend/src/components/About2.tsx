import React from 'react'
import About from './About'

function About2() {
  return (
    <section id='aboutPage' className='page'>
        <div className="container">
            <img src='/public/about.jpg' alt='about' />
            <div className="content">
                <h1 className='about2h'>Your peace of mind, our priority!</h1>
                <p>At Luxury Rental, your peace of mind is our top priority. We are dedicated to providing seamless and stress-free experiences, whether you're a guest seeking a luxurious stay or a host looking to maximize your property's potential. Our expert team ensures exceptional service, security, and satisfaction every step of the way. Trust us to make your luxury rental experience truly extraordinary. Discover the perfect blend of comfort and elegance with Luxury Rental.</p>
            </div>
        </div>
        <About />
    </section>
  )
}

export default About2