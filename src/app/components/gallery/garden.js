import React from 'react'
import './gallery.css'


const Garden = () => {
  return (
    <>
    <section className='garden'>
        <div className='container'>
            <h1>Garden</h1>
            <div className='garden-img'>
                <div><img src='/images/lown.jpg'/></div>
                <div><img src='/images/gallery 2.png'/></div>
                <div><img src='/images/gallery 1.png'/></div>
                <div><img src='/images/parking.png'/></div>
                <div><img src='/images/lown.jpg'/></div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Garden