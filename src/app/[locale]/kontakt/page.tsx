// src/app/kontakt/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kontakt - Projektowanie Stron Zielona Góra, Sulechów, Świebodzin',
  description: 'Skontaktuj się z nami w sprawie projektowania stron WWW, sklepów internetowych, aplikacji webowych i usług pozycjonowania w Zielonej Górze i okolicach.',
  alternates: {
    canonical: 'https://www.maxsoft.pl/kontakt',
  },
};

export default function KontaktPage() {
  return (
    <main>
      <h1>Kontakt</h1>
      <p>Dane kontaktowe i formularz.</p>
    </main>
  );
}