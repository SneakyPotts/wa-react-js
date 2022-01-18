import {CHANGE_COUNT_DECR, CHANGE_COUNT_INC, CHANGE_COUNT_VALUE} from '../types';

export const changeCountInc = payload => {
  return {
    type: CHANGE_COUNT_INC,
    payload,
  }
}
export const changeCountDecr = payload => {
  return {
    type: CHANGE_COUNT_DECR,
    payload,
  }
}
export const incCountFor = payload => {
  return {
    type: CHANGE_COUNT_VALUE,
    payload,
  }
}