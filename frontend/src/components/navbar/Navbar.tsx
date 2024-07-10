import  {React, useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [navHeight, setNavHeight] = useState(false); 
  const navigate = useNavigate(); 

  const gotoHome = () => {
    navigate("/");
  }

  return (
    <>
      <nav className={navHeight ? "show-nav nav" : "nav"}>
        <div className="logo" onClick={gotoHome}>LUXURY RENTALS</div>
        <ul>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li>
            <Link to="/villas">VILLAS</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
        <RxHamburgerMenu
          className="hamburger"
          onClick={() => setNavHeight(!navHeight)}
        />
      </nav>
    </>
  );
}

export default Navbar;
