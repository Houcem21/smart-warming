# How to Install Python 🐍

Never installed Python? No worries!

## For Windows

1. **Go to python.org**
2. **Click big yellow "Download Python" button**
3. **Run the downloaded file**
4. **IMPORTANT:** Check "Add Python to PATH" box!
5. **Click "Install Now"**

## For Mac

1. **Go to python.org**
2. **Download Python for macOS**
3. **Open the downloaded file**
4. **Follow the installer**

## For Linux

Open terminal and type:
```bash
sudo apt install python3 python3-pip
```

## Test It Works

1. **Open terminal/command prompt**
2. **Type:** `python --version`
3. **Should see:** `Python 3.something`

If you see `Python 2.something`, try `python3 --version` instead.

## Install Helper Tools

Type this in terminal:
```bash
pip install requests matplotlib pandas
```

If that doesn't work, try:
```bash
pip3 install requests matplotlib pandas
```

## Still Having Problems?

**Windows:** 
- Try "Python from Microsoft Store" instead
- Make sure to restart your computer after installing

**Mac:**
- You might need to use `python3` instead of `python`
- Same with `pip3` instead of `pip`

**Linux:**
- Make sure you have `python3-dev` package: `sudo apt install python3-dev`

## Test Everything

Create a test file called `test.py`:
```python
print("Python is working!")
import requests
import matplotlib.pyplot as plt
print("All tools installed!")
```

Run it: `python test.py`

Should see:
```
Python is working!
All tools installed!
```

## Need More Help?

- **YouTube:** Search "how to install Python on [your operating system]"
- **Ask for help:** Create an issue on GitHub
- **Python.org:** Has detailed installation guides