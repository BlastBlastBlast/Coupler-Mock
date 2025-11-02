import React, { useState } from 'react';
import '../App.css';

function Showcase() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const showcaseItems = [
    {
      id: 1,
      type: 'tech',
      title: "Procedural Quest Generator",
      description: "Dynamic quest generation system creating infinite content variations",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400",
      author: "Alex Chen",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      technologies: ["C#", "Unity", "Procedural Generation"],
      likes: 142,
      views: 1200
    },
    {
      id: 2,
      type: 'art',
      title: "Cyberpunk Character Design",
      description: "Character concept art for urban RPG",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400",
      author: "Sarah Martinez",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      technologies: ["Character Design", "Concept Art"],
      likes: 89,
      views: 850
    },
    {
      id: 3,
      type: 'video',
      title: "Flight Physics Breakdown",
      description: "Breaking down aerial movement systems",
      videoId: "dQw4w9WgXcQ",
      author: "Alex Chen",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      technologies: ["C++", "Unreal Engine", "Physics"],
      likes: 234,
      views: 5300,
      duration: "1:12"
    },
    {
      id: 4,
      type: 'art',
      title: "Environment Textures",
      description: "Hand-painted texture work for sci-fi levels",
      image: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400",
      author: "James Park",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      technologies: ["Texturing", "Blender", "Substance"],
      likes: 156,
      views: 980
    },
    {
      id: 5,
      type: 'tech',
      title: "Narrative System Architecture",
      description: "Branching dialogue system handling 200+ dialogue nodes",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400",
      author: "Alex Chen",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      technologies: ["C#", "Unity", "Narrative Design"],
      likes: 278,
      views: 2100
    },
    {
      id: 6,
      type: '3d',
      title: "Vehicle Models Collection",
      description: "Low-poly vehicle assets for open-world game",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400",
      author: "Emma Thompson",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      technologies: ["3D Modeling", "Blender", "Game Assets"],
      likes: 92,
      views: 750
    },
    {
      id: 7,
      type: 'video',
      title: "Multiplayer Netcode Explained",
      description: "Network architecture for 16-player matches",
      videoId: "dQw4w9WgXcQ",
      author: "Alex Chen",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      technologies: ["C++", "Networking", "Multiplayer"],
      likes: 189,
      views: 3800,
      duration: "1:30"
    },
    {
      id: 8,
      type: 'art',
      title: "Pixel Art Sprite Collection",
      description: "50+ hand-drawn sprites with animation sets",
      image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400",
      author: "Alex Chen",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      technologies: ["Pixel Art", "Aseprite", "2D Assets"],
      likes: 201,
      views: 1650
    },
    {
      id: 9,
      type: 'tech',
      title: "Automated Testing Suite",
      description: "Python suite for game balance validation",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400",
      author: "Alex Chen",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      technologies: ["Python", "Testing", "Automation"],
      likes: 67,
      views: 420
    },
    {
      id: 10,
      type: '3d',
      title: "Weapon Collection",
      description: "Futuristic weapon models with modular system",
      image: "https://images.unsplash.com/photo-1588795942306-1dbe15e4e3f1?w=400",
      author: "Sarah Martinez",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      technologies: ["3D Modeling", "Game Assets"],
      likes: 134,
      views: 920
    },
    {
      id: 11,
      type: 'video',
      title: "Procedural Quest Generation Demo",
      description: "System in action creating dynamic content",
      videoId: "dQw4w9WgXcQ",
      author: "Alex Chen",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      technologies: ["C#", "Procedural Generation"],
      likes: 312,
      views: 4800,
      duration: "0:58"
    },
    {
      id: 12,
      type: 'art',
      title: "UI Elements Collection",
      description: "Game interface and HUD elements",
      image: "https://images.unsplash.com/photo-1626785774626-9af2cb6f3d0a?w=400",
      author: "Emma Thompson",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      technologies: ["UI Design", "Figma"],
      likes: 145,
      views: 1100
    }
  ];

  const filteredItems = selectedFilter === 'all' 
    ? showcaseItems 
    : showcaseItems.filter(item => item.type === selectedFilter);

  return (
    <main className="main-content">
      <section className="showcase-section">
        <div className="showcase-header">
          <h1 className="showcase-title">Showcase</h1>
          <p className="showcase-subtitle">Discover tech, art, and videos from the community</p>
        </div>

        <div className="showcase-filters">
          <button 
            className={`showcase-filter ${selectedFilter === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('all')}
          >
            All
          </button>
          <button 
            className={`showcase-filter ${selectedFilter === 'tech' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('tech')}
          >
            Tech
          </button>
          <button 
            className={`showcase-filter ${selectedFilter === 'art' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('art')}
          >
            Art
          </button>
          <button 
            className={`showcase-filter ${selectedFilter === '3d' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('3d')}
          >
            3D Models
          </button>
          <button 
            className={`showcase-filter ${selectedFilter === 'video' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('video')}
          >
            Videos
          </button>
        </div>

        <div className="showcase-grid">
          {filteredItems.map(item => (
            <div key={item.id} className={`showcase-card showcase-${item.type}`}>
              {item.type === 'video' ? (
                <div className="showcase-video-container">
                  <iframe
                    className="showcase-video"
                    src={`https://www.youtube.com/embed/${item.videoId}`}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  {item.duration && (
                    <span className="showcase-duration">{item.duration}</span>
                  )}
                </div>
              ) : (
                <div className="showcase-image-container">
                  <img src={item.image} alt={item.title} className="showcase-image" />
                </div>
              )}
              
              <div className="showcase-content">
                <h3 className="showcase-item-title">{item.title}</h3>
                <p className="showcase-item-description">{item.description}</p>
                
                <div className="showcase-technologies">
                  {item.technologies.map((tech, idx) => (
                    <span key={idx} className="showcase-tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="showcase-footer">
                  <div className="showcase-author">
                    <img src={item.authorAvatar} alt={item.author} className="showcase-avatar" />
                    <span className="showcase-author-name">{item.author}</span>
                  </div>
                  <div className="showcase-stats">
                    <span className="showcase-stat">❤️ {item.likes}</span>
                    <span className="showcase-stat">👁️ {item.views}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Showcase;

