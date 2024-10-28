import React from 'react'

// import { IoTvOutline } from "react-icons/io5";
// import { IoWifiSharp } from "react-icons/io5";
// import { IoBedOutline } from "react-icons/io5";
// import { BiBath } from "react-icons/bi";
// import { PiFireExtinguisherLight } from "react-icons/pi";


const Offer = ({amenities=['']}) => {
  return (
    <>
    <section>
        <div className='offer'>
          <h3>Offered Amenities</h3>

          <div className='icons'>
            {amenities.map((amenity, index)=>(
              <div key={index}> 
                {amenity.icon}
                <p>{amenity.label}</p>
              </div>
            ))}

          </div>
        </div>
    </section>
    
    </>
  )
}

export default Offer