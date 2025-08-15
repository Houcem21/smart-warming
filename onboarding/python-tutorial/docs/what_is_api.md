# What is an API? 🌐

APIs sound scary but they're actually simple!

## What's an API?

**API = Application Programming Interface**

Think of it like a **waiter in a restaurant:**
- You (your program) ask the waiter for something
- The waiter goes to the kitchen (the server)
- The waiter brings you back what you asked for

## In Our Case

**You ask:** "What's the current CO2 level in the UK?"
**API responds:** "245 grams per kWh right now"

## How APIs Work

1. **You send a request** (like ordering food)
2. **API processes it** (kitchen makes the food)  
3. **API sends back data** (waiter brings your order)

## The Carbon Intensity API

**What it does:** Tells you current CO2 emissions from UK electricity
**URL:** `https://api.carbonintensity.org.uk/intensity`
**Cost:** Free!
**Login needed:** Nope!

## What Happens When You Use It

```python
requests.get("https://api.carbonintensity.org.uk/intensity")
```

1. **Your program** asks the API for CO2 data
2. **The API** looks up current UK electricity CO2 levels  
3. **The API** sends back a response with the numbers
4. **Your program** gets the data to use

## What the Data Looks Like

The API sends back something like this:
```json
{
  "data": [
    {
      "intensity": {
        "actual": 245,
        "forecast": 250
      },
      "from": "2024-01-15T12:00Z"
    }
  ]
}
```

**Translation:**
- Current CO2 level: 245 grams per kWh
- Predicted level: 250 grams per kWh
- Time: January 15, 2024 at 12:00 PM

## Why Use APIs?

**Get live data:** Real-time information, not old numbers
**Save time:** Don't have to collect data yourself
**Professional:** Use the same data sources as big companies

## Other Examples of APIs

- **Weather API:** "What's the temperature in Paris?"
- **News API:** "Give me today's headlines"
- **Stock API:** "What's Apple's stock price?"
- **Social Media APIs:** "Show me recent tweets about cats"

## In Your Demo

Your Python code:
1. **Asks** the Carbon Intensity API for current CO2 data
2. **Receives** the response with numbers
3. **Extracts** the actual CO2 level (245)
4. **Uses** that number to make your chart

## Don't Worry About the Details

You don't need to understand how the API works internally.

Just like you don't need to understand how a restaurant kitchen works to order food!

## Ready to Use APIs?

Go to [Python for Complete Beginners](python_basics.md) to see how to use the Carbon Intensity API in your demo!