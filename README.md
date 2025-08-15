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
│   ├── games/             # Interactive games
│   └── articles/          # Data analysis articles
├── webapp/                # SPA that renders everything
│   ├── src/
│   └── content-map.json   # Defines game↔article links
├── design/                # Design assets and documentation
├── onboarding/            # Learning space
│   └── python-tutorial/   # Beginner Python tutorial (READY ✅)
└── shared/                # Common utilities
```

## 🚀 Getting Started

### For Data Analysis Learning (READY NOW)
1. Go to `onboarding/python-tutorial/` folder
2. Read the README - it's designed for complete beginners
3. Follow the step-by-step Python tutorial
4. Create a working CO2 visualization demo

### For Production Content
1. Create games in `content/games/`
2. Create articles in `content/articles/`
3. Test webapp that links them via `content-map.json`
4. Create PR to github and see your changes online

## Current Status

### ✅ Completed
- **Python tutorial**: Complete beginner-friendly learning path
- **Clean architecture**: Scalable content structure  
- **Flexible linking**: Games can link to any articles via config
- **Learning resources**: Install guides, troubleshooting, concepts

### 🔄 Next Steps
- **More games**: Add new games in `content/games/`
- **More articles**: Create new analysis articles in `content/articles/`
- **Enhanced webapp**: Add features and improve UI
- **Real data**: Replace demo data with actual environmental statistics

## 🛠️ Technology

**Data Analysis**: Python, matplotlib, Carbon Intensity API  
**Games**: JavaScript/TypeScript, Canvas/WebGL 
**WebApp**: Modern framework, SPA architecture  
**Hosting**: Netlify

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
- **Ready for real work?** → `content/articles/pigeon-analysis/README.md`
- **Want to see the website?** → Open `webapp/index.html` in browser