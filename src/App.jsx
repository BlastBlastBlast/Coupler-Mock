import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Portfolio from './components/Portfolio';
import UserDashboard from './components/UserDashboard';
import JobListings from './components/JobListings';
import RecruiterSearch from './components/RecruiterSearch';
import Showcase from './components/Showcase';

function Header() {
  const location = useLocation();
  
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <header className="steam-header">
      <div className="header-content">
        <Link to="/" className="logo">
          <img src={`${import.meta.env.BASE_URL}Coupler_Transparent.png`} alt="Coupler" className="logo-icon" />
          <span className="logo-text">COUPLER</span>
        </Link>
        <nav className="header-nav">
          <Link to="/portfolio" className={`nav-link ${isActive('/portfolio')}`}>Portfolio</Link>
          <Link to="/showcase" className={`nav-link ${isActive('/showcase')}`}>Showcase</Link>
          <Link to="/dashboard" className={`nav-link ${isActive('/dashboard')}`}>Dashboard</Link>
          <Link to="/jobs" className={`nav-link ${isActive('/jobs')}`}>Jobs</Link>
          <Link to="/recruiters" className={`nav-link ${isActive('/recruiters')}`}>Find Talent</Link>
        </nav>
      </div>
    </header>
  );
}

function App() {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <div className="app">
      {!isLanding && <Header />}
      <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/jobs" element={<JobListings />} />
          <Route path="/recruiters" element={<RecruiterSearch />} />
      </Routes>
      {!isLanding && (
        <footer className="steam-footer">
          <p>© 2024 Coupler - Powered by Steam Ecosystem</p>
        </footer>
      )}
    </div>
  );
}

function AppWithRouter() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default AppWithRouter;
