import React from 'react'
import { NavLink } from "react-router-dom"

function NavBar() {
  return (
    <>
    <section className='bg_home'>
        <div className='bg'></div>
        <header >
            <div className='navbar'>
              <div className='logo'>
                <img className='logo_image'src='./images/logo.png' alt='Logo'/>
              </div>

              <div className="menu-bar">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className='nav'>
                <ul>
                  <NavLink className={(e)=>{return (e.isActive?"red":"normal" )}} to="/">Home</NavLink>
                  <NavLink className={(e)=>{return (e.isActive?"red":"normal" )}} to="/gallery">Gallery</NavLink>
                  <NavLink className={(e)=>{return (e.isActive?"red":"normal" )}} to="/room">Rooms</NavLink>
                  <NavLink className={(e)=>{return (e.isActive?"red":"normal" )}} to="/contact">Contact</NavLink>
                  <NavLink className={(e)=>{return (e.isActive?"red":"normal" )}} to="/admin">Login</NavLink>
                  <NavLink className={(e)=>{return (e.isActive?"red":"normal" )}} to="/booking">Book Now</NavLink>
                </ul>
                
              </div>
            </div>
        </header>
          
          <div className='home_disc'>
            <h1>AL Noor <br/> Starlet Hotel</h1>
            <p>Experience the Starlet Shine!</p>
          </div>
        </section>
    
    </>
  )
}

export default NavBar