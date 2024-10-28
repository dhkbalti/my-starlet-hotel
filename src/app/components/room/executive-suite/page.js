import React from 'react'
import Offer from '../offer'
import Home from '../home'

import { IoTvOutline } from "react-icons/io5";
import { IoWifiSharp } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { BiBath } from "react-icons/bi";
import { PiFireExtinguisherLight } from "react-icons/pi";
import Safety from '../safety';

const ExecutiveSuite = () => {
  const amenities = [
    {icon:<PiFireExtinguisherLight/>, label:'Air Conditioner'},
    {icon:<IoTvOutline/>, label:'Television'},
    {icon:<BiBath/>, label:'Bathroom'},
    {icon:<IoWifiSharp/>, label:'Free Wifi'},
    {icon:<IoBedOutline/>, label:'1 Bedroom'},

  ]

  return (
    <>
    <Home/>
    <div  className='suite-header'>
      <h1>Executive Suite</h1>
      <p>Here are some pictures of Executive Suite!</p>
    </div>
    <Offer amenities={amenities}/>
    <Safety/>
    </>
  )
}

export default ExecutiveSuite