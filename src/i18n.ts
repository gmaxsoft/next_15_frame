// src/i18n.ts
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  console.log('i18n config loaded for locale:', locale);
  const resolvedLocale = locale ?? 'pl';

  let messages;
  if (resolvedLocale === 'pl') {
    messages = (await import('./messages/pl.json')).default;
  } else if (resolvedLocale === 'en') {
    messages = (await import('./messages/en.json')).default;
  } else {
    messages = (await import('./messages/pl.json')).default;
  }

  return {
    locale: resolvedLocale,
    messages
  };
});
