# Simple WeatherApp

This is a really simple implementation of the [OpenWeatherMap](https://openweathermap.org/) API. This is a improved version of what I used to have since I wanted to improve the code and implement some small details such as a "loading" phase.

# Test it locally

Clone the repository and install the dependencies.

```bash
# Yarn
yarn install

# npm
npm install
```

Once you have installed them, you will have to add your own API key which you can get for free at [OpenWeatherMap](https://openweathermap.org/). If you already have one, just edit the **Search** component in **_src/Components/Search/_** and replace `{process.env.REACT_APP_API_KEY}` with it.

# Live demo

You can see it live [here](https://daniel-ulises.github.io/weather-app).
