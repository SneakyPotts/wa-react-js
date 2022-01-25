import {GET_WEATHER, GET_WEATHER_ERROR} from "../types";

const initialState = {
  data: [],
  error: '',
}

export const WeatherReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_WEATHER:
      return {
        ...state,
        data: payload
      }
    case GET_WEATHER_ERROR:
      return {
        ...state,
        error: payload
      }
    default:
      return state
  }
}