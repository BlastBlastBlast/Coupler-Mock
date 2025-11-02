# Coupler - Portfolio Generator for Steam Ecosystem

A Vite-based React mockup of a portfolio generator that extends the Steam ecosystem. This project demonstrates how verified Steam contributions can be displayed as professional portfolios.

## About Coupler

Coupler is envisioned as a contribution-driven talent and collaboration platform designed to professionalize creative work within the Steam ecosystem. It enables creators to turn their involvement in game development into verified professional identities through authenticated Steam activity.

## Features

- **Steam-inspired Design**: Uses Steam's visual design language and color palette
- **Portfolio Metrics**: Displays verified contributions including shipped titles, Early Access participation, Workshop assets, and test contributions
- **Profile Showcase**: Professional profile cards with verified badges
- **Expandable Contribution Cards**: Click any contribution to see detailed information
  - **Developer Jargon Tags**: Searchable tags like #physics, #networking, #AI, #gameplay-programming
  - **Detailed Descriptions**: Comprehensive explanations of actual work done
  - **Hiring-Focused Metrics**: Team size, duration, responsibilities, lines of code
  - **Key Contributions**: Bullet-pointed list of specific achievements
- **Technical Stack**: Simple tag-based display of languages worked in/touched, engines, tools, and platforms
- **GitHub Integration**: Showcase of code repositories with stars, forks, and language tags
- **ArtStation Portfolio**: Gallery of game art, character designs, and UI elements
- **3D Models & Assets**: Showcase of game assets with polygon counts and specs
- **Tech Demo Videos**: YouTube Shorts-style embedded video demos of technical work
- **Skills Display**: Specializations and expertise tags

## Getting Started

### Installation

Install dependencies:

```bash
npm install
```

### Development

Run the development server on localhost:3000:

```bash
npm run dev
```

### Build

Build for production:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## Tech Stack

- **Vite**: Fast build tool and dev server
- **React**: UI framework
- **CSS**: Steam-inspired styling

## Project Structure

```
coupler/
├── src/
│   ├── App.jsx       # Main application component
│   ├── App.css       # Steam-inspired styles
│   ├── index.css     # Base styles and fonts
│   └── main.jsx      # Application entry point
├── index.html        # HTML template
├── vite.config.js    # Vite configuration
└── package.json      # Dependencies and scripts
```

## Design Philosophy

The mockup uses Steam's visual design language:
- Dark color scheme with blue accents
- Steam's color palette (dark blues, light blue highlights)
- Card-based layouts
- Status badges for contribution types
- Metrics grid for quick insights
- Verification badges for authenticity

## License

This is a mockup project for demonstration purposes.
