import React, { useState } from "react";
import "./App.css";
import ProblemSection from "./components/ProblemSection.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import FAQSection from "./components/FAQSection.jsx";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <div className="container">
      <nav className="navbar">
      <div className="logo-container">
      <div className="logo"><span className="black-text">College</span><span className="highlight">Connect</span></div>
      {/* Hamburger menu for mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="black-text">&#9776;</div>
        </div>
        </div>
        
        {/* Navigation links - now includes auth buttons on mobile */}
        <div className={`nav-container ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li><a href="#">Colleges</a></li>
            <li><a href="#">College Predictor</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
          
          {/* Auth buttons - will be hidden on desktop but shown in hamburger menu on mobile */}
          <div className="mobile-auth-buttons">
            <button className="register">Register</button>
            <button className="login">Log in</button>
          </div>
        </div>
        
        {/* Auth buttons - shown on desktop, hidden on mobile */}
        <div className="desktop-auth-buttons">
          <button className="register">Register</button>
          <button className="login">Log in</button>
        </div>

        {/* <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="black-text">&#9776;</div>
        </div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#">Colleges</a></li>
          <li><a href="#">College Predictor</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
        <div className="auth-buttons">
          <button className="register">Register</button>
          <button className="login">Log in</button>
        </div> */}
      </nav>
      <header className="hero-section">
  <button className="info-button">Listed over 5000 Alumni & 300 Colleges</button>
  <div className="oval-background"></div>
  <h1 className="bllack-text">
  Get Into Your Dream<span className="highlight"> College</span>
  — With 1:1 Guidance From <span className="highlight">Alumni</span> Who’ve Been There.
  </h1>
  <p className="slogan">No more guesswork. No generic advice. Just real, actionable insights from alumni who cracked the code.</p>
  <button className="cta-button">Book Your First Session (Free Trial)</button>
</header>
    </div>
    <ProblemSection />
    <HowItWorks/>
    <WhyChooseUs/>
    <FAQSection/>
    </>
  );
 
}

export default App;