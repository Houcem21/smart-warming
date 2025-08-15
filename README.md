# Smart Warming 🌍

A simple web application exploring AI's environmental impact. Two sections: games and data visualization.

## 🎯 What This Is

An educational webapp where:
- **Data section**: Shows real CO2 emissions from computing
- **Games section**: Interactive simulations about environmental impact
- **Two-person project**: One person handles data, one handles games/webapp

## 🎨 Design

[Architecture Design](design/) - Excalidraw design files and exported images

## 🏗️ Clean Architecture

```
smart-warming/
├── content/                # Production content
│   ├── games/             # Game 1, Game 2, Game 3... (TODO)
│   └── articles/          # Article A, Article B, Article C... (TODO)
├── webapp/                # SPA that renders everything (TODO)
│   ├── src/
│   └── content-map.json   # Defines game↔article links
├── design/                # Design assets and documentation
├── onboarding/            # Learning space
│   └── python-tutorial/   # Beginner Python tutorial (READY ✅)
├── shared/                # Common utilities (TODO)
└── PROJECT_CONTEXT.md     # Full context for AI handoff
```

## 🚀 Getting Started

### For Data Analysis Learning (READY NOW)
1. Go to `onboarding/python-tutorial/` folder
2. Read the README - it's designed for complete beginners
3. Follow the step-by-step Python tutorial
4. Create a working CO2 visualization demo

### For Production Content (TODO)
1. Check `PROJECT_CONTEXT.md` for full technical details
2. Create games in `content/games/`
3. Create articles in `content/articles/`
4. Build webapp that links them via `content-map.json`
5. Use free hosting (Vercel/Netlify)

## Current Status

### ✅ Completed
- **Python tutorial**: Complete beginner-friendly learning path
- **Clean architecture**: Scalable content structure  
- **Flexible linking**: Games can link to any articles via config
- **Learning resources**: Install guides, troubleshooting, concepts

### 🔄 Next Steps
- **Production games**: Create games in `content/games/`
- **Production articles**: Create data analysis articles in `content/articles/`
- **WebApp**: SPA that renders content and manages links
- **Content mapping**: Define game↔article relationships

## 🛠️ Technology

**Data Analysis**: Python, matplotlib, Carbon Intensity API  
**Games**: JavaScript/TypeScript, Canvas/WebGL, Linear Algebra  
**WebApp**: Modern framework, SPA architecture  
**Hosting**: Free (Vercel, Netlify, GitHub Pages)

## 🎯 Project Philosophy

1. **Demo-first**: Perfect simple examples before complexity
2. **Beginner-friendly**: Anyone can contribute to data analysis
3. **Independent modules**: Work separately, integrate automatically  
4. **Real impact**: Actual environmental data and insights
5. **Free everything**: No paid services needed

## 📝 License

Free public usage

---

**Start here**: 
- **New to programming?** → `onboarding/python-tutorial/README.md`
- **Want full context?** → `PROJECT_CONTEXT.md` 
- **Continue development?** → Copy PROJECT_CONTEXT.md to another AI