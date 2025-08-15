# Creating Your Environmental Analysis

This guide walks you through creating a complete environmental data analysis from start to finish. By the end, you'll have a Python script that gets real environmental data and creates professional charts.

## What You're Building

A Python program that:
1. **Fetches real environmental data** from an API
2. **Processes and cleans the data** 
3. **Creates professional charts**
4. **Saves results** in a format the website can use

## Step 1: Set Up Your Workspace

**Create your analysis folder:**
1. Go to `onboarding/python-tutorial/demo/`
2. Create a file called `my_analysis.py`
3. Create a file called `my_notes.md`
4. The `output/` folder is already there for your results

**Open your text editor** (VS Code, Atom, or even Notepad) and open the `demo` folder.

## Step 2: Choose Your Environmental Topic

Pick something that interests you:
- **Climate data** - Temperature trends, rainfall patterns
- **Air quality** - CO2 levels, pollution measurements  
- **Energy data** - Renewable energy usage, consumption patterns
- **Ocean data** - Sea level rise, ocean temperature
- **Weather patterns** - Storm frequency, seasonal changes

**Write your choice in `my_notes.md`** - this helps you stay focused.

## Step 3: Write Your First Python Code

**Start simple** - make Python say hello:

Open `my_analysis.py` and start with basic structure. The key concepts you need to understand:

### Print Statements
Python can display messages to help you see what's happening.

### Variables  
You can store data (numbers, text, lists) in named containers.

### Lists
Environmental data often comes as lists of numbers (temperatures, dates, etc.).

### Libraries
Pre-built tools that help with specific tasks:
- `requests` - Gets data from the internet
- `matplotlib` - Makes charts and graphs
- `pandas` - Organizes and analyzes data
- `json` - Handles data formats

**Your first task:** Write a program that prints a message about your chosen environmental topic.

## Step 4: Get Real Environmental Data

### Understanding APIs
APIs are like websites for computers - they provide data in a structured format. For environmental data, you can use:

**Free environmental data sources:**
- **OpenWeatherMap** - Current and historical weather data
- **World Bank Climate Data** - Global climate statistics  
- **NASA APIs** - Satellite environmental data
- **Our World in Data** - Environmental datasets

### Basic Data Fetching Process
1. **Make a request** to the API
2. **Receive the data** (usually in JSON format)
3. **Extract the parts you need**
4. **Handle errors** if something goes wrong

**Your task:** Choose a data source and get some real environmental data into your Python program.

## Step 5: Create Your First Chart

### Chart Types for Environmental Data
- **Line charts** - Show trends over time (temperature changes)
- **Bar charts** - Compare different categories (energy sources)
- **Scatter plots** - Show relationships (CO2 vs temperature)
- **Area charts** - Show cumulative data (total emissions)

### Making Charts with Matplotlib
The basic process:
1. **Prepare your data** - organize it into lists
2. **Create the chart** - choose type and add data
3. **Customize appearance** - titles, labels, colors
4. **Save the chart** - as a PNG file you can share

**Your task:** Create a chart showing your environmental data over time or across categories.

## Step 6: Save Data for the Website

### JSON Format
The website needs your analysis results in a specific format called JSON. It looks like this:

```
{
  "data": [
    {"impact_type": "Temperature Rise", "percentage": 12, "color": "#ff4444"},
    {"impact_type": "Sea Level", "percentage": 8, "color": "#ff8800"}
  ],
  "statistics": {
    "total_impact_points": 20,
    "highest_impact": "Temperature Rise",
    "methodology": "Analysis of NASA climate data 2020-2024"
  }
}
```

### Creating Your JSON Output
1. **Organize your results** into the format above
2. **Use meaningful names** for your impact types
3. **Include your methodology** - how you did the analysis
4. **Save to the output folder** as `analysis_data.json`

**Your task:** Convert your analysis results into the JSON format and save it.

## Step 7: Test Everything Works

**Run your complete analysis:**
1. **Execute your Python script** - it should run without errors
2. **Check the output folder** - you should have:
   - A PNG chart file
   - A JSON data file
3. **Look at your results** - do they make sense?
4. **Update your notes** - what did you learn?

### Common Issues and Solutions

**"Module not found" errors:**
- Install missing libraries with `pip install [library-name]`

**"File not found" errors:**
- Check your file paths are correct
- Make sure you're in the right directory

**"API key required" errors:**
- Some data sources need free registration
- Read the API documentation for setup instructions

**Empty or weird data:**
- Check your data processing logic
- Print intermediate results to see what's happening

## Step 8: Document Your Work

**Update your `my_notes.md` file with:**
- What environmental issue you analyzed
- What data sources you used
- What you discovered from your analysis
- What was challenging and how you solved it
- What you want to explore next

### Example Documentation Structure:
```markdown
# My Climate Data Analysis

## Topic
I analyzed temperature trends in major cities over the past 5 years.

## Data Source
Used OpenWeatherMap API to get historical temperature data.

## Key Findings
- Average temperatures increased by 1.2°C
- Summer heat waves are lasting longer
- Winter temperatures are more variable

## Challenges
- Had to clean messy data with missing values
- Learning JSON format took time
- Choosing the right chart type was tricky

## Next Steps
I want to analyze rainfall patterns and see if they correlate with temperature changes.
```

## Success Checklist

You're ready for the next step when you have:
- [ ] **Working Python script** that runs without errors
- [ ] **Real environmental data** from an API or dataset
- [ ] **Professional chart** saved as PNG file
- [ ] **JSON data file** in the correct format for the website
- [ ] **Documentation** of your process and findings
- [ ] **Understanding** of what each part of your code does

## What's Next?

Once you complete your analysis, you're ready to move on to the Git tutorial where you'll learn how to:
- Add your analysis to the website
- See it running locally
- Share it with the world through GitHub

**Remember:** The goal isn't perfect code - it's learning how to analyze environmental data and communicate your findings effectively!

## Additional Resources

If you get stuck or want to learn more:
- **Python basics:** [Automate the Boring Stuff](https://automatetheboringstuff.com/)
- **Data analysis:** [Pandas documentation](https://pandas.pydata.org/docs/)
- **Matplotlib charts:** [Matplotlib gallery](https://matplotlib.org/stable/gallery/)
- **JSON format:** [Working with JSON in Python](https://realpython.com/python-json/)
- **Environmental APIs:** [List of climate data APIs](https://github.com/public-apis/public-apis#environment)