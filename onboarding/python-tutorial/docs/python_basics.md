# Python for Complete Beginners 🐍

Welcome! Let's build your CO2 demo step by step.

## Step 1: Your First Python Code (5 minutes)

1. Go to the demo folder
2. Create a file called `my_demo.py` in the demo folder
3. Type this exact code in your file:
```python
# My first Python program!
print("Hello, I'm learning Python!")
print("I'm going to analyze environmental data!")
```
4. Save the file
5. Open terminal/command prompt in demo folder and run: `python my_demo.py`
6. You should see your messages appear in the terminal

**Success:** You should see both messages printed out

## Step 2: Get Data from the Internet (15 minutes)

Now let's get real environmental data! Replace your code with this:

```python
# Import tools we need
import requests
import json

# Get CO2 data from UK Carbon Intensity API
print("Getting CO2 data from the internet...")
response = requests.get("https://api.carbonintensity.org.uk/intensity")

# Convert response to data we can use
data = response.json()
co2_level = data['data'][0]['intensity']['actual']

print(f"Current CO2 intensity: {co2_level} gCO2/kWh")
```

Run this and you should see the current CO2 level!

**Success:** You should see a number like "Current CO2 intensity: 245 gCO2/kWh"

## Step 3: Make a Chart (15 minutes)

Now let's create a visual chart! Replace your code with this complete version:

```python
# Import tools we need
import requests
import json
import matplotlib.pyplot as plt
import os

# Get CO2 data from UK Carbon Intensity API
print("Getting CO2 data from the internet...")
response = requests.get("https://api.carbonintensity.org.uk/intensity")

# Convert response to data we can use
data = response.json()
co2_level = data['data'][0]['intensity']['actual']

print(f"Current CO2 intensity: {co2_level} gCO2/kWh")

# Create a simple bar chart
plt.figure(figsize=(8, 6))
plt.bar(['Current CO2 Level'], [co2_level], color='red')
plt.title('UK Carbon Intensity Right Now')
plt.ylabel('CO2 (gCO2/kWh)')
plt.ylim(0, max(500, co2_level + 50))

# Save chart to output folder
plt.savefig('output/my_chart.png')
plt.close()

print("Chart saved to: output/my_chart.png")
```

**Success:** You should see "Chart saved to: output/my_chart.png" and find a PNG file in your output folder! 

## Step 4: Save Data File (10 minutes)

Finally, let's save our data for the website to use! Here's your complete final program:

```python
# Import tools we need
import requests
import json
import matplotlib.pyplot as plt
import os

# Get CO2 data from UK Carbon Intensity API
print("Getting CO2 data from the internet...")
response = requests.get("https://api.carbonintensity.org.uk/intensity")

# Convert response to data we can use
data = response.json()
co2_level = data['data'][0]['intensity']['actual']

print(f"Current CO2 intensity: {co2_level} gCO2/kWh")

# Create a simple bar chart
plt.figure(figsize=(8, 6))
plt.bar(['Current CO2 Level'], [co2_level], color='red')
plt.title('UK Carbon Intensity Right Now')
plt.ylabel('CO2 (gCO2/kWh)')
plt.ylim(0, max(500, co2_level + 50))

# Save chart to output folder
plt.savefig('output/my_chart.png')
plt.close()

print("Chart saved to: output/my_chart.png")

# Save data as JSON file for website to use
data_to_save = {
    'co2_level': co2_level,
    'timestamp': data['data'][0]['from'],
    'message': f'CO2 intensity is {co2_level} gCO2/kWh'
}

with open('output/co2_data.json', 'w') as f:
    json.dump(data_to_save, f, indent=2)

print("Data saved to: output/co2_data.json")
print("🎉 Your analysis is complete!")
```

**Success:** You should see both success messages and have 2 files in your output folder!

## Test Your Demo

1. Save your file in the demo folder
2. Open terminal in the demo folder
3. Run: `python my_demo.py`
4. Check the output folder - should have 2 new files!

## Key Concepts You'll Learn

- **Import statements:** How to get tools
- **API requests:** How to ask internet for data  
- **Data extraction:** How to get numbers from responses
- **Chart creation:** How to make visual graphs
- **File operations:** How to save your work

## Getting Errors?

Check [Common Problems & Solutions](common_errors.md) for help with:
- Missing modules
- File not found errors
- Network connection issues
- Syntax errors

## Learning Resources

- **Python.org tutorial:** Official beginner guide
- **YouTube:** Search "Python for beginners"
- **FreeCodeCamp:** Free Python course
- **Ask for help:** Create an issue on GitHub

## Success Criteria

You're done when:
- Your script runs without red error messages
- You have `my_chart.png` in output folder
- You have `co2_data.json` in output folder  
- You understand what each part of your code does

## Congratulations! 🎉

When you finish, you'll have:
- ✅ Written your first Python program
- ✅ Connected to a real API
- ✅ Created a data visualization
- ✅ Built something that integrates with our project

**You're a programmer now!**