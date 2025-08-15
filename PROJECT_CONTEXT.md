# Smart Warming - Project Context (Updated Architecture)

## Project Overview

**Smart Warming** is an educational web application exploring AI's environmental impact through:
- Interactive games (TypeScript + DSA + Linear Algebra)
- Data analysis articles (Python + real environmental data)
- Flexible linking: N games can link to M articles via configuration

## Current Architecture ✅ CLEAN & SCALABLE

```
smart-warming/
├── content/                # Production content (scalable)
│   ├── games/             # Independent games (1, 2, 3... N games)
│   └── articles/          # Independent articles (A, B, C... M articles)
├── webapp/                # SPA that renders everything
│   ├── src/
│   └── content-map.json   # Flexible N:M linking between games↔articles
├── onboarding/            # Learning space (separate from production)
│   └── python-tutorial/   # Beginner-friendly Python tutorial
├── shared/                # Common utilities
└── PROJECT_CONTEXT.md     # This file
```

### Key Architecture Benefits
1. **Scalable Content**: Add games/articles independently
2. **Flexible Linking**: Any game can link to any articles (configurable)
3. **Clean Separation**: Learning vs Production content
4. **Independent Development**: Teams can work on games/articles separately

## Completed Modules

### Python Tutorial ✅ PRODUCTION READY
- **Location**: `onboarding/python-tutorial/`
- **Purpose**: Complete beginner Python learning (5-year-old level)
- **Status**: Fully functional, tested, documented
- **Structure**:
  ```
  onboarding/python-tutorial/
  ├── demo/                    # Working directory
  │   ├── my_demo.py          # User creates Python file
  │   ├── output/             # Results (pre-created)
  │   └── my_notes.md         # User documentation
  ├── docs/                   # Learning resources (no copy-paste code)
  │   ├── python_basics.md    # Step-by-step tutorial
  │   ├── install_python.md   # Setup guide
  │   ├── common_errors.md    # Troubleshooting
  │   ├── what_is_python.md   # Programming concepts
  │   └── what_is_api.md      # API explanations
  └── requirements.txt        # Dependencies
  ```

### Content Architecture ✅ READY FOR DEVELOPMENT
- **Games Directory**: `content/games/` (existing structure moved)
- **Articles Directory**: `content/articles/` (ready for development)
- **Link Configuration**: `webapp/content-map.json` (example structure created)

## Content Linking System

### Example Configuration (`webapp/content-map.json`)
```json
{
  "games": {
    "ai-energy-simulator": {
      "title": "AI Energy Simulator",
      "description": "See how AI training affects power consumption",
      "linkedArticles": ["ai-consumption-analysis", "datacenter-emissions"]
    }
  },
  "articles": {
    "ai-consumption-analysis": {
      "title": "Real AI Energy Consumption Data",
      "description": "Analysis of actual AI training power usage",
      "linkedGames": ["ai-energy-simulator", "carbon-calculator"]
    }
  }
}
```

### Benefits
- **Flexible Relationships**: 1 game → multiple articles, 1 article → multiple games
- **Easy Configuration**: Change links without touching code
- **Dynamic Rendering**: WebApp reads config and creates navigation
- **Independent Content**: Games and articles developed separately

## Development Workflow

### For Games
1. Create game folder in `content/games/my-game/`
2. Develop game using TypeScript + DSA + Linear Algebra
3. Add game to `webapp/content-map.json`
4. Link to relevant articles

### For Articles  
1. Create article folder in `content/articles/my-article/`
2. Develop Python data analysis
3. Add article to `webapp/content-map.json`
4. Link to relevant games

### For WebApp
1. Read `content-map.json` for available content
2. Render SPA with dynamic navigation
3. Display games and articles based on configuration
4. Handle game↔article linking

## Technical Stack

### Games (`content/games/`)
- **Language**: TypeScript/JavaScript
- **Concepts**: Data Structures & Algorithms, Linear Algebra
- **Rendering**: Canvas API, WebGL
- **Physics**: Custom implementations for educational purposes

### Articles (`content/articles/`)
- **Language**: Python
- **Data Sources**: Real environmental APIs
- **Analysis**: pandas, matplotlib, requests
- **Output**: HTML reports, charts, interactive visualizations

### WebApp (`webapp/`)
- **Type**: Single Page Application
- **Framework**: TBD (React/Vue/Vanilla)
- **Config**: Dynamic content loading from `content-map.json`
- **Deployment**: Free hosting (Vercel, Netlify, GitHub Pages)

## User Journey Vision
1. User visits SPA website
2. Clicks on game in header/navigation
3. Plays interactive game with environmental message
4. Game shows links to related articles with proof/data
5. User explores real data supporting the game's message
6. Seamless navigation between games and articles

## Next Development Steps

### Immediate Priority
1. **First Production Game**: Create simple game in `content/games/`
2. **First Production Article**: Create data analysis in `content/articles/`
3. **Basic WebApp**: SPA that can render content and links
4. **Test Integration**: Verify game↔article linking works

### Content Ideas
- **AI Energy Game** → **Real AI Power Consumption Data**
- **Data Center Builder** → **Global Data Center Emissions Analysis**  
- **Carbon Calculator** → **Computing Environmental Impact Study**

## Migration Notes
- **Moved**: `data-analysis/` → `onboarding/python-tutorial/` (unchanged content)
- **Moved**: `games-simulations/` → `content/games/` (structure preserved)
- **Created**: `content/articles/` (ready for development)
- **Created**: `webapp/content-map.json` (flexible linking system)

## Philosophy Maintained
1. **Beginner-Friendly**: Onboarding remains accessible
2. **Demo-First**: Perfect simple examples before complexity
3. **Independent Development**: Teams work separately, integrate smoothly
4. **Real Impact**: Actual environmental data and insights
5. **Free Hosting**: No paid services required

This architecture supports scaling from 1 game + 1 article to N games + M articles with flexible linking between them.