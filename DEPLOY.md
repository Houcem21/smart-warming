# 🚀 Deployment Guide

## Quick Deploy Options

### 🟢 Netlify (Easiest)

#### Option 1: Drag & Drop (30 seconds)
```bash
cd webapp
npm run build
```
Then drag `dist/` folder to [netlify.com/drop](https://netlify.com/drop)

#### Option 2: Netlify CLI
```bash
cd webapp
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

#### Option 3: GitHub Integration
1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) 
3. Connect your repo
4. Auto-deploy!

### 🔵 Vercel Alternative

#### Vercel CLI
```bash
cd webapp
npm install -g vercel
vercel
```

## What You'll See

### 🏠 Home Page
- Welcome message
- Cards for Mouse Tracker Game and Pigeon Analysis
- Clean dark theme with green accents

### 🎮 Games Section
- **Mouse Tracker**: Move mouse to see green trail and position tracking
- Grid overlay shows coordinates
- Links to related article

### 📊 Articles Section  
- **Pigeon Analysis**: Satirical environmental analysis
- Bar chart showing "environmental impact" percentages
- Links back to related game

## Architecture Demonstrated

### ✅ Flexible Content Mapping
- `content-map.json` defines game↔article relationships
- Easy to add new games/articles
- Dynamic linking system

### ✅ Scalable Structure
```
webapp/
├── src/main.js           # Core app logic + content mapping
├── content-map.json      # Flexible linking configuration
├── index.html           # SPA with sections
└── package.json         # Vite build system
```

### ✅ Clean Navigation
- Header with Home/Games/Articles tabs
- Smooth section switching
- Cross-linking between games and articles

## Next Steps After Deployment

1. **Add Real Content**: Replace mouse tracker with meaningful environmental game
2. **Real Data**: Replace pigeon analysis with actual environmental analysis  
3. **Expand Content**: Add more games/articles using the same pattern
4. **Enhanced Linking**: Extend content-map.json for complex relationships

The skeleton is ready for real environmental impact content! 🌍