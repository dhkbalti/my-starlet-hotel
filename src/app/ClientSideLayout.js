// src/app/ClientSideLayout.js (Client Component)
"use client";

import { usePathname } from "next/navigation";
import HomeHeader from "./HomeHeader";
import OtherHeader from "./OtherHeader";

export default function ClientSideLayout({ children }) {
  const pathname = usePathname();

  return (
    <>
      {/* Conditional rendering based on the pathname */}
      {pathname === "/" ? <HomeHeader /> : <OtherHeader />}
      {children}
    </>
  );
}
