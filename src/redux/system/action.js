import {
  TOGGLE_LOADER,
  HIDE_LOADER,
  SET_USER,
  SET_THEME,
  USER_LOGOUT,
} from './actionTypes';

//loader açar
export function toggleLoader() {
  return {
    type: TOGGLE_LOADER,
  };
}

//loader kapatır.
export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

//sistemin temasını set eder.
export function setTheme(payload) {
  return {
    type: SET_THEME,
    payload,
  };
}

// Sisteme login olmusş kişiyi setler
export function setUser(payload) {
  return {type: SET_USER, payload};
}

export function userLogOut() {
  return {
    type: USER_LOGOUT,
  };
}
