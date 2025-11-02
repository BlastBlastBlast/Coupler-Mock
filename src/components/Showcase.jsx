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

function Showcase() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [expandedCard, setExpandedCard] = useState(null);
  const [dismissedAnnotations, setDismissedAnnotations] = useState(new Set());
  
  const handleDismissAnnotation = (id) => {
    setDismissedAnnotations(prev => new Set([...prev, id]));
  };

  const showcaseItems = [
    // Tech
    { id: 1, type: 'tech', title: "Procedural Quest Generator", author: "Alex Chen", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400", tags: ["C#", "Unity"] },
    { id: 2, type: 'tech', title: "Narrative System", author: "Alex Chen", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400", tags: ["C#", "Dialogue"] },
    { id: 3, type: 'tech', title: "Automated Testing", author: "James Park", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400", tags: ["Python", "Testing"] },
    
    // Art
    { id: 4, type: 'art', title: "Cyberpunk Character", author: "Sarah Martinez", image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400", tags: ["Character Design"] },
    { id: 5, type: 'art', title: "Environment Textures", author: "James Park", image: "https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400", tags: ["Texturing"] },
    { id: 6, type: 'art', title: "Pixel Art Sprites", author: "Alex Chen", image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=400", tags: ["Pixel Art"] },
    
    // Models
    { id: 7, type: 'models', title: "Vehicle Collection", author: "Emma Thompson", image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400", tags: ["3D Modeling"] },
    { id: 8, type: 'models', title: "Weapon Models", author: "Sarah Martinez", image: "https://images.unsplash.com/photo-1588795942306-1dbe15e4e3f1?w=400", tags: ["3D Assets"] },
    { id: 9, type: 'models', title: "Character Rigs", author: "Emma Thompson", image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400", tags: ["Rigging"] },
    
    // Videos
    { id: 10, type: 'videos', title: "Flight Physics Demo", author: "Alex Chen", videoId: "dQw4w9WgXcQ", tags: ["C++", "Physics"] },
    { id: 11, type: 'videos', title: "Netcode Explained", author: "Alex Chen", videoId: "dQw4w9WgXcQ", tags: ["Networking"] },
    { id: 12, type: 'videos', title: "Quest System Demo", author: "Alex Chen", videoId: "dQw4w9WgXcQ", tags: ["Procedural"] },
    
    // Mods
    { id: 13, type: 'mods', title: "Enhanced Combat Mod", author: "James Park", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400", tags: ["Combat", "Mod"] },
    { id: 14, type: 'mods', title: "UI Overhaul", author: "Emma Thompson", image: "https://images.unsplash.com/photo-1626785774626-9af2cb6f3d0a?w=400", tags: ["UI", "Mod"] },
    
    // Titles
    { id: 15, type: 'titles', title: "Cyberpunk Horizons", author: "Alex Chen", image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400", tags: ["Full Release"] },
    { id: 16, type: 'titles', title: "Neon Skies", author: "Sarah Martinez", image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400", tags: ["Early Access"] },
  ];

  const filteredItems = selectedFilter === 'all' 
    ? showcaseItems 
    : showcaseItems.filter(item => item.type === selectedFilter);

  const handleCardClick = (id) => {
    setExpandedCard(expandedCard === id ? null : id);
  };

  return (
    <main className="main-content">
      <section className="showcase-section-new" style={{position: 'relative'}}>
        {!dismissedAnnotations.has('showcase-intro') && (
          <InfoAnnotation
            id="showcase-intro"
            title="Showcase Content"
            content="Content in the Showcase is automatically pulled from creators' linked external portfolios (GitHub, ArtStation, YouTube) and verified contributions. All content is linked to verified contributions, ensuring authenticity. Creators can also manually submit standout pieces that showcase their best work."
            position="annotation-top"
            onClose={handleDismissAnnotation}
            style={{top: '20px', left: '0', zIndex: 1001, maxWidth: '400px'}}
          />
        )}
        
        <div className="showcase-header-new">
          <h1 className="showcase-title-new">Showcase</h1>
          <p className="showcase-subtitle-new">Discover tech, art, and videos from the community</p>
        </div>

        <div className="showcase-filters-new">
          <button 
            className={`filter-btn-new ${selectedFilter === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn-new ${selectedFilter === 'tech' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('tech')}
          >
            Tech
          </button>
          <button 
            className={`filter-btn-new ${selectedFilter === 'art' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('art')}
          >
            Art
          </button>
          <button 
            className={`filter-btn-new ${selectedFilter === 'models' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('models')}
          >
            Models
          </button>
          <button 
            className={`filter-btn-new ${selectedFilter === 'videos' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('videos')}
          >
            Videos
          </button>
          <button 
            className={`filter-btn-new ${selectedFilter === 'mods' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('mods')}
          >
            Mods
          </button>
          <button 
            className={`filter-btn-new ${selectedFilter === 'titles' ? 'active' : ''}`}
            onClick={() => setSelectedFilter('titles')}
          >
            Titles
          </button>
        </div>

        {/* Backdrop overlay for expanded cards */}
        {expandedCard && (
          <div 
            className="showcase-backdrop-new"
            onClick={() => setExpandedCard(null)}
          ></div>
        )}

        <div className="showcase-grid-new">
          {filteredItems.map(item => {
            const isExpanded = expandedCard === item.id;
            return (
              <div 
                key={item.id} 
                className={`showcase-card-new ${isExpanded ? 'expanded' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick(item.id);
                }}
              >
                <div className="showcase-thumbnail-new">
                  {item.type === 'videos' ? (
                    isExpanded ? (
                      <div className="showcase-video-embed-new">
                        <iframe
                          src={`https://www.youtube.com/embed/${item.videoId}`}
                          title={item.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    ) : (
                      <>
                        <img src={`https://img.youtube.com/vi/${item.videoId}/maxresdefault.jpg`} alt={item.title} />
                        <div className="play-overlay-new">▶</div>
                      </>
                    )
                  ) : (
                    <img src={item.image} alt={item.title} />
                  )}
                </div>
                <div className="showcase-info-new">
                  <h3 className="showcase-title-text-new">{item.title}</h3>
                  <p className="showcase-author-new">{item.author}</p>
                  <div className="showcase-tags-new">
                    {item.tags.map((tag, idx) => (
                      <span key={idx} className="tag-new">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default Showcase;
