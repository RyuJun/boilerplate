import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from '@/locales/en/common.json';
import ko from '@/locales/ko/common.json';

const resources = {
  en: { common: en },
  ko: { common: ko },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    interpolation: { escapeValue: false },
    detection: {
      order: ['cookie'],
      lookupCookie: 'i18next',
    },
  });
export default i18n;
