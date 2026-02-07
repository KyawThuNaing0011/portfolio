import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import viteLogo from "/vite.svg";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setActive(!active);
  };

  const handleClick = (hash) => {
    setActive(false);
    // Navigate to the same page with the hash
    navigate('/');

    setTimeout(() => {
      if (hash === '#home') {
        // Scroll to top for home section
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 100);
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
      <h1 className="brand-name">My Portfolio</h1>

      <ul className={`nav-menu ${active ? "active" : ""}`}>
        <li className="nav-item">
          <button className="nav-link" onClick={() => handleClick('#home')}>
            Home
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => handleClick('#about')}>
            About
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => handleClick('#projects')}>
            Projects
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => handleClick('#skills')}>
            Skills
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => handleClick('#contact')}>
            Contact
          </button>
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
