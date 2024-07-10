import React from 'react'
import {  RiFacebookLine, RiInstagramLine, RiMailLine, RiWhatsappLine, RiYoutubeLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <>
        <section id='contact_Mini'>
            <div className="super_container">
                <div className="container_1">
                    <h3>Let's Contact Us</h3>
                    <div>
                        <p>Phones:</p>
                        <span>023 6156 55454</span>
                    </div>
                    <div>
                        <p>Email:</p>
                        <span>digieverst@gmail.com</span>
                    </div>
                    <div>
                        <p>Address:</p>
                        <span>Multan, Punjab, Pakistan</span>
                    </div>
                    <ul>
                        <Link className='facebook' to='/'><RiFacebookLine/> </Link> 
                        <Link className='instagram' to='/' ><RiInstagramLine/> </Link>   
                        <Link className='youtube' to='/'  ><RiYoutubeLine/>  </Link>   
                        <Link className='mail' to='/' > <RiMailLine /> </Link>   
                        <Link className='whatsapp' to='/' ><RiWhatsappLine /></Link>  
                    </ul>
                </div>
                <div className="container_2">
                    <h2 className='form'> we'd love to hear to you</h2>
                    <form>
                        <div>
                            <input type='text' placeholder='Name'></input>
                            <input type='email' placeholder='Email'></input>

                        </div>
                        <textarea placeholder='Message'></textarea>
                        <button>Send</button>
                    </form>
                </div>
            </div>
        </section>
    </>
  )
}

export default Contact