# Beginner

**Want to learn how technology affects our planet?** Start here! You'll create charts and graphs about environmental issues, even if you've never coded before.

## What You'll Do

1. **Learn basics** - Simple Python to work with environmental data
2. **Create your analysis** - Make charts about climate, energy, or pollution  
3. **Share your work** - Put it on a real website for others to see

**No experience needed!** We'll walk you through everything step by step.

## What You'll Create

You'll build something like this:
- Interactive charts showing CO2 emissions
- Graphs of energy usage over time  
- Analysis of renewable energy trends
- Professional data visualizations

## Ready to Start?

**Step 1:** Learn Python basics → `onboarding/python-tutorial/README.md`
- Takes about 30-60 minutes
- Start with simple examples  
- Build your first chart

**Step 2:** Create your analysis → `onboarding/git-tutorial/README.md`
- Copy an existing example
- Add your own environmental data
- See it working on your computer

**Step 3:** Share
- Put your work on the live website
- Others can see and learn from your analysis

## 🎯 Start 

👉 **Click here to begin:** [`onboarding/python-tutorial/README.md`](onboarding/python-tutorial/README.md)

---

# Technical README

## Project Overview

Smart Warming is an educational web application that teaches environmental data analysis through hands-on Python programming and web development. The project combines data science learning with real environmental insights, allowing contributors to analyze climate data and share findings through interactive web visualizations.

## Features

- **Beginner-friendly Python tutorials** for environmental data analysis
- **Interactive web dashboard** displaying analysis results
- **Modular content system** for easy addition of new analyses
- **Professional Git workflow** for collaborative contribution
- **Real environmental data integration** from public APIs
- **Responsive web interface** with Chart.js visualizations
- **Automated build and deployment** ready for Netlify/Vercel

## Architecture

```
smart-warming/
├── content/                    # Content management
│   ├── articles/              # Data analysis articles
│   │   └── pigeon-analysis/   # Example analysis
│   │       ├── analyze_data.py       # Python analysis script
│   │       ├── web-analysis.html     # Web visualization
│   │       ├── output/              # Generated data files
│   │       └── README.md            # Analysis documentation
│   └── games/                 # Interactive simulations
├── webapp/                    # Web application
│   ├── public/               # Static assets and entry pages
│   │   ├── content-map.json  # Content configuration
│   │   ├── articles.html     # Articles listing page
│   │   ├── article.html      # Article redirect handler
│   │   └── games.html        # Games listing page
│   ├── src/                  # Source code (minimal for this project)
│   ├── package.json          # Node.js dependencies
│   └── index.html            # Main entry point
├── onboarding/               # Learning materials
│   ├── python-tutorial/      # Python learning path
│   │   └── docs/            # Comprehensive guides
│   └── git-tutorial/         # Git and contribution workflow
├── shared/                   # Common utilities and constants
│   ├── constants.js          # Shared data structures
│   └── data/                # Shared datasets
└── design/                   # Design assets and documentation
```

## Technology Stack

### Data Analysis
- **Python 3.9+** - Core analysis language
- **matplotlib** - Chart generation
- **pandas** - Data manipulation
- **requests** - API data fetching

### Web Application
- **Vite** - Build tool and development server
- **Vanilla HTML/CSS/JS** - Frontend implementation
- **Chart.js** - Interactive data visualizations
- **Responsive CSS Grid/Flexbox** - Layout system

### Development & Deployment
- **Git/GitHub** - Version control and collaboration
- **Netlify/Vercel** - Static site hosting
- **Node.js/npm** - Build tools and package management

## Getting Started (Developers)

### Prerequisites
- Python 3.9+
- Node.js 16+
- Git

### Quick Setup
```bash
# Clone the repository
git clone https://github.com/your-username/smart-warming.git
cd smart-warming

# Set up web application
cd webapp
npm install
npm run dev

# Set up Python environment
cd ../content/articles/pigeon-analysis
pip install -r requirements.txt
python analyze_data.py
```

## Content Structure

### Adding New Analysis Articles

1. **Create analysis folder:**
   ```
   content/articles/your-analysis-name/
   ├── analyze_data.py          # Your Python analysis
   ├── web-analysis.html        # Web presentation
   ├── requirements.txt         # Python dependencies
   ├── README.md               # Documentation
   └── output/                 # Generated files
   ```

2. **Update content map:**
   Add entry to `webapp/public/content-map.json`

3. **Follow data format:**
   Python script should output `analysis_data.json` with structure:
   ```json
   {
     "data": [{"impact_type": "...", "percentage": 0, "color": "#..."}],
     "statistics": {"total_impact_points": 0, "methodology": "..."},
     "metadata": {"generated_by": "...", "version": "1.0"}
   }
   ```

## Development Workflow

### Local Development
1. **Start development server:** `npm run dev` in webapp directory
2. **Run Python analysis:** Execute scripts in content/articles/
3. **Test integration:** Verify articles appear in local webapp
4. **Build for production:** `npm run build`

### Contribution Process
1. **Fork repository** on GitHub
2. **Create feature branch** for your analysis
3. **Develop and test locally**
4. **Submit pull request** with analysis description
5. **Code review and merge**

## Deployment

The project includes configuration for multiple hosting platforms:

- **Netlify:** `netlify.toml` - Automatic builds from main branch
- **Vercel:** `vercel.json` - Vite framework detection
- **GitHub Pages:** Compatible with static build output

### Build Process
```bash
npm run build          # Builds webapp to dist/
npm run copy-content   # Copies content files to dist/
```

## Contributing

We welcome contributions from learners at all levels! See the onboarding tutorials for step-by-step guidance, or check existing analyses for examples.

### Types of Contributions
- **Environmental data analyses** (primary focus)
- **Interactive games and simulations**
- **Educational content improvements**
- **Technical infrastructure enhancements**
- **Documentation and tutorial updates**

## License

Open source - free for educational and non-commercial use.
