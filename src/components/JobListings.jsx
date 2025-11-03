import React, { useState } from 'react';
import '../App.css';
import { CREATOR_TYPES, CREATOR_TYPE_LABELS, ROLES_BY_TYPE, ALL_ROLES } from '../data/roleConstants';

// InfoAnnotation component
function InfoAnnotation({ id, title, content, position, onClose, style }) {
  const [isVisible, setIsVisible] = useState(true);
  
  if (!isVisible) return null;
  
  const handleClose = () => {
    setIsVisible(false);
    if (onClose) onClose(id);
  };
  
  return (
    <div className={`info-annotation ${position}`} style={style}>
      <div className="info-annotation-header">
        <div className="info-annotation-title">{title}</div>
        <button className="info-annotation-close" onClick={handleClose}>×</button>
      </div>
      <div className="info-annotation-content">{content}</div>
    </div>
  );
}

function JobListings() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCreatorTypes, setSelectedCreatorTypes] = useState([]);
  const [showPostForm, setShowPostForm] = useState(false);
  const [dismissedAnnotations, setDismissedAnnotations] = useState(new Set());
  const [techInput, setTechInput] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [deliverableInput, setDeliverableInput] = useState('');
  const [evidenceInput, setEvidenceInput] = useState('');

  const handleDismissAnnotation = (id) => {
    setDismissedAnnotations(prev => new Set([...prev, id]));
  };

  const [jobFormData, setJobFormData] = useState({
    title: '',
    company: '',
    location: '',
    type: 'Contract',
    creatorTypes: [],
    role: '',
    subRole: '',
    scope: '',
    description: '',
    deliverables: [''],
    technologies: [],
    requiredEvidence: [''],
    tags: [],
    salary: '',
    isBrief: true
  });

  // Updated job listings with creatorTypes
  const jobListings = [
    {
      id: 1,
      title: "Combat Systems Programmer",
      company: "Cyber Studios",
      location: "Remote",
      type: "Contract",
      posted: "2 days ago",
      description: "Build reload state machine and combat systems for action RPG",
      creatorTypes: [CREATOR_TYPES.PROGRAMMING],
      role: "Gameplay Programmer",
      subRole: "Combat Systems",
      scope: "Build reload state machine and combat systems for action RPG",
      deliverables: ["Reload state machine system", "Combat animation integration", "Weapon handling mechanics"],
      technologies: ["Unity", "C++", "Animation Systems"],
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
      creatorTypes: [CREATOR_TYPES.ANIMATION],
      role: "Animator",
      subRole: "First-person Animation",
      scope: "Create first-person reload animations and transitions for FPS game",
      deliverables: ["Reload animation sequences", "Smooth transition system", "Animation state machine setup"],
      technologies: ["Unreal Engine", "Blender", "Maya"],
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
      creatorTypes: [CREATOR_TYPES.TECHNICAL],
      role: "Technical Artist",
      subRole: "Shader Programming",
      scope: "Implement cloth and character jiggle physics using HLSL shaders",
      deliverables: ["Jiggle physics shader system", "Performance optimized solution", "Integration documentation"],
      technologies: ["Unity", "HLSL", "Shader Graph"],
      requiredEvidence: ["Shader portfolio", "Previous physics work", "Performance metrics"],
      tags: ["#jiggle-physics", "#shaders", "#technical-art"],
      salary: "$50/hr",
      verified: false,
      isBrief: true
    },
    {
      id: 4,
      title: "3D Character Artist",
      company: "Fantasy Forge",
      location: "Oslo, Norway",
      type: "Full-time",
      posted: "1 week ago",
      description: "Create high-quality character models for fantasy RPG",
      creatorTypes: [CREATOR_TYPES.ART_3D],
      role: "Character Artist",
      subRole: "Character Modeling",
      scope: "Create high-quality character models, textures, and rigs for fantasy RPG",
      deliverables: ["Character models", "Textures and materials", "Rigged characters"],
      technologies: ["Maya", "ZBrush", "Substance Painter"],
      requiredEvidence: ["Character art portfolio", "Previous game work", "Model samples"],
      tags: ["#character-art", "#3d-modeling", "#texturing"],
      salary: "$70k - $95k",
      verified: true,
      isBrief: true
    },
    {
      id: 5,
      title: "Game Composer",
      company: "Soundscape Studios",
      location: "Remote",
      type: "Contract",
      posted: "3 days ago",
      description: "Compose original soundtrack for sci-fi adventure game",
      creatorTypes: [CREATOR_TYPES.AUDIO],
      role: "Composer",
      subRole: "Music Production",
      scope: "Compose and implement original soundtrack for sci-fi adventure game",
      deliverables: ["Original soundtrack", "Interactive music system", "Implementation in engine"],
      technologies: ["Wwise", "FMOD", "Reaper", "Pro Tools"],
      requiredEvidence: ["Portfolio/reel", "Previous game music", "Audio samples"],
      tags: ["#music", "#composition", "#interactive-audio"],
      salary: "$55k - $80k",
      verified: true,
      isBrief: true
    },
    {
      id: 6,
      title: "Senior Gameplay Programmer - Full-time",
      company: "Arena Games",
      location: "Remote",
      type: "Full-time",
      posted: "3 days ago",
      description: "Work on cutting-edge multiplayer systems for competitive shooter.",
      creatorTypes: [CREATOR_TYPES.PROGRAMMING],
      requirements: ["Networking", "C++", "Unreal Engine", "5+ years experience"],
      salary: "$90k - $130k",
      verified: true,
      isBrief: false
    }
  ];

  // Filter jobs by creator type
  const filteredJobs = jobListings.filter(job => {
    if (selectedCreatorTypes.length === 0) return true;
    if (!job.creatorTypes) return false;
    return job.creatorTypes.some(type => selectedCreatorTypes.includes(type));
  });

  // Get available roles based on selected creator types
  const getAvailableRoles = () => {
    if (jobFormData.creatorTypes.length === 0) return ALL_ROLES;
    return jobFormData.creatorTypes.flatMap(type => ROLES_BY_TYPE[type] || []);
  };

  const handleTechnologyAdd = () => {
    const tech = techInput.trim();
    if (tech && !jobFormData.technologies.includes(tech)) {
      setJobFormData({...jobFormData, technologies: [...jobFormData.technologies, tech]});
      setTechInput('');
    }
  };

  const handleTagAdd = () => {
    const tag = tagInput.trim();
    if (tag && !jobFormData.tags.includes(tag)) {
      setJobFormData({...jobFormData, tags: [...jobFormData.tags, tag]});
      setTagInput('');
    }
  };

  const handleDeliverableAdd = () => {
    const deliverable = deliverableInput.trim();
    if (deliverable) {
      setJobFormData({
        ...jobFormData,
        deliverables: [...jobFormData.deliverables.filter(d => d !== ''), deliverable, '']
      });
      setDeliverableInput('');
    }
  };

  const handleEvidenceAdd = () => {
    const evidence = evidenceInput.trim();
    if (evidence) {
      setJobFormData({
        ...jobFormData,
        requiredEvidence: [...jobFormData.requiredEvidence.filter(e => e !== ''), evidence, '']
      });
      setEvidenceInput('');
    }
  };

  return (
    <main className="main-content">
      <section className="jobs-section">
        <div className="jobs-header" style={{position: 'relative'}}>
          <h1 className="jobs-title">Job Opportunities</h1>
          <p className="jobs-subtitle">Find your next role in game development</p>
          <div style={{position: 'relative', display: 'inline-block', marginTop: '20px'}}>
            {!dismissedAnnotations.has('post-job-discovery') && !showPostForm && (
              <InfoAnnotation
                id="post-job-discovery"
                title="Post a Job / Project Brief"
                content="Click 'Post New Job / Brief' to create a job listing using Coupler's role-based language system. Job postings use the same structure as creator contributions (Role, Sub-role, Scope, Tags) ensuring accurate matching between studios and talent."
                position="annotation-bottom"
                onClose={handleDismissAnnotation}
                style={{top: '100%', left: '0', marginTop: '15px', zIndex: 1001, maxWidth: '400px'}}
              />
            )}
            <button className="btn-primary" onClick={() => setShowPostForm(!showPostForm)}>
              {showPostForm ? 'Cancel' : '+ Post New Job / Brief'}
            </button>
          </div>
        </div>

        {showPostForm && (
          <div className="dashboard-card" style={{marginBottom: '40px'}}>
            <h2 className="card-title">Post New Job / Project Brief</h2>
            <p className="card-description">Create a job listing using the same role-based structure as creator profiles. This ensures accurate matching.</p>
            
            <div className="form-section">
              <h3 className="form-section-title">Basic Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>Job Title <span className="required">*</span></label>
                  <input 
                    type="text"
                    className="form-input"
                    value={jobFormData.title}
                    onChange={(e) => setJobFormData({...jobFormData, title: e.target.value})}
                    placeholder="e.g., Combat Systems Programmer"
                  />
                </div>
                <div className="form-group">
                  <label>Company/Studio <span className="required">*</span></label>
                  <input 
                    type="text"
                    className="form-input"
                    value={jobFormData.company}
                    onChange={(e) => setJobFormData({...jobFormData, company: e.target.value})}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Location <span className="required">*</span></label>
                  <input 
                    type="text"
                    className="form-input"
                    value={jobFormData.location}
                    onChange={(e) => setJobFormData({...jobFormData, location: e.target.value})}
                    placeholder="e.g., Remote, Oslo, Norway"
                  />
                </div>
                <div className="form-group">
                  <label>Job Type <span className="required">*</span></label>
                  <select
                    className="form-input"
                    value={jobFormData.type}
                    onChange={(e) => setJobFormData({...jobFormData, type: e.target.value})}
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Freelance">Freelance</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label>Description <span className="required">*</span></label>
                <textarea
                  className="form-textarea"
                  rows="2"
                  value={jobFormData.description}
                  onChange={(e) => setJobFormData({...jobFormData, description: e.target.value})}
                  placeholder="Brief description of the role"
                />
              </div>
              <div className="form-group">
                <label>Salary/Compensation</label>
                <input 
                  type="text"
                  className="form-input"
                  value={jobFormData.salary}
                  onChange={(e) => setJobFormData({...jobFormData, salary: e.target.value})}
                  placeholder="e.g., $80k - $120k or $50/hr"
                />
              </div>
            </div>

            <div className="form-section">
              <h3 className="form-section-title">Creator Types We're Looking For <span className="required">*</span></h3>
              <div className="form-hint">Select which types of creators can apply for this position</div>
              <div className="checkbox-group" style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px', marginTop: '10px'}}>
                {Object.entries(CREATOR_TYPES).map(([key, value]) => (
                  <label key={value} className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={jobFormData.creatorTypes.includes(value)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setJobFormData({
                            ...jobFormData,
                            creatorTypes: [...jobFormData.creatorTypes, value],
                            role: '' // Reset role when creator types change
                          });
                        } else {
                          setJobFormData({
                            ...jobFormData,
                            creatorTypes: jobFormData.creatorTypes.filter(t => t !== value),
                            role: ''
                          });
                        }
                      }}
                    />
                    {CREATOR_TYPE_LABELS[value]}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-section" style={{position: 'relative'}}>
              <h3 className="form-section-title">Role & Scope</h3>
              {!dismissedAnnotations.has('role-based-language') && (
                <InfoAnnotation
                  id="role-based-language"
                  title="Role-Based Language System"
                  content="Coupler uses a standardized role-based language (Role → Sub-Role → Scope) that matches exactly with how creators document their contributions. This ensures accurate matching: studios post what they need using the same terminology creators use to describe what they've done."
                  position="annotation-top"
                  onClose={handleDismissAnnotation}
                  style={{top: '-100px', left: '0', zIndex: 1001, maxWidth: '380px'}}
                />
              )}
              <div className="form-row">
                <div className="form-group" style={{position: 'relative'}}>
                  <label>Role (Primary Craft Lane) <span className="required">*</span></label>
                  <select
                    className="form-input"
                    value={jobFormData.role}
                    onChange={(e) => {
                      setJobFormData({...jobFormData, role: e.target.value, subRole: ''});
                    }}
                    disabled={jobFormData.creatorTypes.length === 0}
                  >
                    <option value="">Select Role</option>
                    {getAvailableRoles().map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                  <div className="form-hint">Select from roles matching your chosen creator types. This matches the same role structure creators use in their portfolios.</div>
                </div>
                <div className="form-group">
                  <label>Sub-Role (Specialization) <span className="required">*</span></label>
                  <input
                    type="text"
                    className="form-input"
                    value={jobFormData.subRole}
                    onChange={(e) => setJobFormData({...jobFormData, subRole: e.target.value})}
                    placeholder="e.g., Combat systems, First-person animation, Implementation & mixing"
                  />
                  <div className="form-hint">Your specialization within the role. This should match how creators describe their sub-roles in their contributions.</div>
                </div>
              </div>
              <div className="form-group">
                <label>Scope (What Needs to Be Done) <span className="required">*</span></label>
                <textarea
                  className="form-textarea"
                  rows="3"
                  value={jobFormData.scope}
                  onChange={(e) => setJobFormData({...jobFormData, scope: e.target.value})}
                  placeholder="e.g., Build reload state machine, Create first-person reload animations, Implement jiggle physics shader"
                />
                <div className="form-hint">Describe what needs to be accomplished - specific systems, features, or deliverables. This mirrors the 'Scope' field in creator contributions.</div>
              </div>
            </div>

            <div className="form-section">
              <h3 className="form-section-title">Deliverables</h3>
              <div className="form-hint">What specific deliverables are expected from this role?</div>
              <div style={{display: 'flex', gap: '10px', marginTop: '10px'}}>
                <input
                  type="text"
                  className="form-input"
                  value={deliverableInput}
                  onChange={(e) => setDeliverableInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleDeliverableAdd()}
                  placeholder="Enter deliverable"
                />
                <button type="button" className="btn-secondary" onClick={handleDeliverableAdd}>Add</button>
              </div>
              <div style={{marginTop: '10px'}}>
                {jobFormData.deliverables.filter(d => d !== '').map((deliverable, idx) => (
                  <span key={idx} className="tool-tag" style={{marginRight: '8px', marginBottom: '8px', display: 'inline-block'}}>
                    {deliverable}
                    <button
                      type="button"
                      onClick={() => {
                        const newDeliverables = [...jobFormData.deliverables];
                        newDeliverables.splice(idx, 1);
                        if (newDeliverables.length === 0) newDeliverables.push('');
                        setJobFormData({...jobFormData, deliverables: newDeliverables});
                      }}
                      style={{marginLeft: '8px', background: 'none', border: 'none', color: 'inherit', cursor: 'pointer'}}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div className="form-section">
              <h3 className="form-section-title">Technologies & Tools</h3>
              <div className="form-hint">Required technologies, engines, or tools</div>
              <div style={{display: 'flex', gap: '10px', marginTop: '10px'}}>
                <input
                  type="text"
                  className="form-input"
                  value={techInput}
                  onChange={(e) => setTechInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleTechnologyAdd()}
                  placeholder="e.g., Unity, C++, Blender"
                />
                <button type="button" className="btn-secondary" onClick={handleTechnologyAdd}>Add</button>
              </div>
              <div style={{marginTop: '10px'}}>
                {jobFormData.technologies.map((tech, idx) => (
                  <span key={idx} className="tool-tag" style={{marginRight: '8px', marginBottom: '8px', display: 'inline-block'}}>
                    {tech}
                    <button
                      type="button"
                      onClick={() => setJobFormData({...jobFormData, technologies: jobFormData.technologies.filter((_, i) => i !== idx)})}
                      style={{marginLeft: '8px', background: 'none', border: 'none', color: 'inherit', cursor: 'pointer'}}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div className="form-section">
              <h3 className="form-section-title">Required Evidence</h3>
              <div className="form-hint">What evidence should applicants provide? (e.g., repos, portfolios, demos)</div>
              <div style={{display: 'flex', gap: '10px', marginTop: '10px'}}>
                <input
                  type="text"
                  className="form-input"
                  value={evidenceInput}
                  onChange={(e) => setEvidenceInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleEvidenceAdd()}
                  placeholder="e.g., Previous combat systems work, Code samples"
                />
                <button type="button" className="btn-secondary" onClick={handleEvidenceAdd}>Add</button>
              </div>
              <div style={{marginTop: '10px'}}>
                {jobFormData.requiredEvidence.filter(e => e !== '').map((evidence, idx) => (
                  <span key={idx} className="tool-tag" style={{marginRight: '8px', marginBottom: '8px', display: 'inline-block'}}>
                    {evidence}
                    <button
                      type="button"
                      onClick={() => {
                        const newEvidence = [...jobFormData.requiredEvidence];
                        newEvidence.splice(idx, 1);
                        if (newEvidence.length === 0) newEvidence.push('');
                        setJobFormData({...jobFormData, requiredEvidence: newEvidence});
                      }}
                      style={{marginLeft: '8px', background: 'none', border: 'none', color: 'inherit', cursor: 'pointer'}}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div className="form-section" style={{position: 'relative'}}>
              <h3 className="form-section-title">Developer Tags</h3>
              {!dismissedAnnotations.has('developer-tags') && (
                <InfoAnnotation
                  id="developer-tags"
                  title="Developer Tags & Jargon"
                  content="Use game developer jargon tags (e.g., #gunplay, #reload-animations, #jiggle-physics, #combat-systems) to specify skills. These tags match exactly with the tags creators use in their contributions, enabling precise skill-based matching. Tags like #flight-physics, #networking, or #behavior-trees help connect studios with creators who have relevant niche expertise."
                  position="annotation-top"
                  onClose={handleDismissAnnotation}
                  style={{top: '-120px', left: '0', zIndex: 1001, maxWidth: '380px'}}
                />
              )}
              <div className="form-hint">Use game developer jargon tags that match the same tags creators use in their contributions. Examples: #gunplay, #reload-animations, #jiggle-physics, #combat-systems, #flight-physics, #networking, #behavior-trees</div>
              <div style={{display: 'flex', gap: '10px', marginTop: '10px'}}>
                <input
                  type="text"
                  className="form-input"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleTagAdd()}
                  placeholder="#combat-systems"
                />
                <button type="button" className="btn-secondary" onClick={handleTagAdd}>Add</button>
              </div>
              <div style={{marginTop: '10px'}}>
                {jobFormData.tags.map((tag, idx) => (
                  <span key={idx} className="tag" style={{marginRight: '8px', marginBottom: '8px', display: 'inline-block'}}>
                    {tag}
                    <button
                      type="button"
                      onClick={() => setJobFormData({...jobFormData, tags: jobFormData.tags.filter((_, i) => i !== idx)})}
                      style={{marginLeft: '8px', background: 'none', border: 'none', color: 'inherit', cursor: 'pointer'}}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div style={{marginTop: '30px', display: 'flex', gap: '10px'}}>
              <button className="btn-primary" onClick={() => {
                console.log('Job posted:', jobFormData);
                alert('Job posted successfully! (This is a mockup)');
                setShowPostForm(false);
                // Reset form
                setJobFormData({
                  title: '', company: '', location: '', type: 'Contract',
                  creatorTypes: [], role: '', subRole: '', scope: '', description: '',
                  deliverables: [''], technologies: [], requiredEvidence: [''], tags: [], salary: '', isBrief: true
                });
              }}>
                Post Job / Brief
              </button>
              <button className="btn-secondary" onClick={() => setShowPostForm(false)}>Cancel</button>
            </div>
          </div>
        )}

        <div className="jobs-layout">
          <div className="jobs-sidebar">
            <div className="filter-card">
              <h3 className="filter-title">Creator Types</h3>
              <div className="checkbox-group">
                {Object.entries(CREATOR_TYPES).map(([key, value]) => (
                  <label key={value} className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={selectedCreatorTypes.includes(value)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedCreatorTypes([...selectedCreatorTypes, value]);
                        } else {
                          setSelectedCreatorTypes(selectedCreatorTypes.filter(t => t !== value));
                        }
                      }}
                    />
                    {CREATOR_TYPE_LABELS[value]}
                  </label>
                ))}
              </div>
              {selectedCreatorTypes.length > 0 && (
                <button 
                  className="filter-clear"
                  onClick={() => setSelectedCreatorTypes([])}
                  style={{marginTop: '10px', padding: '4px 8px', fontSize: '12px'}}
                >
                  Clear Filters
                </button>
              )}
            </div>

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
            {filteredJobs.length === 0 ? (
              <div style={{textAlign: 'center', padding: '40px', color: 'var(--steam-text-secondary)'}}>
                <p>No jobs match your selected creator type filters.</p>
                <button 
                  className="btn-secondary" 
                  onClick={() => setSelectedCreatorTypes([])}
                  style={{marginTop: '10px'}}
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              filteredJobs.map(job => (
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
                        {job.creatorTypes && job.creatorTypes.length > 0 && (
                          <div className="brief-section">
                            <h4 className="brief-label">Creator Types</h4>
                            <div className="brief-tools">
                              {job.creatorTypes.map((type, idx) => (
                                <span key={idx} className="tool-tag">{CREATOR_TYPE_LABELS[type]}</span>
                              ))}
                            </div>
                          </div>
                        )}
                        <div className="brief-section">
                          <h4 className="brief-label">Role Pack</h4>
                          <div className="brief-role-info">
                            <span className="brief-role">{job.role}</span>
                            {job.subRole && <span className="brief-subrole"> • {job.subRole}</span>}
                          </div>
                          {job.scope && (
                            <div style={{marginTop: '8px', color: 'var(--steam-text-secondary)', fontSize: '14px'}}>
                              {job.scope}
                            </div>
                          )}
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
                            {job.technologies.map((tool, idx) => (
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
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default JobListings;
