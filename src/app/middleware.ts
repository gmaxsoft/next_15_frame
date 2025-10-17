import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // Lista dostępnych języków
  locales: ['pl', 'en'],

  // Język domyślny
  defaultLocale: 'pl',

});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
