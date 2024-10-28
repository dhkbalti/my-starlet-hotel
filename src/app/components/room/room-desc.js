'use client'
import React from 'react'
import './room.css'
import { useRouter } from 'next/navigation';


import { FaRegStar } from "react-icons/fa";

const Room = () => {
  const router = useRouter()
  
  return (
    <>
    <section className='desc'>
      <div className='container'>

        <div className='box'>
          <div className='image'>
            <img src='/images/mainSuite.jpg'/>
          
          </div>
          <div className='detail'>
            <div className='room-name'>
              <h2>Family Suite</h2>
              <button onClick={()=>{router.push("/components/booking")}}>Book Now</button>
            </div> 
            <div className='price'>
              <h3>PKR 28,000 <sub>per night</sub></h3>
              <p>3 Beds(1 Master + 2 Single Bed)</p>
            </div>
           
            <div className='buttons'>
              <button>Breakfast included</button>
              <button>Air Conditioned</button>
              <button>4 Adult</button>
              <button>Free Cancellation</button>
              <button>Private Bathrooms</button>
              <button>Kitchen</button>
            </div>
            <div className='more'>
              <div className='rating'>
                <p>Rating: 4.5</p>
                  <FaRegStar/>
                  <FaRegStar/>
                  <FaRegStar/>
                  <FaRegStar/>
                  <FaRegStar/>
              </div>
              <button onClick={()=>{router.push('/components/room/family-suite')}}>More Details</button>
            </div>
          </div>

        </div>

      </div>
    </section>
    
    <section className='desc'>
      <div className='container'>

        <div className='box'>
          <div className='image'>
            <img src='/images/luxurySuite.jpg'/>
          
          </div>
          <div className='detail'>
            <div className='room-name'>
              <h2>Luxury Suite</h2>
              <button onClick={()=>{router.push("/components/booking")}}>Book Now</button>
            </div> 
            <div className='price'>
              <h3>PKR 23,000 <sub>per night</sub></h3>
              <p>1 Beds(1 Master)</p>
            </div>
           
            <div className='buttons'>
              <button>Breakfast included</button>
              <button>Air Conditioned</button>
              <button>2 Adult</button>
              <button>Free Cancellation</button>
              <button>Private Bathroom</button>
            </div>
            <div className='more'>
              <div className='rating'>
                <p>Rating: 4.5</p>
                  <FaRegStar/>
                  <FaRegStar/>
                  <FaRegStar/>
                  <FaRegStar/>
                  <FaRegStar/>
              </div>
              <button onClick={()=>{router.push('/components/room/luxury-suite')}}>More Details</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    
    <section className='desc'>
      <div className='container'>

        <div className='box'>
          <div className='image'>
            <img src='/images/exclusiveSuite.jpg'/>
          
          </div>
          <div className='detail'>
            <div className='room-name'>
              <h2>Executive Suite</h2>
              <button onClick={()=>{router.push("/components/booking")}}>Book Now</button>
            </div> 
            <div className='price'>
              <h3>PKR 23,000 <sub>per night</sub></h3>
              <p>2 Beds(1 Master + 1 Single Bed)</p>
            </div>
           
            <div className='buttons'>
              <button>Breakfast included</button>
              <button>Air Conditioned</button>
              <button>3 Adult</button>
              <button>Free Cancellation</button>
              <button>Private Bathroom</button>
            </div>
            <div className='more'>
              <div className='rating'>
                <p>Rating: 4.5</p>
                  <FaRegStar/>
                  <FaRegStar/>
                  <FaRegStar/>
                  <FaRegStar/>
                  <FaRegStar/>
              </div>
              <button onClick={()=>{router.push('/components/room/executive-suite')}}>More Details</button>
            </div>
          </div>
        </div>
      </div>
    </section>   
    
     <section className='desc'>
      <div className='container'>

        <div className='box'>
          <div className='image'>
            <img src='/images/lite-main.jpg'/>
          
          </div>
          <div className='detail'>
            <div className='room-name'>
              <h2>Executive Lite</h2>
              <button onClick={()=>{router.push("/components/booking")}}>Book Now</button>
            </div> 
            <div className='price'>
              <h3>PKR 13,000 <sub>per night</sub></h3>
              <p>2 Beds(1 Master + 1 Single Bed)</p>
            </div>
           
            <div className='buttons'>
              <button>Breakfast included</button>
              <button>WithOut AC</button>
              <button>2 Adult</button>
              <button>Free Cancellation</button>
              <button>Private Bathroom</button>
            </div>
            <div className='more'>
              <div className='rating'>
                <p>Rating: 4.5</p>
                  <FaRegStar/>
                  <FaRegStar/>
                  <FaRegStar/>
                  <FaRegStar/>
                  <FaRegStar/>
              </div>
              <button onClick={()=>{router.push("/components/room/executive-lite")}}>More Details</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Room