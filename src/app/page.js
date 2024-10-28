'use client'
import Image from "next/image";

import Desc from "./components/home/Desc";
import Booking from "./components/home/Booking";
import AccordionGrid from "./components/home/Accordion";
import Facilities from "./components/home/Facilities"

export default function Main() {
  return (
        <>
        <Booking />
        <Desc />
        <AccordionGrid />
        <Facilities />

        </>
      )     
}
