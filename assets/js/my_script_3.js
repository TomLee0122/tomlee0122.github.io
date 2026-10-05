// Explicit light/dark choices and a live system preference share the existing dark-mode styles.
(function () {
  const picker = document.querySelector('.theme-picker');
  const toggle = document.getElementById('dark-mode-toggle');
  const menu = document.getElementById('theme-menu');
  if (!picker || !toggle || !menu) return;

  const options = Array.from(menu.querySelectorAll('[data-theme-mode]'));
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const labels = { light: 'Light', dark: 'Dark', system: 'Follow system' };
  const isMode = (value) => Object.prototype.hasOwnProperty.call(labels, value);

  function readPreference() {
    try {
      const stored = localStorage.getItem('themeMode');
      if (isMode(stored)) return stored;
      // Keep choices made with the previous two-mode control.
      const legacy = localStorage.getItem('darkMode');
      if (legacy === 'true') return 'dark';
      if (legacy === 'false') return 'light';
    } catch (error) {
      // Selecting a theme still works when browser storage is unavailable.
    }
    return 'system';
  }

  let mode = readPreference();

  function applyTheme() {
    const isDark = mode === 'dark' || (mode === 'system' && systemTheme.matches);
    document.body.classList.toggle('dark-mode', isDark);
    document.body.dataset.themeMode = mode;
    document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
    picker.dataset.themeMode = mode;
    const label = 'Theme: ' + labels[mode];
    toggle.setAttribute('aria-label', label);
    toggle.title = label;
    options.forEach(function (option) {
      option.setAttribute('aria-checked', String(option.dataset.themeMode === mode));
    });
  }

  function savePreference() {
    try {
      localStorage.setItem('themeMode', mode);
      // Earlier versions of the website can also interpret the saved choice.
      if (mode === 'system') localStorage.removeItem('darkMode');
      else localStorage.setItem('darkMode', String(mode === 'dark'));
    } catch (error) {
      // The selected mode remains available for the current page.
    }
  }

  function closeMenu(restoreFocus) {
    menu.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    if (restoreFocus) toggle.focus();
  }

  function openMenu(option) {
    menu.hidden = false;
    toggle.setAttribute('aria-expanded', 'true');
    (option || options.find((item) => item.dataset.themeMode === mode)).focus();
  }

  // This script runs immediately after the masthead, before the article is parsed.
  applyTheme();

  toggle.addEventListener('click', function () {
    if (menu.hidden) openMenu();
    else closeMenu(false);
  });

  toggle.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      openMenu(event.key === 'ArrowDown' ? options[0] : options[options.length - 1]);
    }
  });

  menu.addEventListener('click', function (event) {
    const option = event.target.closest('.theme-picker__option');
    if (!option || !menu.contains(option)) return;
    mode = option.dataset.themeMode;
    applyTheme();
    savePreference();
    closeMenu(true);
  });

  menu.addEventListener('keydown', function (event) {
    let next;
    const index = options.indexOf(document.activeElement);
    if (event.key === 'ArrowDown') next = (index + 1) % options.length;
    if (event.key === 'ArrowUp') next = (index + options.length - 1) % options.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = options.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      options[next].focus();
    }
    if (event.key === 'Tab') closeMenu(false);
  });

  document.addEventListener('click', function (event) {
    if (!picker.contains(event.target)) closeMenu(false);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !menu.hidden) {
      event.preventDefault();
      closeMenu(true);
    }
  });

  function followSystem() {
    if (mode === 'system') applyTheme();
  }
  if (systemTheme.addEventListener) systemTheme.addEventListener('change', followSystem);
  else systemTheme.addListener(followSystem);

  window.addEventListener('storage', function (event) {
    if (event.key === 'themeMode' || event.key === null) {
      mode = readPreference();
      applyTheme();
    }
  });
})();
