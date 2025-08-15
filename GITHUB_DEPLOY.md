# 🚀 GitHub + Netlify Deployment Guide

## Step 1: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Click "New Repository" 
3. Name it: `smart-warming`
4. Keep it **Public** (for free Netlify)
5. **Don't** initialize with README (we have files already)
6. Click "Create Repository"

## Step 2: Connect Local Project to GitHub

Copy the commands from your new GitHub repo page, but here's the standard flow:

```bash
# Make sure you're in the main project directory
cd /Users/Houssem/Documents/personal/smart-warming

# Add your GitHub repo URL (replace with your actual repo)
git remote add origin https://github.com/YOUR_USERNAME/smart-warming.git

# Stage all files
git add .

# Make initial commit
git commit -m "🌍 Complete Smart Warming skeleton: mouse tracker game + pigeon analysis with flexible linking"

# Push to GitHub
git push -u origin main
```

## Step 3: Connect to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login with GitHub
3. Click "Add new site" → "Import an existing project"
4. Choose "Deploy with GitHub"
5. Select your `smart-warming` repository
6. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `webapp/dist`
   - Base directory: `webapp`

7. Click "Deploy site"

## Step 4: Automatic Deployments

✅ **Every time you push to GitHub, Netlify auto-deploys!**

```bash
# Make changes, then:
git add .
git commit -m "Add new game or article"
git push

# Netlify automatically rebuilds and deploys
```

## Step 5: Custom Domain (Optional)

1. In Netlify dashboard → "Domain settings"
2. Add custom domain or use free `*.netlify.app` URL

## 🎯 Current Project Structure (GitHub Ready)

```
smart-warming/                 # ← Main repo
├── content/                   # Production content
│   ├── games/mouse-tracker/   
│   └── articles/pigeon-analysis/
├── webapp/                    # SPA (Netlify builds this)
│   ├── index.html
│   ├── src/main.js
│   ├── package.json
│   └── netlify.toml
├── onboarding/python-tutorial/ # Learning resources
├── .gitignore                 # Ignore node_modules, dist, etc.
├── netlify.toml              # Main Netlify config
├── README.md                 # Project overview
└── PROJECT_CONTEXT.md        # Full context for AI handoff
```

## 🔧 Netlify Configuration

The `netlify.toml` files are configured to:
- Build from `webapp/` directory
- Run `npm run build` 
- Serve from `webapp/dist/`
- Handle SPA routing (redirects)

## ✅ Benefits of This Setup

- **Version Control**: Full project history
- **Auto-Deploy**: Push = Live website
- **Collaboration**: Others can contribute
- **Free Hosting**: No costs
- **Custom URLs**: Professional domains
- **Easy Updates**: Just git push

## 🎉 Result

You'll have:
- **GitHub Repo**: Complete project with clean architecture
- **Live Website**: Auto-updating on every commit  
- **Professional Setup**: Industry-standard deployment flow
- **Collaboration Ready**: Others can fork/contribute

**Your smart-warming project will be live and auto-deploying!** 🌍