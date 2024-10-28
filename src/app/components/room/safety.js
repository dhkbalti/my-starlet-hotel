import React from 'react'

import { GiVacuumCleaner } from "react-icons/gi";
import { PiFireExtinguisherLight } from "react-icons/pi";

const Safety = () => {
  return (
    <>
    <section className='safety'>
      <div className='container'>
        <h3>Safety and Hygeine</h3>
        <div className='desc'>
          <div><GiVacuumCleaner/> <p>Daily Cleaning</p></div>
          <div><PiFireExtinguisherLight/> <p>Fire Extinguishers</p></div>
          <div><GiVacuumCleaner/> <p>Sterilizations</p></div>
          <div><PiFireExtinguisherLight/> <p>Smoke Detectors</p></div>
        </div>

      </div>

    </section>
    </>
  )
}

export default Safety