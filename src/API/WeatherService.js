const WEATHER_URL = process.env.REACT_APP_WEATHER_URL;
const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

export class WeatherService {
  static getWeatherData (cityName) {
    return fetch(`${WEATHER_URL}weather?q=${cityName}&appid=${WEATHER_API_KEY}`)
  }
}