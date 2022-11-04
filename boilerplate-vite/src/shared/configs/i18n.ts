import LanguageDetector from 'i18next-browser-languagedetector';
import en from '@/assets/locales/en/common.json';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ko from '@/assets/locales/ko/common.json';

const resources = {
  en: { common: en },
  ko: { common: ko },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: {
      default: ['ko', 'en'],
    },
    resources,
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },
  });
export default i18n;
