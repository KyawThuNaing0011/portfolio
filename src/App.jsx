import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './navbar/navbar.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import Skills from './pages/skill.jsx';
import Projects from './pages/projects.jsx';
import Contact from './pages/contact.jsx';

// Component to scroll to section based on hash
function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      if (location.hash === '#home') {
        // Scroll to top for home section
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } else {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }, [location]);

  return null;
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <ScrollToSection />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </>
        } />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
