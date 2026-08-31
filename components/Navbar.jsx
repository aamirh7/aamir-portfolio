"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo">
          <span>AH</span>
          <strong>Aamir Hussain</strong>
        </a>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <a
            href="/cv/Aamir-Hussain-CV.pdf"
            download
            className="nav-cv-mobile"
          >
            Download CV
          </a>
        </nav>

        <a
          href="/cv/Aamir-Hussain-CV.pdf"
          download
          className="nav-cv"
        >
          Download CV
        </a>

        <button
          className={`menu-btn ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}