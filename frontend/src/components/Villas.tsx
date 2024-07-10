import React from 'react'
import { BiArea } from 'react-icons/bi'
import { FaBed } from 'react-icons/fa'
import { IoIosPeople } from 'react-icons/io'
import { RxDot } from 'react-icons/rx'
import { Link } from 'react-router-dom'
import { villas } from '../Villas1'


function Villas() {
  return (
    <>
        <div className="page" id='allVillas'>
          <h1>ALL VILLAS</h1>
          <p>{villas.length} Experience unparalleled luxury and comfort with our Top Pick Villas – your ultimate destination for an unforgettable vacation.</p>
          <div className="villasContainer">
        {villas.map((element) => {
          return (
              <Link to={`/villa/${element.id}`} className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <div className="location_text">
                  <span>{element.location}</span>
                  <span>
                    <RxDot />
                  </span>
                  <span>{element.category}</span>
                </div>
                <div className="title_text">{element.name}</div>
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
                    <FaBed />
                    <span>{element.bathrooms}</span>
                    Bathrooms
                  </div>
                </div>
                <div className="badge">
                  From <span>€{element.dailyRent} / Day </span>
                </div>
              </Link>
          );
        })}
      </div>
        </div>
    </>
  )
}


export default Villas






