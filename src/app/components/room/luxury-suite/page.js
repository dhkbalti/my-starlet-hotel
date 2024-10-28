import React from 'react'
import Home from '../home'
import Offer from '../offer'
import Safety from '../safety';
import '../room.css'

import { IoTvOutline } from "react-icons/io5";
import { IoWifiSharp } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { BiBath } from "react-icons/bi";
import { PiFireExtinguisherLight } from "react-icons/pi";


const Luxury = () => {
  const amenities =[
    {icon:<IoTvOutline/>, label: 'Television'},
    {icon:<BiBath/>, label: 'Bathroom'},
    {icon:<PiFireExtinguisherLight/>, label: 'AC'},
    {icon:<IoWifiSharp/>, label: 'Free Wifi'},
    {icon:<IoBedOutline/>, label: '1 Bedroom'}
  ];
  return (
    <>
    <Home/>
    <div className='suite-header'>
      <h1>Luxury Suite</h1>
      <p>Here are some pictures of Luxury Suite!</p>
    </div>
    <Offer amenities={amenities}/>
    <Safety/>
    </>
  )
}

export default Luxury