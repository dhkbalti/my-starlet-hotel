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

const Family = () => {
  const amenities =[
    {icon:<TbToolsKitchen2/>,label:'Kitchen'},
    {icon:<IoTvOutline/>, label: 'Television'},
    {icon:<IoBedOutline/>, label: '2 Attached Bedroom'},
    {icon:<IoWifiSharp/>, label: 'Free Wifi'},
    {icon:<BiBath/>, label: 'Bathroom'},
    {icon:<PiFireExtinguisherLight/>, label: 'Air Conditioner'}
  ];
  return (
    <>
    <Home/>
    <div className='suite-header'>
      <h1>Family Suite</h1>
      <p>Here are some pictures of Family Suite!</p>
    </div>
      <Offer amenities={amenities}/>
      <Safety/>
    </>
  )
}

export default Family