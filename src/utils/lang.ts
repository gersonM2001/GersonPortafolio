import type { AstroGlobal } from 'astro';

export function getLangFromUrlOrStorage(Astro: AstroGlobal) {
  const urlLang = Astro.params?.lang;

  if (urlLang === 'es' || urlLang === 'en') {
    return urlLang;
  }

  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('lang');
    if (stored === 'es' || stored === 'en') {
      return stored;
    }
  }

  return 'es';
}
