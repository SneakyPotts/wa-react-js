import {CHANGE_TEST, GET_USERS, GET_USERS_ERROR, GET_USERS_LOADING} from "../types";

export const chengeTest = payload => {
  return {
    type: CHANGE_TEST,
    payload,
  }
}

export const getUsers = payload => {
  return {
    type: GET_USERS,
    payload,
  }
}
export const getUsersLoading = payload => {
  return {
    type: GET_USERS_LOADING,
    payload,
  }
}
export const getUsersError = payload => {
  return {
    type: GET_USERS_ERROR,
    payload,
  }
}