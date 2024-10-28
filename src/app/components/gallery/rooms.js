import React from 'react'
import './gallery.css'

const Room = () => {
  return (
    <>
    <section className='room'>
        <div className='container'>
            <h1>Rooms</h1>
            <div className='room-img'>
                <div><img src='/images/lite2.jpg'/></div>
                <div><img src='/images/luxury2.jpg'/></div>
                <div><img src='/images/luxurySuite.jpg'/></div>
                <div><img src='/images/mainSuite.jpg'/></div>
                <div><img src='/images/lite-main.jpg'/></div>
                <div><img src='/images/exclusiveSuite.jpg'/></div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Room