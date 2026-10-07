(function () {
  'use strict';

  var root = document.documentElement;
  var titles = { es: 'Matías Rodríguez — CV', en: 'Matías Rodríguez — Resume' };

  // ---------- Idioma ----------
  var langButtons = document.querySelectorAll('[data-set-lang]');

  function setLang(lang) {
    root.lang = lang;
    root.dataset.lang = lang;
    document.title = titles[lang];
    langButtons.forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-set-lang') === lang ? 'true' : 'false');
    });
    try { localStorage.setItem('pp-lang', lang); } catch (e) {}
  }

  langButtons.forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-set-lang')); });
  });
  setLang(root.dataset.lang || 'es');

  // ---------- Imprimir ----------
  document.getElementById('print').addEventListener('click', function () { window.print(); });

  // ---------- Copiar email ----------
  var copy = document.getElementById('copy');
  copy.addEventListener('click', function () {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(copy.getAttribute('data-email')).then(function () {
      var done = root.dataset.lang === 'en' ? 'Copied' : 'Copiado';
      var original = copy.innerHTML;
      copy.textContent = done + ' ✓';
      setTimeout(function () { copy.innerHTML = original; }, 1600);
    }, function () {});
  });
})();
