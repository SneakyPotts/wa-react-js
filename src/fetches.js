import {PostService as postService} from "./API/PostService";
import {getUsers, getUsersError, getUsersLoading} from "./store/actions/test";
import {getComments, getCommentsError, getCommentsLoading} from "./store/actions/comments";
import {WeatherService} from "./API/WeatherService";
import {getWeather, getWeatherError} from "./store/actions/weather";

export const fetchUsers = () => async dispatch => {
  dispatch(getUsersLoading(true))
  try {
    const response = await postService.getUsers();
    const data = await response.json();
    dispatch(getUsers(data));
  } catch (error) {
    dispatch(getUsersError(error));
  } finally {
    dispatch(getUsersLoading(false));
  }
}

export const fetchComments = () => async dispatch => {
  dispatch(getCommentsLoading(true))
  try {
    const response = await postService.getComments();
    const data = await response.json();
    dispatch(getComments(data));
  } catch (error) {
    dispatch(getCommentsError(error));
  } finally {
    dispatch(getCommentsLoading(false));
  }
}

export const fetchWeatherInfo = (cityName) => async dispatch => {
  try {
    const response = await WeatherService.getWeatherData(cityName);
    const data = await response.json();
    dispatch(getWeather(data))
  } catch (error) {
    dispatch(getWeatherError(error))
  }
}