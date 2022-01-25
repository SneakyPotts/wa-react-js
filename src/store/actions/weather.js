import {GET_WEATHER, GET_WEATHER_ERROR} from "../types";

export const getWeather = payload => {
  return {
    type: GET_WEATHER,
    payload,
  }
}
export const getWeatherError = payload => {
  return {
    type: GET_WEATHER_ERROR,
    payload,
  }
}