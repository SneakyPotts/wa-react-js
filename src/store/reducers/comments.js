import {GET_COMMENTS, GET_COMMENTS_ERROR, GET_COMMENTS_LOADING} from "../types";

const initialState = {
  comments: [],
  isLoading: false,
  error: '',
}
export const commentsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: payload,
      }
    case GET_COMMENTS_LOADING:
      return {
        ...state,
        isLoading: payload,
      }
    case GET_COMMENTS_ERROR:
      return {
        ...state,
        error: payload,
      }
    default:
      return state;
  }
}