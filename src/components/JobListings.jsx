import React, { useState } from 'react';
import '../App.css';

function JobListings() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const jobListings = [
    {
      id: 1,
      title: "Combat Systems Programmer",
      company: "Cyber Studios",
      location: "Remote",
      type: "Contract",
      posted: "2 days ago",
      description: "Build reload state machine and combat systems for action RPG",
      role: "Gameplay Programmer",
      subRole: "Combat Systems",
      deliverables: ["Reload state machine system", "Combat animation integration", "Weapon handling mechanics"],
      tools: ["Unity", "C++", "Animation Systems"],
      requiredEvidence: ["Previous combat systems work", "Code samples or repos", "Technical demo video"],
      tags: ["#combat-systems", "#gunplay", "#state-machines"],
      salary: "$80k - $120k",
      verified: true,
      isBrief: true
    },
    {
      id: 2,
      title: "First-Person Animation Specialist",
      company: "StoryForge Games",
      location: "Remote",
      type: "Contract",
      posted: "5 days ago",
      description: "Create first-person reload animations and transitions for FPS game",
      role: "Animator",
      subRole: "First-person Animation",
      deliverables: ["Reload animation sequences", "Smooth transition system", "Animation state machine setup"],
      tools: ["Unreal Engine", "Blender", "Maya"],
      requiredEvidence: ["Animation reel", "Previous FPS work", "Technical breakdown"],
      tags: ["#reload-animations", "#first-person", "#animation"],
      salary: "$60k - $90k",
      verified: true,
      isBrief: true
    },
    {
      id: 3,
      title: "Shader Programming - Jiggle Physics",
      company: "Artisan Games",
      location: "Remote",
      type: "Contract",
      posted: "1 week ago",
      description: "Implement cloth and character jiggle physics using HLSL shaders",
      role: "Technical Artist",
      subRole: "Shader Programming",
      deliverables: ["Jiggle physics shader system", "Performance optimized solution", "Integration documentation"],
      tools: ["Unity", "HLSL", "Shader Graph"],
      requiredEvidence: ["Shader portfolio", "Previous physics work", "Performance metrics"],
      tags: ["#jiggle-physics", "#shaders", "#technical-art"],
      salary: "$50/hr",
      verified: false,
      isBrief: true
    },
    {
      id: 4,
      title: "Senior Gameplay Programmer - Full-time",
      company: "Arena Games",
      location: "Remote",
      type: "Full-time",
      posted: "3 days ago",
      description: "Work on cutting-edge multiplayer systems for competitive shooter.",
      requirements: ["Networking", "C++", "Unreal Engine", "5+ years experience"],
      salary: "$90k - $130k",
      verified: true,
      isBrief: false
    }
  ];

  return (
    <main className="main-content">
      <section className="jobs-section">
        <div className="jobs-header">
          <h1 className="jobs-title">Job Opportunities</h1>
          <p className="jobs-subtitle">Find your next role in game development</p>
        </div>

        <div className="jobs-layout">
          <div className="jobs-sidebar">
            <div className="filter-card">
              <h3 className="filter-title">Filter by Category</h3>
              <div className="filter-options">
                <button 
                  className={`filter-option ${selectedCategory === 'all' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('all')}
                >
                  All Jobs
                </button>
                <button 
                  className={`filter-option ${selectedCategory === 'programming' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('programming')}
                >
                  Programming
                </button>
                <button 
                  className={`filter-option ${selectedCategory === 'design' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('design')}
                >
                  Design
                </button>
                <button 
                  className={`filter-option ${selectedCategory === 'art' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('art')}
                >
                  Art
                </button>
              </div>
            </div>

            <div className="filter-card">
              <h3 className="filter-title">Job Type</h3>
              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input type="checkbox" defaultChecked />
                  Full-time
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" />
                  Contract
                </label>
                <label className="checkbox-label">
                  <input type="checkbox" />
                  Remote
                </label>
              </div>
            </div>
          </div>

          <div className="jobs-list">
            {jobListings.map(job => (
              <div key={job.id} className={`job-card ${job.isBrief ? 'job-brief' : ''}`} style={{position: 'relative'}}>
                <div className="job-card-header">
                  <div className="job-info">
                    {job.isBrief && (
                      <div className="brief-badge-inline">Project Brief</div>
                    )}
                    <h2 className="job-title">{job.title}</h2>
                    <div className="job-meta">
                      <span className="job-company">{job.company}</span>
                      <span>•</span>
                      <span className="job-location">{job.location}</span>
                      <span>•</span>
                      <span className="job-type">{job.type}</span>
                    </div>
                  </div>
                  <div className="job-header-badges">
                    {job.verified && (
                      <span className="badge-verified">✓ Verified Studio</span>
                    )}
                  </div>
                </div>
                <p className="job-description">{job.description}</p>
                
                {job.isBrief ? (
                  <>
                    <div className="brief-details">
                      <div className="brief-section">
                        <h4 className="brief-label">Role Pack</h4>
                        <div className="brief-role-info">
                          <span className="brief-role">{job.role}</span>
                          {job.subRole && <span className="brief-subrole"> • {job.subRole}</span>}
                        </div>
                      </div>
                      
                      <div className="brief-section">
                        <h4 className="brief-label">Deliverables</h4>
                        <ul className="brief-list">
                          {job.deliverables.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="brief-section">
                        <h4 className="brief-label">Required Tools</h4>
                        <div className="brief-tools">
                          {job.tools.map((tool, idx) => (
                            <span key={idx} className="tool-tag">{tool}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="brief-section">
                        <h4 className="brief-label">Required Evidence</h4>
                        <ul className="brief-list">
                          {job.requiredEvidence.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="brief-section">
                        <h4 className="brief-label">Tags</h4>
                        <div className="brief-tags">
                          {job.tags.map((tag, idx) => (
                            <span key={idx} className="tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="job-requirements">
                    {job.requirements && job.requirements.map((req, idx) => (
                      <span key={idx} className="requirement-tag">{req}</span>
                    ))}
                  </div>
                )}
                
                <div className="job-footer">
                  <div className="job-salary">{job.salary}</div>
                  <div className="job-actions">
                    <span className="job-posted">Posted {job.posted}</span>
                    <button className="btn-primary">{job.isBrief ? 'Submit Proposal' : 'Apply'}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default JobListings;

