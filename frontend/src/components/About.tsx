import React from 'react'

function About() {
  return (
    <>
        <section id='aboutUs_Mini'>
            <div className="first_container">
                <div className="content">
                    <h1>About us</h1>
                    <h2 className='about'>About Luxury Rental</h2>
                    <p>At Luxury Rental, we specialize in connecting discerning travelers with the finest vacation properties around the world. Our mission is to provide an unparalleled experience through exceptional service, exclusive listings, and a commitment to excellence. Discover our story, values, and the dedicated team behind our success.</p>
                </div>
                <button>We Strive To Offer You Best Possible Hones To Stay!</button>
            </div>
            <div className="second_container">
                <div className="image_1">
                    <img src='/public/people.jpg' alt='people.jpg' />
                </div>
                <div className="image_2">
                    <img src='/public/people2.jpg' alt='people2.jpg' />
                </div>
            </div>
        </section>
    </>
  )
}

export default About