// The profile menu can initialize before the theme's jQuery bundle is loaded.
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.author__urls-wrapper button');

  function closeMenus() {
    document.querySelectorAll('.author__urls').forEach(function (menu) {
      menu.classList.remove('is--visible');
    });
    buttons.forEach(function (button) {
      button.classList.remove('open');
      button.setAttribute('aria-expanded', 'false');
    });
  }

  buttons.forEach(function (button) {
    button.setAttribute('aria-expanded', 'false');
    button.addEventListener('click', function (event) {
      event.preventDefault();
      // Capture prevents the theme's legacy click handler from toggling twice.
      event.stopImmediatePropagation();
      const menu = button.closest('.author__urls-wrapper').querySelector('.author__urls');
      if (!menu) return;
      const wasOpen = menu.classList.contains('is--visible');
      closeMenus();
      if (!wasOpen) {
        menu.classList.add('is--visible');
        button.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
      }
    }, true);
  });

  document.addEventListener('click', function (event) {
    if (!event.target.closest('.author__urls-wrapper')) closeMenus();
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') closeMenus();
  });
});
