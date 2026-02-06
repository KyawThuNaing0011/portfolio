import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./navbar/navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home" style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5'}}>
          <h1 style={{fontSize: '3rem', color: '#333'}}>Home Section</h1>
        </section>

        <section id="about" style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#eaeaea'}}>
          <h1 style={{fontSize: '3rem', color: '#333'}}>About Section</h1>
        </section>

        <section id="projects" style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0'}}>
          <h1 style={{fontSize: '3rem', color: '#333'}}>Projects Section</h1>
        </section>

        <section id="skills" style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#e5e5e5'}}>
          <h1 style={{fontSize: '3rem', color: '#333'}}>Skills Section</h1>
        </section>

        <section id="contact" style={{height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f9f9f9'}}>
          <h1 style={{fontSize: '3rem', color: '#333'}}>Contact Section</h1>
        </section>
      </main>
    </>
  );
}

export default App;
