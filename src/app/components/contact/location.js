import "./contact.css"


import React from 'react'

const Location = () => {
  return (
    <>
        <section className="location-section">
        <h1>Our Location</h1>
        <div className="map">
            <iframe className="map-loc" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3256.485162841637!2d75.58959787487572!3d35.293924551154234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e465d4c9dc060f%3A0x64dcff5826cd3e15!2sAl%20Noor%20Starlet%20Hotel!5e0!3m2!1sen!2s!4v1729002264656!5m2!1sen!2s" width="600" height="450" loading="lazy"></iframe>
        </div>
        </section>
    </>
  )
}

export default Location