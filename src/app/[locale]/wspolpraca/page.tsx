// src/app/wspolpraca/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Współpraca B2B i Wycena Projektów Webowych | Zielona Góra',
  description: 'Dowiedz się, jak wygląda proces projektowania i tworzenia stron, sklepów internetowych oraz systemów. Rozpocznij współpracę z ekspertami IT w Zielonej Górze.',
  alternates: {
    canonical: 'https://www.maxsoft.pl/wspolpraca',
  },
};

export default function WspolpracaPage() {
  return (
    <main>
      <h1>Współpraca</h1>
      <p>Szukasz partnera? Skontaktuj się z nami!</p>
    </main>
  );
}