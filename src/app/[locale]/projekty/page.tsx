// src/app/projekty/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nasze Realizacje: Sklepy, Aplikacje i Strony WWW | Zielona Góra',
  description: 'Przegląd zrealizowanych projektów: od nowoczesnych stron internetowych i sklepów e-commerce po zaawansowane aplikacje webowe i systemy klasy biznesowej.',
  alternates: {
    canonical: 'https://www.maxsoft.pl/projekty',
  },
};

export default function ProjektyPage() {
  return (
    <main>
      <h1>Nasze Projekty</h1>
      <p>Zapraszamy do zapoznania się z naszym portfolio.</p>
    </main>
  );
}