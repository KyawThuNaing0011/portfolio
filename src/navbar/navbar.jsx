import { useState } from "react";
import viteLogo from "/vite.svg";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={viteLogo} className="logoo" alt="Vite logo" />
      </div>
      <h1>My Navbar</h1>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
