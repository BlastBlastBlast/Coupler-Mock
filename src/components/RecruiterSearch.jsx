import React, { useState } from 'react';
import '../App.css';

function RecruiterSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    role: 'all',
    verified: 'all',
    country: 'all',
    city: 'all'
  });

  // Calculate keyword hits for a developer based on search query
  const getKeywordHits = (dev, query) => {
    if (!query || query.trim() === '') return { exact: [], related: [], score: 0 };
    
    const lowerQuery = query.toLowerCase().trim();
    const queryWords = lowerQuery.split(/\s+/);
    
    const exact = [];
    const related = [];
    
    // Check name
    if (dev.name.toLowerCase().includes(lowerQuery)) {
      exact.push('Name');
    }
    
    // Check role
    if (dev.role.toLowerCase().includes(lowerQuery)) {
      exact.push('Role');
    }
    
    // Check languages
    dev.languages.forEach(lang => {
      if (lang.toLowerCase() === lowerQuery || lang.toLowerCase().includes(lowerQuery)) {
        exact.push(`Language: ${lang}`);
      } else if (queryWords.some(word => lang.toLowerCase().includes(word))) {
        related.push(`Language: ${lang}`);
      }
    });
    
    // Check specialties
    dev.specialties.forEach(spec => {
      if (spec.toLowerCase() === lowerQuery || spec.toLowerCase().includes(lowerQuery)) {
        exact.push(`Specialty: ${spec}`);
      } else if (queryWords.some(word => spec.toLowerCase().includes(word))) {
        related.push(`Specialty: ${spec}`);
      }
    });
    
    // Check location
    if (dev.location.toLowerCase().includes(lowerQuery)) {
      related.push('Location');
    }
    
    const score = exact.length * 3 + related.length;
    
    return { exact, related, score };
  };

  const developers = [
    {
      id: 1,
      name: "Alex Chen",
      role: "Game Designer & Developer",
      location: "Oslo, Norway",
      country: "Norway",
      city: "Oslo",
      verified: "system",
      metrics: {
        titlesShipped: 3,
        titlesInDevelopment: 2,
        earlyAccessGames: 5,
        workshopAssets: 12,
        testContributions: 8,
        gamesPublished: 3
      },
      languages: ["C#", "C++", "Python"],
      specialties: ["Narrative Design", "Gameplay Programming"],
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
    },
    {
      id: 2,
      name: "Sarah Martinez",
      role: "3D Artist & Technical Artist",
      location: "Berlin, Germany",
      country: "Germany",
      city: "Berlin",
      verified: "peer",
      metrics: {
        titlesShipped: 5,
        titlesInDevelopment: 1,
        earlyAccessGames: 3,
        workshopAssets: 25,
        testContributions: 2,
        gamesPublished: 5
      },
      languages: ["HLSL", "Python"],
      specialties: ["3D Modeling", "Shader Programming"],
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
      id: 3,
      name: "James Park",
      role: "Gameplay Programmer",
      location: "Seoul, South Korea",
      country: "South Korea",
      city: "Seoul",
      verified: "system",
      metrics: {
        titlesShipped: 2,
        titlesInDevelopment: 3,
        earlyAccessGames: 4,
        workshopAssets: 8,
        testContributions: 15,
        gamesPublished: 2
      },
      languages: ["C++", "C#"],
      specialties: ["Multiplayer", "Physics"],
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James"
    },
    {
      id: 4,
      name: "Emma Thompson",
      role: "UI/UX Designer",
      location: "London, UK",
      country: "United Kingdom",
      city: "London",
      verified: "unverified",
      metrics: {
        titlesShipped: 1,
        titlesInDevelopment: 2,
        earlyAccessGames: 2,
        workshopAssets: 5,
        testContributions: 3,
        gamesPublished: 1
      },
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
              <h3 className="filter-title">Location</h3>
              <div className="filter-options">
                <button 
                  className={`filter-option ${selectedFilters.country === 'all' ? 'active' : ''}`}
                  onClick={() => setSelectedFilters({...selectedFilters, country: 'all', city: 'all'})}
                >
                  All Countries
                </button>
                <button 
                  className={`filter-option ${selectedFilters.country === 'Norway' ? 'active' : ''}`}
                  onClick={() => setSelectedFilters({...selectedFilters, country: 'Norway', city: 'all'})}
                >
                  Norway
                </button>
                <button 
                  className={`filter-option ${selectedFilters.country === 'Germany' ? 'active' : ''}`}
                  onClick={() => setSelectedFilters({...selectedFilters, country: 'Germany', city: 'all'})}
                >
                  Germany
                </button>
                <button 
                  className={`filter-option ${selectedFilters.country === 'United Kingdom' ? 'active' : ''}`}
                  onClick={() => setSelectedFilters({...selectedFilters, country: 'United Kingdom', city: 'all'})}
                >
                  United Kingdom
                </button>
                <button 
                  className={`filter-option ${selectedFilters.country === 'South Korea' ? 'active' : ''}`}
                  onClick={() => setSelectedFilters({...selectedFilters, country: 'South Korea', city: 'all'})}
                >
                  South Korea
                </button>
              </div>
              {selectedFilters.country !== 'all' && (
                <div className="filter-options" style={{marginTop: '10px'}}>
                  <button 
                    className={`filter-option ${selectedFilters.city === 'all' ? 'active' : ''}`}
                    onClick={() => setSelectedFilters({...selectedFilters, city: 'all'})}
                    style={{fontSize: '12px', padding: '6px 12px'}}
                  >
                    All Cities
                  </button>
                  {developers
                    .filter(d => d.country === selectedFilters.country)
                    .map((dev, idx) => (
                      <button
                        key={idx}
                        className={`filter-option ${selectedFilters.city === dev.city ? 'active' : ''}`}
                        onClick={() => setSelectedFilters({...selectedFilters, city: dev.city})}
                        style={{fontSize: '12px', padding: '6px 12px'}}
                      >
                        {dev.city}
                      </button>
                    ))}
                </div>
              )}
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
              <span className="results-count">
                {developers.filter(dev => {
                  if (selectedFilters.country !== 'all' && dev.country !== selectedFilters.country) return false;
                  if (selectedFilters.city !== 'all' && dev.city !== selectedFilters.city) return false;
                  if (selectedFilters.role !== 'all' && !dev.role.toLowerCase().includes(selectedFilters.role.toLowerCase())) return false;
                  
                  // Filter by search query
                  if (searchQuery && searchQuery.trim() !== '') {
                    const hits = getKeywordHits(dev, searchQuery);
                    return hits.exact.length > 0 || hits.related.length > 0;
                  }
                  
                  return true;
                }).length} developers found
              </span>
              <select className="sort-select">
                <option>Relevance</option>
                <option>Most Verified</option>
                <option>Most Titles</option>
                <option>Newest</option>
              </select>
            </div>

            {developers
              .filter(dev => {
                if (selectedFilters.country !== 'all' && dev.country !== selectedFilters.country) return false;
                if (selectedFilters.city !== 'all' && dev.city !== selectedFilters.city) return false;
                if (selectedFilters.role !== 'all' && !dev.role.toLowerCase().includes(selectedFilters.role.toLowerCase())) return false;
                
                // Filter by search query
                if (searchQuery && searchQuery.trim() !== '') {
                  const hits = getKeywordHits(dev, searchQuery);
                  return hits.exact.length > 0 || hits.related.length > 0;
                }
                
                return true;
              })
              .map(dev => {
                const hits = getKeywordHits(dev, searchQuery);
                const verification = getVerificationBadge(dev.verified);
                return { dev, hits, verification };
              })
              .sort((a, b) => b.hits.score - a.hits.score)
              .map(({ dev, hits, verification }) => (
                <div key={dev.id} className="developer-card" style={{position: 'relative'}}>
                  <div className="developer-header">
                    <div className="developer-avatar">
                      <img src={dev.avatar} alt={dev.name} />
                      <span className={`verification-indicator ${verification.className}`}>
                        {verification.icon}
                      </span>
                    </div>
                    <div className="developer-info-wrapper">
                      <div className="developer-info">
                        <h2 className="developer-name">{dev.name}</h2>
                        <p className="developer-role">{dev.role}</p>
                        <p className="developer-location">{dev.location}</p>
                      </div>
                      <div className="developer-stats-compact-horizontal">
                        <div className="stat-item-compact">
                          <span className="stat-label-compact">Shipped</span>
                          <span className="stat-value-compact">{dev.metrics.titlesShipped}</span>
                        </div>
                        <div className="stat-item-compact">
                          <span className="stat-label-compact">In Dev</span>
                          <span className="stat-value-compact">{dev.metrics.titlesInDevelopment}</span>
                        </div>
                        <div className="stat-item-compact">
                          <span className="stat-label-compact">Early Access</span>
                          <span className="stat-value-compact">{dev.metrics.earlyAccessGames}</span>
                        </div>
                        <div className="stat-item-compact">
                          <span className="stat-label-compact">Workshop</span>
                          <span className="stat-value-compact">{dev.metrics.workshopAssets}</span>
                        </div>
                      </div>
                    </div>
                    {searchQuery && searchQuery.trim() !== '' && (
                      <div className="developer-keyword-hits">
                        {hits.exact.length > 0 && (
                          <div className="keyword-hits-exact">
                            <span className="keyword-hits-label">Exact:</span>
                            <span className="keyword-hits-count">{hits.exact.length}</span>
                          </div>
                        )}
                        {hits.related.length > 0 && (
                          <div className="keyword-hits-related">
                            <span className="keyword-hits-label">Related:</span>
                            <span className="keyword-hits-count">{hits.related.length}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  
                  <div className="developer-skills">
                    <div className="skills-group">
                      <span className="skills-label">Languages:</span>
                      {dev.languages.map((lang, idx) => {
                        const isExactMatch = hits.exact.some(h => h.includes(`Language: ${lang}`));
                        const isRelatedMatch = hits.related.some(h => h.includes(`Language: ${lang}`));
                        return (
                          <span 
                            key={idx} 
                            className={`skill-tag ${isExactMatch ? 'skill-match-exact' : isRelatedMatch ? 'skill-match-related' : ''}`}
                          >
                            {lang}
                          </span>
                        );
                      })}
                    </div>
                    <div className="skills-group">
                      <span className="skills-label">Specialties:</span>
                      {dev.specialties.map((spec, idx) => {
                        const isExactMatch = hits.exact.some(h => h.includes(`Specialty: ${spec}`));
                        const isRelatedMatch = hits.related.some(h => h.includes(`Specialty: ${spec}`));
                        return (
                          <span 
                            key={idx} 
                            className={`skill-tag specialty ${isExactMatch ? 'skill-match-exact' : isRelatedMatch ? 'skill-match-related' : ''}`}
                          >
                            {spec}
                          </span>
                        );
                      })}
                    </div>
                    
                    {searchQuery && searchQuery.trim() !== '' && (hits.exact.length > 0 || hits.related.length > 0) && (
                      <div className="keyword-matches-detail">
                        {hits.exact.length > 0 && (
                          <div className="matches-section">
                            <span className="matches-label exact-label">Exact Matches:</span>
                            <div className="matches-list">
                              {hits.exact.map((hit, idx) => (
                                <span key={idx} className="match-tag match-exact">{hit}</span>
                              ))}
                            </div>
                          </div>
                        )}
                        {hits.related.length > 0 && (
                          <div className="matches-section">
                            <span className="matches-label related-label">Related Matches:</span>
                            <div className="matches-list">
                              {hits.related.map((hit, idx) => (
                                <span key={idx} className="match-tag match-related">{hit}</span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="developer-actions">
                    <button className="btn-secondary">View Portfolio</button>
                    <button className="btn-primary">Contact</button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default RecruiterSearch;

