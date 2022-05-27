import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { TRANSLATION_KZ } from './locales/kz';
import { TRANSLATION_RU } from './locales/ru';

const resources = {
  kz: {
    translation: TRANSLATION_KZ,
  },
  ru: {
    translation: TRANSLATION_RU,
  },
};

const defaultLanguage = localStorage.getItem('activeLanguage');

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: defaultLanguage || 'ru',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
