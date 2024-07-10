import React from "react";
import { RiFacebookLine, RiInstagramLine, RiMailLine, RiWhatsappLine, RiYoutubeLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const ContactUs = () => {
  return (
    <>
      <section id="contact">
        <h1 className="contact">CONTACT Us</h1>
        <p>We're here to help! Whether you have questions about booking, hosting, <br></br>or need assistance with your stay, the Luxury Rental team is ready to assist you.</p>
        <p>
        Reach out to us through phone, email, or our contact form, and we'll ensure your experience with us <br></br>is smooth and enjoyable. Your satisfaction is our priority, and we look forward to hearing from you.
        </p>
        <div className="container">
          <img src="/about.jpg" alt="about" />
          <div className="content">
              <h3 className="contact">Let's connect</h3>
              <div>
                <p style={{fontWeight: 900}}>Phone</p>
                <span>+00 000 000 00</span>
              </div>
              <div>
                <p style={{fontWeight: 900}}>Email</p>
                <span>digieverst@gmail.com</span>
              </div>
              <div>
                <p style={{fontWeight: 900}}>Address</p>
                <span>Multan, Punjab, Pakistan.</span>
              </div>
              <ul>
                <Link className="facebook" to={"/"} target="_blank">
                  < RiFacebookLine/>
                </Link>
                <Link className="instagram" to={"/"} target="_blank">
                  <RiInstagramLine />
                </Link>
                <Link className="youtube" to={"/"} target="_blank">
                  <RiYoutubeLine/>
                </Link>
                <Link className="mail" to={"/"} target="_blank">
                  <RiMailLine />
                </Link>
                <Link className="whatsapp" to={"/"} target="_blank">
                  <RiWhatsappLine/>
                </Link>
              </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;