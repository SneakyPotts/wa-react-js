import {SET_AUTH} from "../types";

export const setAuthRedux = payload => {
  return {
    type: SET_AUTH,
    payload,
  }
}