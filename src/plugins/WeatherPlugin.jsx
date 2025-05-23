import axios from "axios";

const API_KEY = "ADD API Here" 
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    const { main, weather } = response.data;
    return `🌤️ Weather in ${city}: ${weather[0].description}, Temp: ${main.temp}°C`;
  } catch (error) {
    return "❌ Could not fetch weather data. Check city name!";
  }
};
