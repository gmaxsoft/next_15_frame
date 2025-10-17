// src/app/uslugi/page.tsx

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pełen Zakres Usług: Strony, Aplikacje, CMS, CRM, ERP, SEO | Zielona Góra',
  description: 'Kompleksowe usługi webowe, w tym projektowanie stron i sklepów internetowych, tworzenie aplikacji webowych, wdrożenia systemów CMS/CRM/ERP oraz profesjonalne pozycjonowanie (SEO).',
  alternates: {
    canonical: 'https://www.maxsoft.pl/uslugi',
  },
};

export default function UslugiPage() {
  return (
    <main>
      <h1>Nasze Usługi</h1>
      <p>Oferujemy szeroki wachlarz profesjonalnych usług.</p>
    </main>
  );
}