import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import Backend from 'i18next-http-backend';

import fa from '/public/locales/fa/translation.json';
import en from '/public/locales/en/translation.json';

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {translation: en},
            fa: {translation: fa},
        },
    });

export default i18n;