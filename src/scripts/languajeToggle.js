function setupLanguageToggle() {
  const toggle = document.getElementById('languageToggle');
  if (!toggle) return;

  // Detecta idioma actual desde URL
  const parts = window.location.pathname.split('/').filter(Boolean);
  let currentLang = parts[0] === 'en' ? 'en' : 'es';
  toggle.checked = currentLang === 'en';
  localStorage.setItem('lang', currentLang);

  toggle.addEventListener('change', () => {
    const newLang = toggle.checked ? 'en' : 'es';
    localStorage.setItem('lang', newLang);

    if (parts[0] === 'es' || parts[0] === 'en') {
      parts[0] = newLang;
    } else {
      parts.unshift(newLang);
    }

    window.location.href = '/' + parts.join('/');
  });
}

document.addEventListener('astro:page-load', setupLanguageToggle);
document.addEventListener('DOMContentLoaded', setupLanguageToggle);
