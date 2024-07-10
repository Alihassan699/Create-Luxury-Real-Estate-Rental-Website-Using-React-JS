import React from 'react'
import { villas } from '../../Villas1'
import { Link } from 'react-router-dom'
import { IoIosPeople } from 'react-icons/io'
import { RxDot } from 'react-icons/rx'
import { FaBath, FaBed } from 'react-icons/fa'
import { BiArea } from 'react-icons/bi'

function Topvillas() {
  return (
    <section className='topVillas'>
      <h1 className='topPick'>Top Pick Villas </h1>
      <p className='vill'>Experience unparalleled luxury and comfort with our Top Pick Villas – your ultimate destination for an unforgettable vacation.</p>
      <div className="villasContainer">
        {villas.slice(0, 3).map(element => (
          <Link className='card' to={`/villa/${element.id}`} key={element.id}>
            <img src={element.image} alt={element.name} />
            <div className="location_text">
              <span>{element.location}</span>
              <span><RxDot /></span>
              <span>{element.category}</span>
            </div>
            <div className="title_text">
              {element.name}
            </div>
            <div className="specifications">
              <div className="spec">
                <IoIosPeople />
                <span>{element.guests}</span>
                Guests
              </div>
              <div className="spec">
                <FaBed />
                <span>{element.bedrooms}</span>
                Bedrooms
              </div>
              <div className="spec">
                <BiArea />
                <span>{element.squareMeter}</span>
                Area
              </div>
              <div className="spec">
                <FaBath />
                <span>{element.bathrooms}</span>
                Bathrooms
              </div>
            </div>
            <div className="badge">
                  From <span>${element.dailyRent} / Day </span>
                </div>
          </Link>
        ))}
      </div> 
    </section>
  )
}

export default Topvillas
