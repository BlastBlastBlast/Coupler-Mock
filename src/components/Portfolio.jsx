import React, { useState } from 'react';
import '../App.css';

// Mock data
const mockPortfolio = {
  user: {
    name: "Alex Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    role: "Game Designer & Developer",
    location: "Oslo, Norway",
    yearsActive: "2018 - Present"
  },
  metrics: {
    titlesShipped: 3,
    titlesInDevelopment: 2,
    earlyAccessGames: 5,
    workshopAssets: 12,
    testContributions: 8,
    gamesPublished: 3
  },
  technicalStack: {
    languagesWorkedIn: ["C#", "C++", "Python"],
    languagesTouched: ["JavaScript", "Lua", "HLSL", "GLSL"],
    engines: ["Unity", "Unreal Engine", "Godot"],
    tools: ["Blender", "Aseprite", "Git", "Perforce", "Figma", "Jira"],
    platforms: ["Steam", "PC/Windows", "Linux", "MacOS"]
  },
  contributions: [
    {
      id: 1,
      title: "Cyberpunk Horizons",
      type: "Full Release",
      role: "Game Designer",
      subRole: "Narrative Systems",
      scope: "Built branching dialogue system, architected quest generation, implemented conditional responses and character relationships",
      year: 2023,
      status: "shipped",
      verificationLevel: "system-verified",
      verifiedBy: "Steam Ecosystem",
      description: "Open-world RPG featuring dynamic narrative systems",
      technologies: ["Unity", "C#", "Blender", "Steam SDK"],
      players: "50K+",
      tags: ["#narrative-design", "#quest-systems", "#dialogue", "#procedural-content", "#branching-narrative"],
      teamSize: "12 team members",
      duration: "18 months",
      responsibilities: "Lead designer, narrative systems architect",
      detailedDescription: "Led design and implementation of a branching narrative system with 50+ unique story branches. Architected the quest generation system that dynamically creates content based on player choices. Collaborated with 3 writers to establish coherent world-building across 200+ dialogue nodes. Designed and implemented dialogue system handling conditional responses, character relationships, and persistent story state.",
      linesOfCode: "12,500 lines (C#)",
      keyContributions: [
        "Narrative architecture and branching dialogue system",
        "Quest generation and procedural content systems",
        "Steam integration for cloud saves and achievements",
        "Led team of 4 designers in systems design"
      ],
      artifacts: [
        { type: "repo", label: "Narrative System", url: "https://github.com/alexchen/narrative-system" },
        { type: "repo", label: "Quest Generator", url: "https://github.com/alexchen/procedural-quest-generator" },
        { type: "video", label: "Narrative Demo", url: "https://youtube.com/watch?v=demo1" }
      ]
    },
    {
      id: 2,
      title: "Pixel Quest",
      type: "Workshop Asset",
      role: "Artist",
      subRole: "2D Asset Creation",
      scope: "Created 50+ hand-drawn sprite sheets, designed 8-character animation sets, built modular sprite system with consistent grid",
      year: 2022,
      status: "workshop",
      downloads: 1250,
      verificationLevel: "peer-verified",
      verifiedBy: "Game Developer Community",
      description: "Collection of 50+ hand-drawn pixel art assets",
      technologies: ["Aseprite", "GIMP", "Steam Workshop SDK"],
      tags: ["#pixel-art", "#2d-assets", "#sprites", "#animation", "#texturing"],
      teamSize: "Solo project",
      duration: "4 months",
      responsibilities: "Complete asset creation pipeline",
      detailedDescription: "Created comprehensive pixel art asset pack including characters, environments, and UI elements. Hand-drawn 50+ sprite sheets with consistent 16x16 and 32x32 tile grid. Implemented animation cycles for characters (walk, idle, attack sequences). Designed modular sprite system allowing easy recoloring and customization. Optimized for game engines with proper naming conventions and sprite sheets.",
      keyContributions: [
        "50+ hand-drawn sprite assets",
        "8-character animation sets",
        "Environment tileset (20+ tiles)",
        "Steam Workshop integration"
      ],
      artifacts: [
        { type: "workshop", label: "Steam Workshop", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=123456" },
        { type: "artstation", label: "Asset Showcase", url: "https://artstation.com/artwork/pixel-quest" }
      ]
    },
    {
      id: 3,
      title: "Neon Skies",
      type: "Early Access",
      role: "Gameplay Programmer",
      subRole: "Combat Systems & Physics",
      scope: "Built custom flight physics with momentum/inertia, implemented procedural mission generator, created 16-player netcode with lag compensation",
      year: 2023,
      status: "earlyAccess",
      verificationLevel: "peer-verified",
      verifiedBy: "Project Owner",
      description: "Fast-paced aerial combat game with procedural generation",
      technologies: ["Unreal Engine", "C++", "Blueprints", "Steam SDK"],
      tags: ["#gameplay-programming", "#flight-physics", "#networking", "#combat-systems", "#procedural-generation"],
      teamSize: "8 team members",
      duration: "Ongoing (12+ months)",
      responsibilities: "Gameplay systems, physics, netcode",
      detailedDescription: "Developed custom flight physics system using Unreal's physics engine with realistic momentum, inertia, and drift mechanics. Implemented procedural mission generation system creating infinite content variations. Built networked multiplayer architecture supporting 16 players with lag compensation. Created AI director system that adjusts difficulty dynamically based on player performance.",
      linesOfCode: "8,200 lines (C++)",
      keyContributions: [
        "Flight physics and movement systems",
        "Procedural mission generator",
        "Multiplayer netcode architecture",
        "AI director and difficulty balancing"
      ],
      artifacts: [
        { type: "repo", label: "Flight Physics", url: "https://github.com/alexchen/flight-physics-unreal" },
        { type: "video", label: "Physics Breakdown", url: "https://youtube.com/watch?v=demo2" }
      ]
    },
    {
      id: 4,
      title: "Playtest Program - Strategy Games",
      type: "Test Contribution",
      role: "QA Specialist",
      subRole: "Balance & Gameplay Analysis",
      scope: "Analyzed 50+ unit types for balance, created economy curve validations, reported 150+ bugs with fixes, built automated test suite",
      year: 2022,
      status: "testing",
      hours: 45,
      verificationLevel: "unverified",
      verifiedBy: null,
      description: "Provided detailed feedback on balance and mechanics",
      technologies: ["Unity", "Python", "Test Automation"],
      tags: ["#qa", "#balance", "#gameplay-analysis", "#testing", "#metrics"],
      teamSize: "External contract",
      duration: "45 hours intensive testing",
      responsibilities: "Balance analysis, bug reporting, gameplay feedback",
      detailedDescription: "Conducted comprehensive playtesting for 3 unreleased strategy games. Created detailed balance spreadsheets analyzing economy curves, unit matchups, and map control mechanics. Reported 150+ bugs with reproduction steps, severity ratings, and suggested fixes. Developed automated test scripts in Python to validate game state consistency. Provided design feedback on meta strategies and player onboarding.",
      keyContributions: [
        "Balance analysis across 50+ unit types",
        "Economy curve validation and tuning",
        "150+ bug reports with fixes",
        "Automated testing suite"
      ],
      artifacts: [
        { type: "repo", label: "Test Suite", url: "https://github.com/alexchen/automated-testing-suite" }
      ]
    },
    {
      id: 5,
      title: "Retro Arcade Collection",
      type: "Full Release",
      role: "Solo Developer",
      subRole: "Full Stack Development",
      scope: "Implemented 5 complete games with custom physics, built Steam Cloud saves, created unified scoring system, optimized for 60 FPS",
      year: 2021,
      status: "shipped",
      verificationLevel: "system-verified",
      verifiedBy: "Steam Ecosystem",
      description: "Remastered collection of classic arcade games",
      technologies: ["Unity", "C#", "Pixel Art", "Steam API"],
      players: "12K+",
      tags: ["#solo-dev", "#retro", "#arcade", "#collection", "#game-dev"],
      teamSize: "Solo (1 person)",
      duration: "6 months",
      responsibilities: "Full stack development",
      detailedDescription: "Independently developed and shipped a collection of 5 classic arcade games with modern enhancements. Implemented custom physics for ball games and collision detection. Built save system with Steam Cloud integration. Created unified scoring system across all games with leaderboards. Optimized performance for 60 FPS on low-end hardware. Handled all aspects including programming, art, music licensing, and Steam integration.",
      linesOfCode: "15,000 lines (C#)",
      keyContributions: [
        "5 complete game implementations",
        "Steam API integration and achievements",
        "Pixel art assets (200+ sprites)",
        "Full lifecycle from concept to launch"
      ],
      artifacts: [
        { type: "repo", label: "Game Source", url: "https://github.com/alexchen/retro-arcade" },
        { type: "video", label: "Gameplay Trailer", url: "https://youtube.com/watch?v=demo3" }
      ]
    }
  ],
  githubRepos: [
    {
      id: 1,
      name: "narrative-system",
      description: "Branching dialogue system for RPGs",
      language: "C#",
      stars: 42,
      forks: 8,
      url: "https://github.com/alexchen/narrative-system"
    },
    {
      id: 2,
      name: "procedural-quest-generator",
      description: "Dynamic quest generation based on player actions",
      language: "C#",
      stars: 28,
      forks: 5,
      url: "https://github.com/alexchen/procedural-quest-generator"
    },
    {
      id: 3,
      name: "flight-physics-unreal",
      description: "Custom flight physics for aerial combat",
      language: "C++",
      stars: 61,
      forks: 12,
      url: "https://github.com/alexchen/flight-physics-unreal"
    },
    {
      id: 4,
      name: "automated-testing-suite",
      description: "Python suite for game balance testing",
      language: "Python",
      stars: 15,
      forks: 3,
      url: "https://github.com/alexchen/automated-testing-suite"
    }
  ],
  artstationWork: [
    {
      id: 1,
      title: "Cyberpunk Character Designs",
      description: "Character concept art for urban RPG",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",
      type: "Character Design",
      year: 2023
    },
    {
      id: 2,
      title: "Environment Textures",
      description: "Hand-painted texture work for levels",
      image: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400",
      type: "Texture Work",
      year: 2023
    },
    {
      id: 3,
      title: "Pixel Art Assets",
      description: "Collection of sprites and tilesets",
      image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400",
      type: "Pixel Art",
      year: 2022
    },
    {
      id: 4,
      title: "UI Elements",
      description: "Game interface and HUD elements",
      image: "https://images.unsplash.com/photo-1626785774626-9af2cb6f3d0a?w=400",
      type: "UI/UX",
      year: 2023
    }
  ],
  threeDModels: [
    {
      id: 1,
      title: "Vehicle Models",
      description: "Low-poly vehicle assets for open-world game",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400",
      polyCount: "3,500 tris",
      type: "Game Asset"
    },
    {
      id: 2,
      title: "Weapon Collection",
      description: "Futuristic weapon models with modular system",
      image: "https://images.unsplash.com/photo-1588795942306-1dbe15e4e3f1?w=400",
      polyCount: "2,100 tris",
      type: "Game Asset"
    },
    {
      id: 3,
      title: "Environment Props",
      description: "Sci-fi environmental assets",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400",
      polyCount: "850 tris",
      type: "Game Asset"
    },
    {
      id: 4,
      title: "Character Rig",
      description: "Rigged character for animation",
      image: "https://images.unsplash.com/photo-1563191911-e65f865c1a79?w=400",
      polyCount: "5,200 tris",
      type: "Character Model"
    }
  ],
  caseStudies: [
    {
      id: 1,
      title: "Combat Systems Collaboration - Cyber Studios",
      studio: "Cyber Studios",
      creator: "Alex Chen",
      role: "Gameplay Programmer • Combat Systems",
      brief: "Build reload state machine and combat systems",
      outcome: "Successfully delivered reload state machine with smooth animations. Re-hired for next project.",
      duration: "8 weeks",
      technologies: ["Unity", "C++"],
      tags: ["#combat-systems", "#gunplay", "#state-machines"],
      rating: 5,
      feedback: "Excellent work on the combat systems. Delivered ahead of schedule and exceeded expectations.",
      completed: "2024-01"
    },
    {
      id: 2,
      title: "First-Person Animation - StoryForge Games",
      studio: "StoryForge Games",
      creator: "Sarah Martinez",
      role: "Animator • First-person Animation",
      brief: "Create first-person reload animations and transitions",
      outcome: "Delivered high-quality animation sequences that improved player experience. Currently working on follow-up project.",
      duration: "6 weeks",
      technologies: ["Unreal Engine", "Blender"],
      tags: ["#reload-animations", "#first-person", "#animation"],
      rating: 5,
      feedback: "Professional work and great communication throughout the project. Highly recommend.",
      completed: "2023-12"
    }
  ],
  techVideos: [
    {
      id: 1,
      title: "Narrative System Demo",
      description: "Branching dialogue in action",
      videoId: "dQw4w9WgXcQ",
      duration: "0:45",
      views: "2.1K"
    },
    {
      id: 2,
      title: "Flight Physics Breakdown",
      description: "Breaking down aerial movement",
      videoId: "dQw4w9WgXcQ",
      duration: "1:12",
      views: "5.3K"
    },
    {
      id: 3,
      title: "Procedural Quest Generation",
      description: "System in action",
      videoId: "dQw4w9WgXcQ",
      duration: "0:58",
      views: "3.8K"
    },
    {
      id: 4,
      title: "Multiplayer Netcode",
      description: "Network architecture explained",
      videoId: "dQw4w9WgXcQ",
      duration: "1:30",
      views: "4.5K"
    }
  ]
};

function Portfolio() {
  const { user, metrics, contributions, technicalStack, githubRepos, artstationWork, threeDModels, techVideos, caseStudies } = mockPortfolio;
  const [allExpanded, setAllExpanded] = useState(false);

  const toggleAllCards = () => {
    setAllExpanded(!allExpanded);
  };

  const getVerificationBadge = (verificationLevel, verifiedBy) => {
    switch (verificationLevel) {
      case 'system-verified':
        return {
          text: 'Verified by System',
          icon: '🔒',
          className: 'verification-system',
          verifiedBy: verifiedBy
        };
      case 'peer-verified':
        return {
          text: 'Verified by Peer',
          icon: '✓',
          className: 'verification-peer',
          verifiedBy: verifiedBy
        };
      case 'unverified':
      default:
        return {
          text: 'Unverified',
          icon: '⏳',
          className: 'verification-unverified',
          verifiedBy: null
        };
    }
  };

  return (
    <main className="main-content">
      {/* User profile card */}
      <section className="profile-card">
        <div className="profile-header">
          <div className="avatar-container">
            <img src={user.avatar} alt={user.name} className="avatar" />
            <div className="verification-badge">✓</div>
          </div>
          <div className="profile-info">
            <h1 className="profile-name">{user.name}</h1>
            <p className="profile-role">{user.role}</p>
            <div className="profile-meta">
              <span>{user.location}</span>
              <span>•</span>
              <span>{user.yearsActive}</span>
            </div>
          </div>
        </div>

        {/* Compact stats and tech together */}
        <div className="stats-and-tech-container">
          {/* Metrics grid - compact */}
          <div className="metrics-grid-compact">
          <div className="metric-card">
            <div className="metric-icon">🎮</div>
            <div className="metric-value">{metrics.titlesShipped}</div>
            <div className="metric-label">Titles Shipped</div>
          </div>
          <div className="metric-card">
            <div className="metric-icon">🚀</div>
            <div className="metric-value">{metrics.titlesInDevelopment}</div>
            <div className="metric-label">In Development</div>
          </div>
          <div className="metric-card">
            <div className="metric-icon">⚡</div>
            <div className="metric-value">{metrics.earlyAccessGames}</div>
            <div className="metric-label">Early Access</div>
          </div>
          <div className="metric-card">
            <div className="metric-icon">🎨</div>
            <div className="metric-value">{metrics.workshopAssets}</div>
            <div className="metric-label">Workshop Assets</div>
          </div>
          <div className="metric-card">
            <div className="metric-icon">🔧</div>
            <div className="metric-value">{metrics.testContributions}</div>
            <div className="metric-label">Test Contributions</div>
          </div>
          <div className="metric-card">
            <div className="metric-icon">📊</div>
            <div className="metric-value">{metrics.gamesPublished}</div>
            <div className="metric-label">Games Published</div>
          </div>
          </div>

          {/* Tech stack - compact */}
          <div className="tech-stack-compact">
            <h3 className="tech-stack-title">Languages</h3>
            <div className="tech-stack-tags">
              {technicalStack.languagesWorkedIn.map((lang, idx) => (
                <span key={idx} className="tech-tag-compact">● {lang}</span>
              ))}
            </div>
            <div className="tech-stack-tags-secondary">
              {technicalStack.languagesTouched.map((lang, idx) => (
                <span key={idx} className="tech-tag-compact-secondary">○ {lang}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contributions section */}
      <section className="contributions-section">
        <div className="section-header">
          <h2 className="section-title">Verified Contributions</h2>
          <div className="filter-tabs">
            <button className="filter-tab active">All</button>
            <button className="filter-tab">Shipped</button>
            <button className="filter-tab">In Development</button>
            <button className="filter-tab">Workshop</button>
          </div>
        </div>

        <div className="contributions-grid">
          {contributions.map(contribution => (
            <div key={contribution.id} className={`contribution-card ${allExpanded ? 'expanded' : ''}`}>
              {/* Header clickable area */}
              <div className="contribution-header-clickable" onClick={toggleAllCards}>
                <div className="contribution-header">
                  <div className="contribution-header-badges">
                    <div className={`status-badge ${contribution.status}`}>
                      {contribution.type}
                    </div>
                  </div>
                  <div className="contribution-header-right">
                    <div className="contribution-year">{contribution.year}</div>
                    {(() => {
                      const verificationBadge = getVerificationBadge(contribution.verificationLevel, contribution.verifiedBy);
                      return (
                        <span className={`verification-badge ${verificationBadge.className}`}>
                          <span className="verification-icon">{verificationBadge.icon}</span>
                          <span className="verification-text">{verificationBadge.text}</span>
                        </span>
                      );
                    })()}
                  </div>
                </div>
                <h3 className="contribution-title">{contribution.title}</h3>
                <div className="contribution-role-info">
                  <p className="contribution-role">{contribution.role}{contribution.subRole && <span className="role-separator"> • </span>}<span className="contribution-subrole">{contribution.subRole}</span>}</p>
                </div>
                {contribution.scope && (
                  <p className="contribution-scope">📍 {contribution.scope}</p>
                )}
                <p className="contribution-description">{contribution.description}</p>
                <div className="expand-indicator">
                  {allExpanded ? '▼' : '▶'}
                </div>
              </div>

              {/* Basic stats always visible */}
              <div className="contribution-basic-stats">
                {contribution.downloads && (
                  <div className="stat-item">📥 {contribution.downloads} downloads</div>
                )}
                {contribution.hours && (
                  <div className="stat-item">⏱️ {contribution.hours} hours</div>
                )}
                {contribution.players && (
                  <div className="stat-item">👥 {contribution.players} players</div>
                )}
                {contribution.technologies && (
                  <div className="tech-used">
                    {contribution.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                )}
              </div>

              {/* Expanded content */}
              {allExpanded && (
                <div className="contribution-expanded">
                  {/* Tags */}
                  {contribution.tags && (
                    <div className="tags-section">
                      {contribution.tags.map((tag, idx) => (
                        <span key={idx} className="tag">{tag}</span>
                      ))}
                    </div>
                  )}

                  {/* Verification Info */}
                  {(() => {
                    const verificationBadge = getVerificationBadge(contribution.verificationLevel, contribution.verifiedBy);
                    return (
                      <div className="verification-info">
                        <h4 className="detail-title">Verification Status</h4>
                        <div className={`verification-status-detail ${verificationBadge.className}`}>
                          <div className="verification-detail-content">
                            <div className="verification-detail-icon">{verificationBadge.icon}</div>
                            <div>
                              <div className="verification-detail-title">{verificationBadge.text}</div>
                              {contribution.verifiedBy && (
                                <div className="verification-detail-source">Verified by: {contribution.verifiedBy}</div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })()}

                  {/* Detailed Description */}
                  <div className="detail-section">
                    <h4 className="detail-title">Detailed Description</h4>
                    <p className="detail-text">{contribution.detailedDescription}</p>
                  </div>

                  {/* Hiring Metrics */}
                  <div className="metrics-grid-expanded">
                    {contribution.teamSize && (
                      <div className="metric-expanded">
                        <div className="metric-label-expanded">👥 Team Size</div>
                        <div className="metric-value-expanded">{contribution.teamSize}</div>
                      </div>
                    )}
                    {contribution.duration && (
                      <div className="metric-expanded">
                        <div className="metric-label-expanded">⏱️ Duration</div>
                        <div className="metric-value-expanded">{contribution.duration}</div>
                      </div>
                    )}
                    {contribution.responsibilities && (
                      <div className="metric-expanded">
                        <div className="metric-label-expanded">🎯 Responsibilities</div>
                        <div className="metric-value-expanded">{contribution.responsibilities}</div>
                      </div>
                    )}
                    {contribution.linesOfCode && (
                      <div className="metric-expanded">
                        <div className="metric-label-expanded">💻 Code Contribution</div>
                        <div className="metric-value-expanded">{contribution.linesOfCode}</div>
                      </div>
                    )}
                  </div>

                  {/* Key Contributions */}
                  {contribution.keyContributions && (
                    <div className="key-contributions">
                      <h4 className="detail-title">Key Contributions</h4>
                      <ul className="contributions-list">
                        {contribution.keyContributions.map((item, idx) => (
                          <li key={idx} className="contribution-item">{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Artifacts (Proof Links) */}
                  {contribution.artifacts && contribution.artifacts.length > 0 && (
                    <div className="artifacts-section">
                      <h4 className="detail-title">🔗 Artifacts & Proof</h4>
                      <div className="artifacts-grid">
                        {contribution.artifacts.map((artifact, idx) => (
                          <a 
                            key={idx} 
                            href={artifact.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`artifact-link artifact-${artifact.type}`}
                          >
                            <span className="artifact-icon">
                              {artifact.type === 'repo' && '📦'}
                              {artifact.type === 'video' && '🎬'}
                              {artifact.type === 'workshop' && '🎮'}
                              {artifact.type === 'artstation' && '🎨'}
                              {artifact.type === 'model' && '🎭'}
                            </span>
                            <span className="artifact-label">{artifact.label}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Skills section */}
      <section className="skills-section">
        <h2 className="section-title">Specializations & Expertise</h2>
        <div className="skills-grid">
          <span className="skill-tag">Game Design</span>
          <span className="skill-tag">Narrative Systems</span>
          <span className="skill-tag">Level Design</span>
          <span className="skill-tag">Systems Programming</span>
          <span className="skill-tag">AI Programming</span>
          <span className="skill-tag">Procedural Generation</span>
          <span className="skill-tag">Pixel Art</span>
          <span className="skill-tag">3D Modeling</span>
          <span className="skill-tag">Prototyping</span>
          <span className="skill-tag">Playtesting</span>
          <span className="skill-tag">Steam Integration</span>
          <span className="skill-tag">Version Control</span>
        </div>
      </section>

      {/* GitHub Integration */}
      <section className="github-section">
        <h2 className="section-title">💻 GitHub Repositories</h2>
        <div className="github-grid">
          {githubRepos.map(repo => (
            <div key={repo.id} className="github-card">
              <div className="github-header">
                <div className="github-icon">📦</div>
                <div className="github-info">
                  <h3 className="github-name">{repo.name}</h3>
                  <p className="github-desc">{repo.description}</p>
                </div>
              </div>
              <div className="github-meta">
                <span className="github-lang">{repo.language}</span>
                <div className="github-stats">
                  <span className="github-stat">⭐ {repo.stars}</span>
                  <span className="github-stat">🍴 {repo.forks}</span>
                </div>
              </div>
              <a href={repo.url} className="github-link" target="_blank" rel="noopener noreferrer">
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ArtStation Portfolio */}
      <section className="artstation-section">
        <h2 className="section-title">🎨 ArtStation Portfolio</h2>
        <div className="artstation-grid">
          {artstationWork.map(work => (
            <div key={work.id} className="artstation-card">
              <div className="artstation-image-container">
                <img src={work.image} alt={work.title} className="artstation-image" />
                <div className="artstation-overlay">
                  <div className="artstation-type">{work.type}</div>
                  <div className="artstation-year">{work.year}</div>
                </div>
              </div>
              <div className="artstation-content">
                <h3 className="artstation-title">{work.title}</h3>
                <p className="artstation-desc">{work.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3D Models */}
      <section className="models-section">
        <h2 className="section-title">🎮 3D Models & Assets</h2>
        <div className="models-grid">
          {threeDModels.map(model => (
            <div key={model.id} className="model-card">
              <div className="model-image-container">
                <img src={model.image} alt={model.title} className="model-image" />
                <div className="model-badge">{model.type}</div>
              </div>
              <div className="model-content">
                <h3 className="model-title">{model.title}</h3>
                <p className="model-desc">{model.description}</p>
                <div className="model-specs">
                  <span className="model-spec">📐 {model.polyCount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      {caseStudies && caseStudies.length > 0 && (
        <section className="case-studies-section">
          <h2 className="section-title">📚 Case Studies - Successful Collaborations</h2>
          <p className="section-subtitle">Real projects completed through Coupler</p>
          <div className="case-studies-grid">
            {caseStudies.map(study => (
              <div key={study.id} className="case-study-card">
                <div className="case-study-header">
                  <div>
                    <h3 className="case-study-title">{study.title}</h3>
                    <div className="case-study-meta">
                      <span className="case-study-studio">{study.studio}</span>
                      <span>•</span>
                      <span className="case-study-creator">{study.creator}</span>
                      <span>•</span>
                      <span className="case-study-date">{study.completed}</span>
                    </div>
                  </div>
                  <div className="case-study-rating">
                    {'⭐'.repeat(study.rating)}
                  </div>
                </div>
                <div className="case-study-role">{study.role}</div>
                <div className="case-study-brief">
                  <strong>Brief:</strong> {study.brief}
                </div>
                <div className="case-study-outcome">
                  <strong>Outcome:</strong> {study.outcome}
                </div>
                <div className="case-study-feedback">
                  <strong>Feedback:</strong> "{study.feedback}"
                </div>
                <div className="case-study-tech">
                  {study.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-badge">{tech}</span>
                  ))}
                </div>
                <div className="case-study-tags">
                  {study.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="case-study-footer">
                  <span className="case-study-duration">⏱️ {study.duration}</span>
                  <span className="case-study-success">✓ Successfully Completed</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Tech Video Demos */}
      <section className="videos-section">
        <h2 className="section-title">🎬 Tech Demo Videos</h2>
        <div className="videos-grid">
          {techVideos.map(video => (
            <div key={video.id} className="video-card">
              <div className="video-thumbnail-container">
                <iframe
                  className="video-thumbnail"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="video-duration">{video.duration}</div>
              </div>
              <div className="video-content">
                <h3 className="video-title">{video.title}</h3>
                <p className="video-desc">{video.description}</p>
                <div className="video-stats">
                  <span className="video-stat">👁️ {video.views} views</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Portfolio;

