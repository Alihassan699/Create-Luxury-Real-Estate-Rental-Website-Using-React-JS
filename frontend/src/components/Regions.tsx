import React from 'react'

function Regions() {
  return (
    <section id='regions'>
        <h1>Our Region</h1>
        <p>Discover the charm and beauty of our region – where breathtaking landscapes and vibrant culture create the perfect getaway.</p>
        <div className="region_container">
            <div className="card">
                <img src='/public/region1.jpg' alt='region1' />
                <h2>Mountains</h2>
                <p><span>90</span></p>
            </div>
            <div className="card">
                <img src='/public/region2.jpg' alt='region2' />
                <h2>Coastline</h2>
                <p><span>110</span></p>
            </div>
        </div>
    </section>
  )
}

export default Regions