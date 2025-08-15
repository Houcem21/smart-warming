# Adding Your Analysis to the Website

This guide shows you exactly how to take your Python analysis and make it appear on the live website. You'll learn how the website works and how to integrate your analysis.

## Understanding the Website Structure

The Smart Warming website is organized like this:
- **Homepage** - Welcome page with Games|Articles navigation
- **Articles page** - Lists all data analyses 
- **Individual article pages** - Your analysis with charts and data
- **Content map** - Configuration file that tells the website what content exists

## Step 1: Explore the Existing Example

**Look at the pigeon analysis** to understand how everything fits together:

1. **Go to `content/articles/pigeon-analysis/`**
2. **Open each file and read through it:**
   - `analyze_data.py` - The Python analysis script
   - `web-analysis.html` - The webpage that displays results
   - `output/analysis_data.json` - The data in website format
   - `README.md` - Documentation about the analysis

**Notice how they connect:**
- Python script generates data → JSON file
- HTML page loads JSON data → Creates interactive charts
- Content map registers the analysis → Website can find it

## Step 2: Create Your Analysis Folder

**Set up your analysis in the content system:**

1. **Go to `content/articles/`**
2. **Create a new folder** with your analysis name (use dashes, no spaces):
   - Good: `climate-temperature-trends`
   - Good: `air-quality-major-cities` 
   - Bad: `my analysis` or `My Analysis`

3. **Copy files from your demo folder:**
   - Your `my_analysis.py` → rename to `analyze_data.py`
   - Your chart PNG file → move to `output/` folder
   - Your JSON data file → move to `output/` as `analysis_data.json`

## Step 3: Create Your Web Page

**Make an HTML page to display your analysis:**

1. **Copy `pigeon-analysis/web-analysis.html`** to your folder
2. **Rename it** to `web-analysis.html` (keep this exact name)
3. **Edit the content** to match your analysis:

### Key Sections to Update:

**Page Title and Description:**
- Change the `<title>` tag
- Update the main heading `<h1>`
- Modify the description paragraph

**Embedded Data Section:**
- Find the `ANALYSIS_DATA` variable in the JavaScript
- Replace it with your JSON data structure
- Make sure the format matches exactly

**Content Sections:**
- Update "Executive Summary" with your findings
- Modify "Key Findings" to reflect your results
- Change "Methodology" to describe your approach
- Update "Future Research Directions" with related ideas

**Navigation Header:**
- Update the title to match your analysis
- Keep the back links to articles page

### Example Updates:
```html
<!-- Change this -->
<title>Pigeon Environmental Analysis</title>
<h1>🐦 Pigeon Environmental Impact Analysis</h1>

<!-- To this -->
<title>Climate Temperature Trends</title>
<h1>🌡️ Global Temperature Change Analysis</h1>
```

## Step 4: Update the Content Map

**Tell the website about your new analysis:**

1. **Open `webapp/public/content-map.json`**
2. **Find the `"articles"` section**
3. **Add your analysis entry:**

```json
{
  "articles": {
    "pigeon-analysis": {
      "title": "Pigeon Environmental Analysis",
      "description": "Analysis of pigeon impact on urban infrastructure. No installation required!",
      "path": "../content/articles/pigeon-analysis/",
      "file": "web-analysis.html",
      "linkedGames": ["pigeon-tracker"]
    },
    "your-analysis-name": {
      "title": "Your Analysis Title",
      "description": "Brief description of what you analyzed. No installation required!",
      "path": "../content/articles/your-analysis-name/",
      "file": "web-analysis.html",
      "linkedGames": []
    }
  }
}
```

**Make sure to:**
- Use the exact same folder name as your analysis folder
- Write a compelling title and description
- Keep the file name as `web-analysis.html`
- Leave `linkedGames` as empty array `[]` for now

## Step 5: Test Your Integration Locally

**Start the development server:**

1. **Open terminal in the `webapp` folder**
2. **Run `npm install`** (first time only)
3. **Run `npm run dev`**
4. **Open your browser** to the URL shown (usually `http://localhost:5173`)

**Test the complete flow:**
1. **Homepage loads** with Games|Articles header
2. **Click "Articles"** - you should see your analysis listed
3. **Click your analysis** - your page should load with charts
4. **Check everything works:**
   - Charts display correctly
   - Data loads without errors
   - Navigation links work
   - Page looks professional

### Common Issues and Fixes:

**"Analysis not showing in list":**
- Check `content-map.json` syntax is valid
- Verify folder name matches exactly
- Make sure there are no extra commas

**"Page loads but no charts":**
- Check browser console for JavaScript errors (F12)
- Verify your JSON data format is correct
- Make sure `analysis_data.json` exists in output folder

**"Charts show but wrong data":**
- Check the embedded `ANALYSIS_DATA` variable in your HTML
- Verify it matches your JSON file structure
- Update the chart titles and labels

**"Styling looks wrong":**
- Make sure you copied the CSS styles correctly
- Check that your HTML structure matches the example
- Verify all chart containers have correct IDs

## Step 6: Add Documentation

**Create a README for your analysis:**

Create `README.md` in your analysis folder:

```markdown
# Your Analysis Title

Brief description of what environmental issue you analyzed.

## Data Source

Explain where you got your data from and any limitations.

## Methodology

Describe how you processed and analyzed the data.

## Key Findings

Summarize the most important discoveries from your analysis.

## Files

- `analyze_data.py` - Python script that processes the data
- `web-analysis.html` - Web page displaying results
- `output/analysis_data.json` - Processed data for web display
- `output/chart.png` - Chart image file
- `requirements.txt` - Python dependencies needed

## Running the Analysis

```bash
pip install -r requirements.txt
python analyze_data.py
```

## Future Work

Ideas for extending or improving this analysis.
```

## Step 7: Prepare for Submission

**Final checklist before creating your pull request:**

### File Structure Check:
```
content/articles/your-analysis-name/
├── analyze_data.py          ✓ Your Python analysis
├── web-analysis.html        ✓ Updated with your content
├── README.md               ✓ Documentation
├── requirements.txt        ✓ Python dependencies
└── output/
    ├── analysis_data.json   ✓ Website-ready data
    └── your-chart.png       ✓ Chart image
```

### Content Map Check:
- [ ] Entry added to `webapp/public/content-map.json`
- [ ] Title and description are compelling
- [ ] Path points to your analysis folder
- [ ] No syntax errors in JSON

### Local Testing Check:
- [ ] Website starts without errors (`npm run dev`)
- [ ] Your analysis appears in articles list
- [ ] Clicking your analysis loads your page
- [ ] Charts display correctly
- [ ] All links and navigation work

### Code Quality Check:
- [ ] Python script runs without errors
- [ ] All file paths are correct
- [ ] No hardcoded personal information
- [ ] Analysis produces meaningful results

## Understanding the Web Technology

**How the website works behind the scenes:**

### Content Loading Process:
1. User clicks "Articles" 
2. JavaScript loads `content-map.json`
3. Builds list of available analyses
4. User clicks specific analysis
5. Redirects to `article.html?id=your-analysis`
6. Loads your `web-analysis.html` file
7. JavaScript in your HTML loads data and creates charts

### Key Web Technologies:
- **HTML** - Structure and content of your page
- **CSS** - Styling and layout
- **JavaScript** - Interactive behavior and data loading
- **JSON** - Data format for passing information
- **Chart.js** - Library for creating interactive charts

### Data Flow:
```
Python Analysis → JSON Data → Web Page → Interactive Charts
```

## Advanced Customization

**Once you're comfortable with the basics:**

### Custom Chart Types:
- Experiment with different Chart.js chart types
- Add multiple charts to show different aspects of your data
- Create interactive features like data filtering

### Enhanced Styling:
- Customize colors to match your environmental theme
- Add custom CSS for unique visual elements
- Include images or graphics related to your topic

### Data Updates:
- Set up your Python script to automatically fetch new data
- Add timestamps to show when analysis was last updated
- Include confidence intervals or error margins in your charts

## Success Criteria

You're ready to submit when:
- [ ] **Local website shows your analysis** in the articles list
- [ ] **Your analysis page loads** with working charts
- [ ] **All data displays correctly** with proper formatting
- [ ] **Navigation works** both to and from your analysis
- [ ] **Documentation is complete** explaining your work
- [ ] **Code is clean** and follows the established patterns

## What's Next?

After your analysis is working locally, you'll move on to:
1. **Git workflow** - Managing your changes with version control
2. **Creating pull requests** - Submitting your work for review
3. **Code review process** - Collaborating with others to improve your analysis
4. **Deployment** - Seeing your work go live on the real website

**Remember:** This is real web development! You're learning professional skills that apply to any web project, not just this educational platform.