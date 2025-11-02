import React, { useState } from 'react';
import '../App.css';

function JobListings() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const jobListings = [
    {
      id: 1,
      title: "Senior Gameplay Programmer",
      company: "Cyber Studios",
      location: "Remote",
      type: "Full-time",
      posted: "2 days ago",
      description: "Seeking experienced gameplay programmer for AAA action RPG. Must have experience with Unity and C++.",
      requirements: ["C++", "Unity", "5+ years experience"],
      salary: "$80k - $120k",
      verified: true
    },
    {
      id: 2,
      title: "Narrative Designer",
      company: "StoryForge Games",
      location: "San Francisco, CA",
      type: "Full-time",
      posted: "5 days ago",
      description: "Join our team working on an innovative narrative-driven adventure game.",
      requirements: ["Narrative Design", "Writing", "3+ years experience"],
      salary: "$60k - $90k",
      verified: true
    },
    {
      id: 3,
      title: "3D Environment Artist",
      company: "Artisan Games",
      location: "Los Angeles, CA",
      type: "Contract",
      posted: "1 week ago",
      description: "Create stunning environments for our upcoming fantasy RPG.",
      requirements: ["Blender", "3D Modeling", "Portfolio"],
      salary: "$50/hr",
      verified: false
    },
    {
      id: 4,
      title: "Gameplay Programmer - Multiplayer",
      company: "Arena Games",
      location: "Remote",
      type: "Full-time",
      posted: "3 days ago",
      description: "Work on cutting-edge multiplayer systems for competitive shooter.",
      requirements: ["Networking", "C++", "Unreal Engine"],
      salary: "$90k - $130k",
      verified: true
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
              <div key={job.id} className="job-card">
                <div className="job-card-header">
                  <div className="job-info">
                    <h2 className="job-title">{job.title}</h2>
                    <div className="job-meta">
                      <span className="job-company">{job.company}</span>
                      <span>•</span>
                      <span className="job-location">{job.location}</span>
                      <span>•</span>
                      <span className="job-type">{job.type}</span>
                    </div>
                  </div>
                  {job.verified && (
                    <span className="badge-verified">✓ Verified Studio</span>
                  )}
                </div>
                <p className="job-description">{job.description}</p>
                <div className="job-requirements">
                  {job.requirements.map((req, idx) => (
                    <span key={idx} className="requirement-tag">{req}</span>
                  ))}
                </div>
                <div className="job-footer">
                  <div className="job-salary">{job.salary}</div>
                  <div className="job-actions">
                    <span className="job-posted">Posted {job.posted}</span>
                    <button className="btn-primary">Apply</button>
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

