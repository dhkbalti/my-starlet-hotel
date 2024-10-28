import React from 'react'
import Home from '../home'
import Offer from '../offer'

import { IoTvOutline } from "react-icons/io5";
import { IoWifiSharp } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { BiBath } from "react-icons/bi";
import { PiFireExtinguisherLight } from "react-icons/pi";
import { TbToolsKitchen2 } from "react-icons/tb";
import Safety from '../safety';


const ExecutiveLite = () => {
    const amenities = [
        {icon:<PiFireExtinguisherLight/>, label:'With Out AC'},
        {icon:<IoTvOutline/>, label:'Television'},
        {icon:<BiBath/>, label:'Bathroom'},
        {icon:<IoWifiSharp/>, label:'Free Wifi'},
        {icon:<IoBedOutline/>, label:'1 Bedroom'},
    ]
  return (
    <>
    <Home/>
    <div className='suite-header'>
      <h1>Executive Lite</h1>
      <p>Here are some pictures of Executive Lite!</p>
    </div>
    <Offer amenities={amenities}/>
    <Safety/>
    </>
  )
}

export default ExecutiveLite