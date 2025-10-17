// src/app/page.tsx
import { redirect } from 'next/navigation';

export default function Home() {
  // Przekieruj na domyślny język (pl) bez prefiksu
  redirect('/pl');
}