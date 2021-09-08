import I18n from 'i18n-js';
import * as RnLocalize from 'react-native-localize';
import { I18nManager } from 'react-native';
import en from './en';
import tr from './tr';

const locales = RnLocalize.getLocales(); //cihazın tercih edilen dil listesini getiriyor.

console.log("locales",locales);

I18n.locale = locales[0].languageTag;

export const isRtl = locales[0].isRTL;

I18nManager.forceRTL = isRtl;

I18n.fallbacks = true; // belirtilen dile ait kayıt yoksa bir sonraki dilden çevirir.

I18n.locales.no = "tr"; // istenilen dil bulunmadığında türkçeyi kullan

I18n.translations = {
    tr,
    en,
};

export default I18n; 

