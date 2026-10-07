(function () {
  'use strict';

  var root = document.documentElement;
  var body = document.body;

  // ---------- Idioma ----------
  var langButtons = document.querySelectorAll('[data-set-lang]');

  function setLang(lang) {
    root.lang = lang;
    root.dataset.lang = lang;
    var title = body.getAttribute('data-title-' + lang);
    if (title) document.title = title;
    langButtons.forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-set-lang') === lang ? 'true' : 'false');
    });
    try { localStorage.setItem('pp-lang', lang); } catch (e) {}
  }

  langButtons.forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-set-lang')); });
  });
  setLang(root.dataset.lang || 'es');

  // ---------- Borde de la barra al scrollear ----------
  var nav = document.getElementById('nav');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('is-scrolled', window.scrollY > 4); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ---------- Copiar email ----------
  var copy = document.getElementById('copy');
  if (copy) {
    copy.addEventListener('click', function () {
      if (!navigator.clipboard) return;
      navigator.clipboard.writeText(copy.getAttribute('data-email')).then(function () {
        var original = copy.innerHTML;
        copy.textContent = root.dataset.lang === 'en' ? 'Copied ✓' : 'Copiado ✓';
        setTimeout(function () { copy.innerHTML = original; }, 1600);
      }, function () {});
    });
  }
})();
