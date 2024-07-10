import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <footer className={isHomePage ? 'homePage_footer otherPage_footer': "otherPage_footer"}>
        <div className="container">
          <h4>LUXURY RENTALS</h4>
          <h1 className="discover">Discover Luxury Rental</h1>
          <p>
          Explore the epitome of opulence with Luxury Rental. Our curated collection of high-end properties offers the perfect blend of comfort and sophistication. Whether you're seeking a beachfront villa, a mountain retreat, or a city penthouse, Luxury Rental ensures a memorable stay with top-tier amenities and personalized service. Indulge in the extraordinary with us.
          </p>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/termsandconditions"}>Terms&Conditions</Link>
            </li>
            <li>
              <Link to={"/"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <h4>Connect with us</h4>
          <p>+00 000 000 00</p>
          <p>digieverst@gmail.com</p>
          <p>© All Rights Reserved By Digieverst.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;