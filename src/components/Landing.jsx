import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Landing() {
  const navigate = useNavigate();

  const handleEnter = () => {
    navigate('/portfolio');
  };

  return (
    <main className="landing-page">
      <div className="landing-content">
        <div className="landing-logo-container">
          <img 
            src={`${import.meta.env.BASE_URL}Coupler.png`} 
            alt="Coupler Logo" 
            className="landing-logo" 
          />
        </div>
        <h1 className="landing-title">Welcome to Coupler</h1>
        <p className="landing-subtitle">
          Professionalize creative work within the Steam ecosystem
        </p>
        <button className="landing-enter-button" onClick={handleEnter}>
          Enter
        </button>
      </div>
    </main>
  );
}

export default Landing;

