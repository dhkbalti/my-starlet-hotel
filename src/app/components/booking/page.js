import React from 'react'
import "./booking.css"


import { FaPhoneVolume } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

const handleLogin = () => {
  return (
    <>
    {/* <Header/> */}
    <section className='booking'>
        <div className='container'>
            <h1>Booking</h1>
            <p>Enter your information!</p>
            <div className='main'>
                <form>
                    <label>First Name: <input type='text'></input></label>
                    <label>Last Name: <input type='text'></input></label>
                    <label>check-in Date: <input placeholder='none' type='date'></input></label>
                    <label>check-out Date: <input type='date'></input></label>
                    <label>Whatsapp No : <input type='phone'></input></label>
                    <label>No of Guests : <input max={10} min={1} type='number'></input></label>
                    <label>Email Address : <input type='email'></input></label>
                    <label>Room Type: 
                    <select>
                        <option>Family Suite</option>
                        <option>Luxury Suite</option>
                        <option>Executive Suite</option>
                        <option>Executive Lite</option>
                      </select> 
                     </label>
                </form>
                <div className='msg-box'>
                  <label>Any message or specific request!</label>
                  <div contentEditable='true'></div>
                </div>
                <div className='booking-btn'>
                  <button>Book Now</button>
                </div>
                <div className='link'>
                  <FaWhatsapp/>
                  <FaFacebookF/>
                  <FaPhoneVolume/>
                </div>
            </div>
        </div>

    </section>
    </>
  )
}

export default handleLogin