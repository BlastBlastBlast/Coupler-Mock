import React, { useState } from 'react';
import '../App.css';

function RecruiterSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    role: 'all',
    verified: 'all',
    location: 'all'
  });

  const developers = [
    {
      id: 1,
      name: "Alex Chen",
      role: "Game Designer & Developer",
      location: "Oslo, Norway",
      verified: "system",
      titlesShipped: 3,
      languages: ["C#", "C++", "Python"],
      specialties: ["Narrative Design", "Gameplay Programming"],
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
    },
    {
      id: 2,
      name: "Sarah Martinez",
      role: "3D Artist & Technical Artist",
      location: "Berlin, Germany",
      verified: "peer",
      titlesShipped: 5,
      languages: ["HLSL", "Python"],
      specialties: ["3D Modeling", "Shader Programming"],
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
      id: 3,
      name: "James Park",
      role: "Gameplay Programmer",
      location: "Seoul, South Korea",
      verified: "system",
      titlesShipped: 2,
      languages: ["C++", "C#"],
      specialties: ["Multiplayer", "Physics"],
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James"
    },
    {
      id: 4,
      name: "Emma Thompson",
      role: "UI/UX Designer",
      location: "London, UK",
      verified: "unverified",
      titlesShipped: 1,
      languages: ["JavaScript", "C#"],
      specialties: ["UI Design", "Prototyping"],
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"
    }
  ];

  const getVerificationBadge = (verified) => {
    switch (verified) {
      case 'system':
        return { text: 'System Verified', className: 'badge-system', icon: '🔒' };
      case 'peer':
        return { text: 'Peer Verified', className: 'badge-peer', icon: '✓' };
      default:
        return { text: 'Unverified', className: 'badge-unverified', icon: '⏳' };
    }
  };

  return (
    <main className="main-content">
      <section className="recruiter-section">
        <div className="recruiter-header">
          <h1 className="recruiter-title">Find Talent</h1>
          <p className="recruiter-subtitle">Search and filter verified game developers</p>
        </div>

        <div className="search-bar-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search by name, role, skills, or technologies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-button">🔍 Search</button>
        </div>

        <div className="recruiter-layout">
          <div className="filters-sidebar">
            <div className="filter-card">
              <h3 className="filter-title">Role</h3>
              <div className="filter-options">
                <button className="filter-option active">All Roles</button>
                <button className="filter-option">Programmer</button>
                <button className="filter-option">Designer</button>
                <button className="filter-option">Artist</button>
              </div>
            </div>

            <div className="filter-card">
              <h3 className="filter-title">Skills & Technologies</h3>
              <div className="tech-filters">
                <span className="tech-filter-tag">C++</span>
                <span className="tech-filter-tag">Unity</span>
                <span className="tech-filter-tag">Unreal Engine</span>
                <span className="tech-filter-tag">C#</span>
                <span className="tech-filter-tag">Multiplayer</span>
                <span className="tech-filter-tag">3D Modeling</span>
              </div>
            </div>

            <div className="filter-card">
              <h3 className="filter-title">Experience</h3>
              <div className="range-filter">
                <label>Titles Shipped: 0+</label>
                <input type="range" min="0" max="10" defaultValue="0" />
                <span>10+</span>
              </div>
            </div>
          </div>

          <div className="developers-list">
            <div className="results-header">
              <span className="results-count">{developers.length} developers found</span>
              <select className="sort-select">
                <option>Relevance</option>
                <option>Most Verified</option>
                <option>Most Titles</option>
                <option>Newest</option>
              </select>
            </div>

            {developers.map(dev => {
              const verification = getVerificationBadge(dev.verified);
              return (
                <div key={dev.id} className="developer-card">
                  <div className="developer-header">
                    <div className="developer-avatar">
                      <img src={dev.avatar} alt={dev.name} />
                      <span className={`verification-indicator ${verification.className}`}>
                        {verification.icon}
                      </span>
                    </div>
                    <div className="developer-info">
                      <h2 className="developer-name">{dev.name}</h2>
                      <p className="developer-role">{dev.role}</p>
                      <p className="developer-location">{dev.location}</p>
                    </div>
                    <div className="developer-stats">
                      <div className="stat-item">
                        <span className="stat-value">{dev.titlesShipped}</span>
                        <span className="stat-label">Titles Shipped</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="developer-skills">
                    <div className="skills-group">
                      <span className="skills-label">Languages:</span>
                      {dev.languages.map((lang, idx) => (
                        <span key={idx} className="skill-tag">{lang}</span>
                      ))}
                    </div>
                    <div className="skills-group">
                      <span className="skills-label">Specialties:</span>
                      {dev.specialties.map((spec, idx) => (
                        <span key={idx} className="skill-tag specialty">{spec}</span>
                      ))}
                    </div>
                  </div>

                  <div className="developer-actions">
                    <button className="btn-secondary">View Portfolio</button>
                    <button className="btn-primary">Contact</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default RecruiterSearch;

