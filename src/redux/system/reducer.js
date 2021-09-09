import {
  TOGGLE_LOADER,
  HIDE_LOADER,
  USER_LOGOUT,
  SET_USER,
  SET_THEME,
  SET_LANGUAGE,
} from './actionTypes';

const initialState = {
  loading: false,
  userInfo: {}, // login olmuş kişinin bilgilerini tutacağız
  token: '',
  language: 'tr',
  isDarkMode: false,
  isLogin: false,
};

export function systemReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_LOADER:
      return {...state, loading: true};
    case HIDE_LOADER:
      return {...state, loading: false};
    case SET_USER:
      console.log('setuser reducer', action.payload);
      return {...state, isLogin: true, userInfo: action.payload};
    case USER_LOGOUT:
      return {
        ...state,
        userInfo: {},
        token: '',
        language: 'tr',
        loading: false,
        isLogin: false,
      };
    case SET_THEME:
      console.log("settheme", action.payload)
      return {...state, isDarkMode: action.payload};
    case SET_LANGUAGE:
      console.log("setlanguage", action)
      return {...state, language: action.payload};
    default:
      return state;
  }
}
