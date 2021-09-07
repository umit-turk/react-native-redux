import {TOGGLE_LOADER, HIDE_LOADER }from './actionTypes'


//loader açar
export function toggleLoader(){
    return {
        type: TOGGLE_LOADER,
    }
}

//loader kapatır.
export function hideLoader(){
    return {
        type: HIDE_LOADER
    }
}

//sistemin temasını set eder.
export function setTheme(payload){
    return {
        type: SET_THEME,
        payload,
    }
}
