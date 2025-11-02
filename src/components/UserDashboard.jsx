import React, { useState } from 'react';
import '../App.css';

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

function UserDashboard() {
  const [selectedTab, setSelectedTab] = useState('profile');
  const [editingContribution, setEditingContribution] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [dismissedAnnotations, setDismissedAnnotations] = useState(new Set());
  
  const handleDismissAnnotation = (id) => {
    setDismissedAnnotations(prev => new Set([...prev, id]));
  };
  const [formData, setFormData] = useState({
    title: '',
    type: 'Full Release',
    year: new Date().getFullYear(),
    role: '',
    subRole: '',
    scope: '',
    description: '',
    detailedDescription: '',
    teamSize: '',
    duration: '',
    responsibilities: '',
    linesOfCode: '',
    technologies: [],
    tags: [],
    keyContributions: [''],
    artifacts: []
  });
  const [techInput, setTechInput] = useState('');
  const [tagInput, setTagInput] = useState('');
  const [artifactType, setArtifactType] = useState('repo');
  const [artifactLabel, setArtifactLabel] = useState('');
  const [artifactUrl, setArtifactUrl] = useState('');

  const handleEdit = (contribution) => {
    setEditingContribution(contribution);
    setShowAddForm(false);
  };

  const handleAddNew = () => {
    setEditingContribution(null);
    setShowAddForm(true);
  };

  const handleTechnologyAdd = () => {
    const tech = techInput.trim();
    if (tech && !formData.technologies.includes(tech)) {
      setFormData({...formData, technologies: [...formData.technologies, tech]});
      setTechInput('');
    }
  };

  const handleTagAdd = () => {
    const tag = tagInput.trim();
    if (tag && !formData.tags.includes(tag)) {
      setFormData({...formData, tags: [...formData.tags, tag]});
      setTagInput('');
    }
  };

  const handleArtifactAdd = () => {
    const label = artifactLabel.trim();
    const url = artifactUrl.trim();
    if (label && url) {
      setFormData({...formData, artifacts: [...formData.artifacts, { type: artifactType, label, url }]});
      setArtifactLabel('');
      setArtifactUrl('');
    }
  };

  return (
    <main className="main-content">
      <section className="dashboard-section">
        <div className="dashboard-header" style={{position: 'relative'}}>
          <h1 className="dashboard-title">My Dashboard</h1>
          <div className="dashboard-tabs" style={{position: 'relative'}}>
            <button 
              className={`dashboard-tab ${selectedTab === 'profile' ? 'active' : ''}`}
              onClick={() => setSelectedTab('profile')}
            >
              Profile Settings
            </button>
            <div style={{position: 'relative', display: 'inline-block'}}>
              {!dismissedAnnotations.has('my-contributions-tab') && selectedTab !== 'contributions' && (
                <InfoAnnotation
                  id="my-contributions-tab"
                  title="Go to My Contributions"
                  content="Click 'My Contributions' to view and edit your verified contributions. Here you can update your work history, add evidence, and improve verification status."
                  position="annotation-bottom"
                  onClose={handleDismissAnnotation}
                  style={{top: '100%', left: '0', marginTop: '10px', zIndex: 1001, maxWidth: '300px'}}
                />
              )}
              <button 
                className={`dashboard-tab ${selectedTab === 'contributions' ? 'active' : ''}`}
                onClick={() => setSelectedTab('contributions')}
              >
                My Contributions
              </button>
            </div>
            <button 
              className={`dashboard-tab ${selectedTab === 'connections' ? 'active' : ''}`}
              onClick={() => setSelectedTab('connections')}
            >
              Steam Connections
            </button>
          </div>
        </div>

        {selectedTab === 'profile' && (
          <div className="dashboard-content">
            <div className="dashboard-card">
              <h2 className="card-title">Profile Information</h2>
              <div className="form-group">
                <label>Display Name</label>
                <input type="text" className="form-input" defaultValue="Alex Chen" />
              </div>
              <div className="form-group">
                <label>Role/Title</label>
                <input type="text" className="form-input" defaultValue="Game Designer & Developer" />
              </div>
              <div className="form-group">
                <label>Location</label>
                <input type="text" className="form-input" defaultValue="Oslo, Norway" />
              </div>
              <div className="form-group">
                <label>Bio</label>
                <textarea className="form-textarea" rows="4" defaultValue="Passionate game developer focused on narrative systems and procedural generation."></textarea>
              </div>
              <button className="btn-primary">Save Changes</button>
            </div>

            <div className="dashboard-card">
              <h2 className="card-title">Steam Account Integration</h2>
              <div className="integration-status">
                <div className="status-connected">
                  <span className="status-icon">✓</span>
                  <span>Connected to Steam</span>
                </div>
                <p className="status-description">Your Steam account is linked and automatically syncing contributions.</p>
                <button className="btn-secondary">Disconnect</button>
              </div>
            </div>

            <div className="dashboard-card">
              <h2 className="card-title">Linked Accounts</h2>
              <div className="linked-accounts">
                <div className="account-item">
                  <span className="account-name">GitHub</span>
                  <span className="account-status connected">Connected</span>
                  <button className="btn-link">Manage</button>
                </div>
                <div className="account-item">
                  <span className="account-name">ArtStation</span>
                  <span className="account-status connected">Connected</span>
                  <button className="btn-link">Manage</button>
                </div>
                <div className="account-item">
                  <span className="account-name">YouTube</span>
                  <span className="account-status disconnected">Not Connected</span>
                  <button className="btn-link">Connect</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'contributions' && (
          <div className="dashboard-content">
            {!editingContribution && !showAddForm && (
              <>
                <div className="dashboard-card" style={{position: 'relative'}}>
                  {!dismissedAnnotations.has('manage-contributions') && (
                    <InfoAnnotation
                      id="manage-contributions"
                      title="Edit Contributions"
                      content="Use the Edit button on any contribution to update your work history, add evidence (repos, videos, models), and improve verification status. Comprehensive documentation is required for system verification."
                      position="annotation-top"
                      onClose={handleDismissAnnotation}
                      style={{top: '-100px', right: '0', zIndex: 1001, maxWidth: '320px'}}
                    />
                  )}
                  <h2 className="card-title">Manage Contributions</h2>
                  <p className="card-description">Review and edit your verified contributions. Comprehensive documentation is required for verification.</p>
                  
                  <div className="contribution-list">
                    <div className="contribution-item-admin">
                      <div className="contribution-info">
                        <h3>Cyberpunk Horizons</h3>
                        <p>Full Release • 2023</p>
                        <span className="badge-system">System Verified</span>
                      </div>
                      <button className="btn-secondary" onClick={() => handleEdit('cyberpunk')}>Edit</button>
                    </div>
                    <div className="contribution-item-admin">
                      <div className="contribution-info">
                        <h3>Neon Skies</h3>
                        <p>Early Access • 2023</p>
                        <span className="badge-peer">Peer Verified</span>
                      </div>
                      <button className="btn-secondary" onClick={() => handleEdit('neon')}>Edit</button>
                    </div>
                    <div className="contribution-item-admin">
                      <div className="contribution-info">
                        <h3>Playtest Program</h3>
                        <p>Test Contribution • 2022</p>
                        <span className="badge-unverified">Unverified</span>
                      </div>
                      <button className="btn-primary" onClick={() => handleEdit('playtest')}>Complete Documentation</button>
                    </div>
                  </div>
                </div>

                <div className="dashboard-card">
                  <h2 className="card-title">Add Manual Contribution</h2>
                  <p className="card-description">Add contributions that aren't automatically detected from Steam. All fields must be completed for proper verification.</p>
                  <button className="btn-primary" onClick={handleAddNew}>+ Add Contribution</button>
                </div>
              </>
            )}

            {(editingContribution || showAddForm) && (
              <div className="dashboard-card">
                <div className="form-header">
                  <h2 className="card-title">
                    {showAddForm ? 'Add New Contribution' : 'Edit Contribution Documentation'}
                  </h2>
                  <button className="btn-link" onClick={() => {setEditingContribution(null); setShowAddForm(false);}}>← Back to List</button>
                </div>
                
                <div className="documentation-notice">
                  <span className="notice-icon">⚠️</span>
                  <div>
                    <strong>Comprehensive Documentation Required</strong>
                    <p>Complete all sections below to enable verification. Missing information will delay or prevent contribution verification.</p>
                  </div>
                </div>

                <div className="contribution-form">
                  <div className="form-section">
                    <h3 className="form-section-title">Basic Information <span className="required">*</span></h3>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Contribution Title <span className="required">*</span></label>
                        <input 
                          type="text" 
                          className="form-input" 
                          placeholder="e.g., Cyberpunk Horizons"
                          value={formData.title}
                          onChange={(e) => setFormData({...formData, title: e.target.value})}
                        />
                      </div>
                      <div className="form-group">
                        <label>Contribution Type <span className="required">*</span></label>
                        <select 
                          className="form-input"
                          value={formData.type}
                          onChange={(e) => setFormData({...formData, type: e.target.value})}
                        >
                          <option>Full Release</option>
                          <option>Early Access</option>
                          <option>Workshop Asset</option>
                          <option>Test Contribution</option>
                          <option>Mod/Community Content</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Year <span className="required">*</span></label>
                        <input 
                          type="number" 
                          className="form-input" 
                          value={formData.year}
                          onChange={(e) => setFormData({...formData, year: e.target.value})}
                        />
                      </div>
                      <div className="form-group">
                        <label>Role (Primary Craft Lane) <span className="required">*</span></label>
                        <select 
                          className="form-input"
                          value={formData.role}
                          onChange={(e) => setFormData({...formData, role: e.target.value})}
                        >
                          <option value="">Select Role</option>
                          <option>Game Designer</option>
                          <option>Gameplay Programmer</option>
                          <option>Technical Artist</option>
                          <option>Animator</option>
                          <option>Artist</option>
                          <option>Composer</option>
                          <option>Audio Designer</option>
                          <option>Writer</option>
                          <option>QA Specialist</option>
                          <option>Solo Developer</option>
                        </select>
                        <div className="form-hint">Your primary craft lane (e.g., Animator, Gameplay Programmer, Composer)</div>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Sub-Role (Specialization) <span className="required">*</span></label>
                        <input 
                          type="text" 
                          className="form-input" 
                          placeholder="e.g., First-person animation, Combat systems, Implementation & mixing"
                          value={formData.subRole}
                          onChange={(e) => setFormData({...formData, subRole: e.target.value})}
                        />
                        <div className="form-hint">Your specialization within the role (e.g., Combat systems, Narrative systems, Shader programming)</div>
                      </div>
                      <div className="form-group">
                        <label>Scope (What You Actually Did) <span className="required">*</span></label>
                        <textarea 
                          className="form-textarea" 
                          rows="3"
                          placeholder="e.g., Built reload state machine, tuned transitions, met 60 fps budget"
                          value={formData.scope}
                          onChange={(e) => setFormData({...formData, scope: e.target.value})}
                        ></textarea>
                        <div className="form-hint">Concisely describe what you actually did - specific systems, features, or accomplishments</div>
                      </div>
                    </div>
                  </div>

                  <div className="form-section">
                    <h3 className="form-section-title">Descriptions <span className="required">*</span></h3>
                    <div className="form-group">
                      <label>Short Description <span className="required">*</span></label>
                      <input 
                        type="text" 
                        className="form-input" 
                        placeholder="Brief one-line description"
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                      />
                    </div>
                    <div className="form-group">
                      <label>Detailed Description <span className="required">*</span></label>
                      <textarea 
                        className="form-textarea" 
                        rows="6"
                        placeholder="Provide a comprehensive description of your contributions. Include specific systems you worked on, challenges solved, and impact."
                        value={formData.detailedDescription}
                        onChange={(e) => setFormData({...formData, detailedDescription: e.target.value})}
                      ></textarea>
                      <div className="form-hint">Minimum 150 characters. Be specific about your actual work and contributions.</div>
                    </div>
                  </div>

                  <div className="form-section">
                    <h3 className="form-section-title">Evidence & Metrics <span className="required">*</span></h3>
                    <div className="evidence-notice">
                      <span className="notice-icon">📊</span>
                      <span>These metrics help verify your contribution and make you discoverable to recruiters</span>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label>Team Size <span className="required">*</span></label>
                        <input 
                          type="text" 
                          className="form-input" 
                          placeholder="e.g., 12 team members, Solo project"
                          value={formData.teamSize}
                          onChange={(e) => setFormData({...formData, teamSize: e.target.value})}
                        />
                      </div>
                      <div className="form-group">
                        <label>Duration <span className="required">*</span></label>
                        <input 
                          type="text" 
                          className="form-input" 
                          placeholder="e.g., 18 months, 6 weeks"
                          value={formData.duration}
                          onChange={(e) => setFormData({...formData, duration: e.target.value})}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Responsibilities <span className="required">*</span></label>
                      <input 
                        type="text" 
                        className="form-input" 
                        placeholder="e.g., Gameplay systems, physics, netcode"
                        value={formData.responsibilities}
                        onChange={(e) => setFormData({...formData, responsibilities: e.target.value})}
                      />
                    </div>
                    <div className="form-group">
                      <label>Code Contribution (if applicable)</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        placeholder="e.g., 12,500 lines (C#)"
                        value={formData.linesOfCode}
                        onChange={(e) => setFormData({...formData, linesOfCode: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="form-section">
                    <h3 className="form-section-title">Technologies Used <span className="required">*</span></h3>
                    <div className="tag-input-group">
                      <input 
                        type="text" 
                        className="form-input tag-input" 
                        placeholder="Add technology (e.g., Unity, C#, Blender)"
                        value={techInput}
                        onChange={(e) => setTechInput(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            handleTechnologyAdd();
                          }
                        }}
                      />
                      <button type="button" className="btn-secondary" onClick={handleTechnologyAdd}>Add</button>
                    </div>
                    <div className="tag-list">
                      {formData.technologies.map((tech, idx) => (
                        <span key={idx} className="form-tag">
                          {tech}
                          <button 
                            type="button"
                            className="tag-remove"
                            onClick={() => setFormData({...formData, technologies: formData.technologies.filter((_, i) => i !== idx)})}
                          >×</button>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="form-section">
                    <h3 className="form-section-title">Developer Tags <span className="required">*</span></h3>
                    <div className="form-hint">Use game developer jargon tags (e.g., #gunplay, #reload-animations, #jiggle-physics, #flight-physics, #networking, #combat-systems)</div>
                    <div className="tag-input-group">
                      <input 
                        type="text" 
                        className="form-input tag-input" 
                        placeholder="Add tag with # (e.g., #gameplay-programming)"
                        value={tagInput}
                        onChange={(e) => setTagInput(e.target.value)}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            handleTagAdd();
                          }
                        }}
                      />
                      <button type="button" className="btn-secondary" onClick={handleTagAdd}>Add</button>
                    </div>
                    <div className="tag-list">
                      {formData.tags.map((tag, idx) => (
                        <span key={idx} className="form-tag tag-primary">
                          {tag}
                          <button 
                            type="button"
                            className="tag-remove"
                            onClick={() => setFormData({...formData, tags: formData.tags.filter((_, i) => i !== idx)})}
                          >×</button>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="form-section">
                    <h3 className="form-section-title">Key Contributions <span className="required">*</span></h3>
                    <div className="form-hint">List your specific achievements and contributions (minimum 3)</div>
                    {formData.keyContributions.map((contribution, idx) => (
                      <div key={idx} className="form-group">
                        <div className="contribution-item-input">
                          <input 
                            type="text" 
                            className="form-input" 
                            placeholder={`Contribution ${idx + 1} (e.g., Narrative architecture and branching dialogue system)`}
                            value={contribution}
                            onChange={(e) => {
                              const newContributions = [...formData.keyContributions];
                              newContributions[idx] = e.target.value;
                              setFormData({...formData, keyContributions: newContributions});
                            }}
                          />
                          {formData.keyContributions.length > 1 && (
                            <button 
                              type="button"
                              className="btn-icon"
                              onClick={() => setFormData({...formData, keyContributions: formData.keyContributions.filter((_, i) => i !== idx)})}
                            >×</button>
                          )}
                        </div>
                      </div>
                    ))}
                    <button 
                      type="button"
                      className="btn-secondary"
                      onClick={() => setFormData({...formData, keyContributions: [...formData.keyContributions, '']})}
                    >
                      + Add Another Contribution
                    </button>
                  </div>

                  <div className="form-section">
                    <h3 className="form-section-title">Artifacts & Proof Links</h3>
                    <div className="form-hint">Link to repositories, videos, Workshop items, ArtStation, or 3D models that prove your contribution</div>
                    <div className="tag-input-group">
                      <select 
                        className="form-input" 
                        style={{maxWidth: '150px'}}
                        value={artifactType}
                        onChange={(e) => setArtifactType(e.target.value)}
                      >
                        <option value="repo">Repository</option>
                        <option value="video">Video</option>
                        <option value="workshop">Workshop</option>
                        <option value="artstation">ArtStation</option>
                        <option value="model">3D Model</option>
                      </select>
                      <input 
                        type="text" 
                        className="form-input tag-input" 
                        placeholder="Label (e.g., Flight Physics)"
                        value={artifactLabel}
                        onChange={(e) => setArtifactLabel(e.target.value)}
                        style={{flex: 1}}
                      />
                      <input 
                        type="text" 
                        className="form-input tag-input" 
                        placeholder="URL"
                        value={artifactUrl}
                        onChange={(e) => setArtifactUrl(e.target.value)}
                        style={{flex: 2}}
                      />
                      <button type="button" className="btn-secondary" onClick={handleArtifactAdd}>Add</button>
                    </div>
                    <div className="tag-list">
                      {formData.artifacts.map((artifact, idx) => (
                        <span key={idx} className="form-tag">
                          {artifact.type === 'repo' && '📦'}
                          {artifact.type === 'video' && '🎬'}
                          {artifact.type === 'workshop' && '🎮'}
                          {artifact.type === 'artstation' && '🎨'}
                          {artifact.type === 'model' && '🎭'}
                          {' '}{artifact.label}
                          <button 
                            type="button"
                            className="tag-remove"
                            onClick={() => setFormData({...formData, artifacts: formData.artifacts.filter((_, i) => i !== idx)})}
                          >×</button>
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="form-actions">
                    <button className="btn-secondary" onClick={() => {setEditingContribution(null); setShowAddForm(false);}}>Cancel</button>
                    <button className="btn-primary">Save Contribution</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {selectedTab === 'connections' && (
          <div className="dashboard-content">
            <div className="dashboard-card">
              <h2 className="card-title">Steam Integration Status</h2>
              <div className="sync-status">
                <div className="sync-info">
                  <span className="sync-label">Last Sync:</span>
                  <span className="sync-time">2 hours ago</span>
                </div>
                <button className="btn-primary">Sync Now</button>
              </div>
              
              <div className="games-detected">
                <h3>Games Detected</h3>
                <div className="game-list">
                  <div className="game-item">
                    <span>Cyberpunk Horizons</span>
                    <span className="status-badge shipped">Shipped</span>
                  </div>
                  <div className="game-item">
                    <span>Neon Skies</span>
                    <span className="status-badge earlyAccess">Early Access</span>
                  </div>
                  <div className="game-item">
                    <span>Pixel Quest Assets</span>
                    <span className="status-badge workshop">Workshop</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default UserDashboard;

