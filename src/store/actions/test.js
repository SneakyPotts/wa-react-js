import {CHANGE_TEST} from "../types";

export const chengeTest = payload => {
  return {
    type: CHANGE_TEST,
    payload,
  }
}