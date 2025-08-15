# Git Workflow for Contributors

This guide walks you through the complete process of using Git and GitHub to contribute your environmental analysis to the Smart Warming project. You'll learn professional development practices used in real software projects.

## Understanding Git and GitHub

**Git** is like a super-powered "save" system for code that:
- Tracks every change you make to your files
- Lets you work on different versions (branches) simultaneously
- Helps multiple people collaborate without conflicts
- Keeps a complete history of your project

**GitHub** is a website where you store your Git projects and collaborate with others.

## Step 1: Fork and Clone

### Forking the Repository
**Forking** creates your own copy of the project on GitHub.

1. **Go to the Smart Warming project on GitHub**
2. **Click the "Fork" button** (top right corner)
3. **Choose your account** as the destination
4. **Wait for the fork to complete**

You now have your own copy at: `github.com/YOUR-USERNAME/smart-warming`

### Cloning to Your Computer
**Cloning** downloads your fork to work on locally.

**Using the command line:**
1. **Open terminal/command prompt**
2. **Navigate to where you want the project:**
   - `cd Documents` (or wherever you keep projects)
3. **Clone your fork:**
   - `git clone https://github.com/YOUR-USERNAME/smart-warming.git`
4. **Go into the project:**
   - `cd smart-warming`

**Using GitHub Desktop (easier for beginners):**
1. **Download GitHub Desktop** from desktop.github.com
2. **Sign in with your GitHub account**
3. **Click "Clone a repository from the Internet"**
4. **Select your forked smart-warming repository**
5. **Choose where to save it on your computer**

## Step 2: Set Up Your Development Environment

### Install Dependencies
**In the webapp folder:**
```bash
cd webapp
npm install
```

**For Python analysis:**
```bash
cd content/articles/pigeon-analysis
pip install -r requirements.txt
```

### Test Everything Works
```bash
# Start the website
cd webapp
npm run dev

# In another terminal, test Python analysis
cd content/articles/pigeon-analysis
python analyze_data.py
```

If both work without errors, you're ready to start developing!

## Step 3: Create a Feature Branch

**Never work directly on the main branch!** Always create a feature branch for your changes.

**What is a branch?**
Think of branches like alternate versions of your project. You can experiment on a branch without affecting the main version.

### Create Your Branch
```bash
# Make sure you're on main branch
git checkout main

# Create and switch to new branch
git checkout -b add-climate-analysis

# Or create branch with more specific name
git checkout -b analyze-temperature-trends-2024
```

**Branch naming conventions:**
- Use descriptive names: `add-air-quality-analysis`
- Use dashes, not spaces: `fix-chart-formatting`
- Start with action: `add-`, `fix-`, `update-`

## Step 4: Make Your Changes

### Add Your Analysis
1. **Create your analysis folder** in `content/articles/`
2. **Add your Python script, HTML page, and documentation**
3. **Update the content map** in `webapp/public/content-map.json`
4. **Test locally** to make sure everything works

### Best Practices While Working
- **Make small, focused changes** rather than huge modifications
- **Test frequently** to catch issues early  
- **Save your work often** with commits
- **Keep your branch up to date** with the main project

## Step 5: Commit Your Changes

**Commits** are like save points with descriptions of what you changed.

### Basic Commit Process
```bash
# See what files you've changed
git status

# Add files to be committed
git add content/articles/your-analysis/
git add webapp/public/content-map.json

# Or add all changes
git add .

# Create a commit with a message
git commit -m "Add climate temperature analysis for major cities"
```

### Writing Good Commit Messages
**Format:** `Action: Brief description`

**Good examples:**
- `Add: Temperature trend analysis for 50 major cities`
- `Fix: Chart display issue with negative values`
- `Update: Documentation for air quality analysis`

**Bad examples:**
- `changes` (too vague)
- `fixed stuff` (not descriptive)
- `ADDED NEW ANALYSIS!!!` (unnecessary caps/punctuation)

### Multiple Commits
It's okay to make multiple commits as you work:
```bash
# First commit - add basic analysis
git add content/articles/my-analysis/analyze_data.py
git commit -m "Add: Basic data fetching and processing script"

# Second commit - add visualization
git add content/articles/my-analysis/web-analysis.html
git commit -m "Add: Web page with interactive charts"

# Third commit - integrate with website
git add webapp/public/content-map.json
git commit -m "Add: Register analysis in content map"
```

## Step 6: Push to GitHub

**Pushing** uploads your commits to GitHub.

```bash
# Push your branch to your fork
git push origin add-climate-analysis

# If it's your first push on this branch
git push -u origin add-climate-analysis
```

## Step 7: Create a Pull Request

**A Pull Request (PR)** asks the project maintainers to include your changes in the main project.

### On GitHub Website:
1. **Go to your fork** on GitHub
2. **You'll see a banner** saying "Compare & pull request" - click it
3. **If no banner, click "Contribute" → "Open pull request"**

### Writing a Good Pull Request

**Title:** Clear and descriptive
- Good: `Add air quality analysis for major US cities`
- Bad: `New analysis` or `My changes`

**Description template:**
```markdown
## What This Adds

Brief description of your environmental analysis and what insights it provides.

## Analysis Details

- **Topic:** Air quality trends in major US cities
- **Data Source:** EPA Air Quality API
- **Time Period:** 2020-2024
- **Key Findings:** PM2.5 levels decreased 15% overall, but increased in industrial areas

## Testing

- [x] Python analysis runs without errors
- [x] Charts display correctly in browser
- [x] Analysis appears in articles list
- [x] All navigation links work
- [x] Mobile-responsive design maintained

## Files Changed

- Added `content/articles/air-quality-cities/` with complete analysis
- Updated `webapp/public/content-map.json` to register new analysis
- All new files follow project conventions

## Screenshots

[If you can, include a screenshot of your analysis page]
```

## Step 8: Code Review Process

### What to Expect
- **Review time:** Usually 1-3 days
- **Feedback:** Suggestions for improvements (normal and helpful!)
- **Requests for changes:** Common for first-time contributors
- **Approval and merge:** Your analysis goes live!

### Responding to Feedback
**Common review comments and how to handle them:**

**"Can you add more documentation?"**
- Add more details to your README
- Explain your methodology more clearly
- Include data source citations

**"Chart formatting needs adjustment"**
- Update colors to match site theme
- Fix axis labels or titles
- Improve mobile responsiveness

**"Python code needs cleanup"**
- Add comments explaining complex logic
- Remove unused variables or imports
- Follow Python naming conventions

### Making Changes After Review
```bash
# Make the requested changes to your files
# Then commit and push again
git add .
git commit -m "Address review feedback: improve documentation and chart styling"
git push origin add-climate-analysis
```

The pull request automatically updates with your new commits!

## Step 9: Keep Your Fork Updated

**Stay synchronized with the main project:**

### Add Upstream Remote (one-time setup)
```bash
# Add the original project as "upstream"
git remote add upstream https://github.com/original-owner/smart-warming.git
```

### Regular Updates
```bash
# Get latest changes from main project
git checkout main
git pull upstream main

# Update your fork on GitHub
git push origin main

# Update your feature branch (if needed)
git checkout your-feature-branch
git merge main
```

## Common Git Commands Cheat Sheet

### Daily Workflow
```bash
git status              # See what files are changed
git add filename        # Stage specific file for commit  
git add .              # Stage all changed files
git commit -m "message" # Create a commit
git push origin branch-name # Upload to GitHub
```

### Branch Management
```bash
git branch             # List all branches
git checkout main      # Switch to main branch
git checkout -b new-branch # Create and switch to new branch
git branch -d old-branch   # Delete branch (after merging)
```

### Getting Information
```bash
git log                # See commit history
git diff              # See what you've changed
git remote -v         # See your remote repositories
```

## Troubleshooting Common Issues

### "Permission denied" when pushing
**Problem:** You don't have write access to the original repository.
**Solution:** Make sure you're pushing to your fork, not the original project.

### "Merge conflicts"
**Problem:** Your changes conflict with someone else's changes.
**Solution:** Don't panic! This is normal in collaborative projects.
1. Git will mark the conflicting sections in your files
2. Edit the files to resolve conflicts
3. Add and commit the resolved files
4. Push to continue

### "Your branch is behind"
**Problem:** The main project has new changes you don't have.
**Solution:** Update your fork as described in Step 9.

### "Commit rejected"
**Problem:** Various authentication or permission issues.
**Solution:** 
- Check you're using the correct GitHub username
- Verify you're pushing to your fork, not the original
- Make sure Git is configured with your details

## Git Best Practices

### Do:
- **Commit frequently** with small, logical changes
- **Write clear commit messages** describing what and why
- **Test your code** before committing
- **Keep your fork updated** with the main project
- **Use descriptive branch names**
- **Read project contribution guidelines**

### Don't:
- **Commit sensitive information** (API keys, passwords)
- **Make huge commits** with dozens of unrelated changes
- **Work directly on main branch**
- **Force push** to shared branches
- **Ignore merge conflicts** hoping they'll go away

## Success Metrics

You've mastered the Git workflow when you can:
- [ ] **Fork and clone** a repository confidently
- [ ] **Create feature branches** for different types of work  
- [ ] **Make clear, focused commits** with good messages
- [ ] **Create professional pull requests** with good descriptions
- [ ] **Respond to code review feedback** constructively
- [ ] **Keep your fork synchronized** with the main project
- [ ] **Troubleshoot common Git issues** independently

## Beyond This Project

The Git skills you learn here apply to:
- **Any software development job** - Git is industry standard
- **Personal projects** - Track your own code changes
- **Academic work** - Collaborate on research projects  
- **Open source contribution** - Contribute to any GitHub project
- **Portfolio development** - Show your coding progression

**Remember:** Every professional developer uses Git daily. You're learning real-world skills that will serve you throughout your career!

## Additional Resources

### Git Learning
- **Interactive tutorial:** [Learn Git Branching](https://learngitbranching.js.org/)
- **Comprehensive guide:** [Pro Git Book](https://git-scm.com/book)
- **Visual interface:** [GitHub Desktop](https://desktop.github.com/)
- **Command reference:** [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)

### GitHub Workflow
- **Official guide:** [GitHub Flow](https://guides.github.com/introduction/flow/)
- **Pull request guide:** [Creating a Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
- **Collaboration:** [Working with Forks](https://docs.github.com/en/get-started/quickstart/fork-a-repo)