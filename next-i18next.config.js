const path = require('path');

module.exports = {
  i18n: {
    browserLanguageDetection: false,
    defaultLocale: 'bg',
    locales: ['bg', 'en'],
    localePath: path.resolve('./public/static/locales'),
    backend: {
      loadPath: `${process.env.APP_BASE_PATH}/static/locales/{{lng}}/{{ns}}.json`,
    },
    // debug: true,
    reloadOnPrerender: true,
    react: {
      useSuspense: true,
      bindI18n: 'languageChanged',
    },
  },
};
