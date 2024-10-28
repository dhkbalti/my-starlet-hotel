'use client'
import Link from "next/link";
import "./otherheader.css"
import handleLogin from './components/booking/page';
import { usePathname } from "next/navigation";


export default function NavBar(){
  const pathname = usePathname();

    return(
        <>
        <section>
        <header className="otherheader" >
            <div className='othernavbar'>
              <div className='logo'>
                <img className='logo_image'src='/images/logo.png' alt='Logo'/>
              </div>

                <div className="menu-bar">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              <div className='nav'>
                <ul>
                  <li>
                    <Link href="/" className={pathname === "/" ? "isactive" : "mylink"}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/components/gallery" className={pathname === "/components/gallery" ? "isactive" : "mylink"}>
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link href="/components/room" className={pathname === "/components/room" ? "isactive" : "mylink"}>
                      Rooms
                    </Link>
                  </li>
                  <li>
                    <Link href="/components/contact" className={pathname === "/components/contact" ? "isactive" : "mylink"}>
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/components/admin" className={pathname === "/components/admin" ? "isactive" : "mylink"}>
                      Login
                    </Link>
                  </li>
                  <li className="last-child">
                    <Link href="/components/booking" className={pathname === "/components/booking" ? "isactive" : "mylink"}>
                      Book Now
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
        </header>
        </section>
        </>
    )
}
