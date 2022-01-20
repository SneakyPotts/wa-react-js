import {combineReducers} from "redux";
import {testReducer} from "./test";
import {commentsReducer} from "./comments";

export default combineReducers({
  test: testReducer,
  comments: commentsReducer
})