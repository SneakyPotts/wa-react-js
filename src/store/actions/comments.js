import {GET_COMMENTS, GET_COMMENTS_ERROR, GET_COMMENTS_LOADING} from "../types";

export const getComments = payload => {
  return {
    type: GET_COMMENTS,
    payload,
  }
}
export const getCommentsLoading = payload => {
  return {
    type: GET_COMMENTS_LOADING,
    payload,
  }
}
export const getCommentsError = payload => {
  return {
    type: GET_COMMENTS_ERROR,
    payload,
  }
}