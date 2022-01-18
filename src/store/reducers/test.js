import {CHANGE_COUNT_DECR, CHANGE_COUNT_INC, CHANGE_COUNT_VALUE, CHANGE_TEST, SET_AUTH} from "../types";

const initialState = {
  test: null,
  count: 0,
  auth: false,
}

export const testReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case CHANGE_TEST:
      return {
        ...state,
        test: payload,
      }
    case CHANGE_COUNT_INC:
      return {
        ...state,
        count: state.count + 1,
      }
    case CHANGE_COUNT_DECR:
      return {
        ...state,
        count: state.count - 1,
      }
    case CHANGE_COUNT_VALUE:
      return {
        ...state,
        count: state.count + Number(payload),
      }
    case SET_AUTH:
      return {
        ...state,
        auth: payload,
      }
    default:
      return state;
  }
}