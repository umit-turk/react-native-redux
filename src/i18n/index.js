import I18n from 'i18n-js';
import * as RnLocalize from 'react-native-localize';
import { I18nManager } from 'react-native';
import en from './en';
import tr from './tr';


const translations = {
    tr,
    en,
};
const locales = RnLocalize.getLocales(); //cihazın tercih edilen dil listesini getiriyor.

I18n.locale = locales[0].languageTag;

export const changeLanguage = (language) => {
    console.log("changeLanguage i18n", language )
    I18n.locale = language
}


console.log("locales",locales);



export const isRtl = locales[0].isRTL;

I18nManager.forceRTL = isRtl;

I18n.fallbacks = true; // belirtilen dile ait kayıt yoksa bir sonraki dilden çevirir.

I18n.locales.no = "tr"; // istenilen dil bulunmadığında türkçeyi kullan

I18n.translations = translations;

export default I18n; 

