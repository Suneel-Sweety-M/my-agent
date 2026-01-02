"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar__container">
        {/* Logo */}
        <div className="navbar__logo">
          <Link href="/">
            <Image
              src="/images/myagent-logo.png"
              alt="My Agent"
              width={150}
              height={48}
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="navbar__menu">
          <Link href="#">Services</Link>
          <Link href="#">How It Works</Link>
          <Link href="#">Pricing</Link>
          <Link href="#">Contact</Link>
        </nav>

        {/* CTA */}
        <div className="navbar__cta">
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={18} />
            WhatsApp Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="navbar__toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${open ? "open" : ""}`}>
        <Link href="#" onClick={() => setOpen(false)}>
          Services
        </Link>
        <Link href="#" onClick={() => setOpen(false)}>
          How It Works
        </Link>
        <Link href="#" onClick={() => setOpen(false)}>
          Pricing
        </Link>
        <Link href="#" onClick={() => setOpen(false)}>
          Contact
        </Link>

        <a
          className="mobile-whatsapp"
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size={18} />
          WhatsApp Us
        </a>
      </div>
    </header>
  );
}
