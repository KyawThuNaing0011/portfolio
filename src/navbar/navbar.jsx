import { useState, useEffect } from "react";
import viteLogo from "/vite.svg";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <a href="#home" className="navbar-brand">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <span className="brand-name">My Portfolio</span>
      </a>

      <ul className={`nav-menu ${active ? "active" : ""}`}>
        <li className="nav-item">
          <a href="#home" className="nav-link" onClick={() => setActive(false)}>
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link" onClick={() => setActive(false)}>
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#projects" className="nav-link" onClick={() => setActive(false)}>
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a href="#skills" className="nav-link" onClick={() => setActive(false)}>
            Skills
          </a>
        </li>
        <li className="nav-item">
          <a href="#contact" className="nav-link" onClick={() => setActive(false)}>
            Contact
          </a>
        </li>
      </ul>

      <button className={`hamburger ${active ? "active" : ""}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>
  );
};

export default Navbar;
