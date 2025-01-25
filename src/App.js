import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    document.querySelector('.welcome-content').classList.add('fade-in');
  }, []);

  return (
    <div className="app-container">
      <div className="animated-bg"></div>
      <div className="welcome-content">
        <div className="logo-container">
          <div className="sacred-symbol">॥</div>
        </div>
        <h1>Welcome to</h1>
        <h2 className="company-name">Maha Naga Kali LLC</h2>
        <div className="decorative-line"></div>
        <p className="tagline">Embracing Divine Energy & Professional Excellence</p>
        <div className="cta-container">
          <button className="cta-button">Explore Our Services</button>
        </div>
      </div>
    </div>
  );
}

export default App;
