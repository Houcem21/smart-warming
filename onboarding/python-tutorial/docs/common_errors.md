# Common Problems & Solutions 🔧

Got a red error message? Don't panic! Here's how to fix common issues.

## "No module named 'requests'"

**What it means:** Python can't find the requests tool  
**How to fix:** Type `pip install requests matplotlib pandas`

## "No module named 'matplotlib'"  

**What it means:** Python can't find the charting tool  
**How to fix:** Type `pip install matplotlib`

## "python: command not found"

**What it means:** Python isn't installed or not in PATH  
**How to fix:** 
- Try `python3` instead of `python`
- Reinstall Python and check "Add to PATH"
- See [How to Install Python](install_python.md)

## "Permission denied"

**What it means:** You don't have permission to install things  
**How to fix:** 
- Windows: Run command prompt as Administrator
- Mac/Linux: Add `sudo` before your command: `sudo pip install requests`

## "No such file or directory"

**What it means:** Python can't find your file  
**How to fix:**
- Make sure you're in the demo folder: `cd data-analysis/demo`
- Check your file is actually called `my_demo.py` and is in the demo folder
- Try the full path: `python /full/path/to/demo/my_demo.py`

## "SyntaxError: invalid syntax"

**What it means:** You typed Python code wrong  
**How to fix:**
- Check you copied the code exactly
- Make sure quotes match: `"hello"` not `"hello'`
- Check your indentation (spaces at start of lines)

## "ConnectionError" or "Network error"

**What it means:** Can't connect to the internet API  
**How to fix:**
- Check your internet connection
- Try running the code again in a few minutes
- The API might be temporarily down

## "KeyError" when getting CO2 data

**What it means:** The API returned different data than expected  
**How to fix:**
- Print the data first to see what you got
- Check if the API structure has changed
- Look at the API documentation again

## "FileNotFoundError" when saving

**What it means:** Python can't create files in the output folder  
**How to fix:**
- Make sure you're running your script from the demo folder (where output/ exists)
- The output folder should be in the same directory as your my_demo.py file
- Check you have write permissions in the demo/output folder

## Chart window opens but doesn't save

**What it means:** matplotlib is showing chart instead of saving  
**How to fix:** Look up how to turn off matplotlib interactive mode

## Still Stuck?

1. **Copy the entire error message**
2. **Search Google:** "python [your error message]"  
3. **Ask for help:** Create an issue with:
   - Your operating system (Windows/Mac/Linux)
   - Python version (`python --version`)
   - Full error message
   - What you were trying to do

## Debugging Tips

**Print everything to see what's happening:**
- Add print statements at each step
- Check response codes from APIs
- Print your data to see what you received

**Check if files are being created:**
- List what's in your output folder
- Verify file paths are correct

Remember: **Every programmer gets errors!** It's part of learning. The important thing is learning how to fix them. 🚀