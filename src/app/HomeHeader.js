import Link from "next/link";
import "./homeheader.css";
import { usePathname } from "next/navigation";

import Page from './components/admin/page.js'

function HomeHeader() {
  const pathname = usePathname(); // Get the current path

  return (
    <>
      {/* HOME BACKGROUND START */}
      <section className="bg_home">
        <div className="bg"></div>
        <header>
          <div className="navbar">
            <div className="logo">
              <img className="logo_image" src="/images/logo.png" alt="Logo" />
            </div>

            <div className="menu-bar">
              <div></div>
              <div></div>
              <div></div>
            </div>

            <nav className="nav">
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
                  <Link href="/admin" className={pathname === "/admin" ? "isactive" : "mylink"}>
                    Login
                  </Link>
                </li>
                <li className="last-child">
                  <Link href="/components/booking" className={pathname === "/components/booking" ? "isactive" : "mylink"}>
                    Book Now
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <div className="home_disc">
          <h1>
            AL Noor <br /> Starlet Hotel
          </h1>
          <p>Experience the Starlet Shine!</p>
        </div>
      </section>
      {/* HOME BACKGROUND END */}
    </>
  );
}

export default HomeHeader;

