import {combineReducers} from "redux";
import {testReducer} from "./test";
import {commentsReducer} from "./comments";
import {WeatherReducer} from "./weather";

export default combineReducers({
  test: testReducer,
  comments: commentsReducer,
  weather: WeatherReducer
})