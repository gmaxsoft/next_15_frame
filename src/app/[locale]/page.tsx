// src/app/page.tsx
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server'; // Poprawny import dla metadanych

export async function generateMetadata({ params }: { params: { locale: string } }) {

  const resolvedParams = await params;
  const { locale } = resolvedParams;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  const baseURL = 'https://www.maxsoft.pl'; // Użyj swojej domeny

  return {
    title: t('homeTitle'),
    description: t('homeDescription'),
    openGraph: {
      title: t('ogTitle'),
      description: t('ogDescription'),
      url: `${baseURL}/${locale === 'pl' ? '' : locale}`,
      siteName: t('ogSiteName'),
      images: [
        {
          url: `${baseURL}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: t('ogTitle'),
        },
      ],
      type: 'website',
    },
    alternates: {
      canonical: `${baseURL}/${locale === 'pl' ? '' : locale}/`,
    },
  };
}

export default function Home() {

  const t = useTranslations('StartPage');

  return (
    <main>
      <h1>{t('title')}</h1>
      <p>{t('slogan')}</p>
    </main>
  );
}
