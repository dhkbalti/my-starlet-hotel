'use client'
// components/Navbar.js
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css'; // Import CSS module for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle menu open/close for mobile
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Logo</Link>
      </div>

      {/* Menu button for mobile */}
      <button onClick={toggleMenu} className={styles.menuBtn}>
        {isOpen ? '✖' : '☰'   }
      </button>

      {/* Navbar links */}
      <nav className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about">About</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/services">Services</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
