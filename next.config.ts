
import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

// Ścieżka do Twojego pliku konfiguracyjnego i18n
const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);
