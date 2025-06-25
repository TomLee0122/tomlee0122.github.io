// Dark mode toggle functionality

// document.addEventListener('DOMContentLoaded', function () {
//     const toggle = document.getElementById('dark-mode-toggle');
//     const prefersDark = localStorage.getItem('darkMode') === 'true';

//     if (prefersDark) {
//         document.body.classList.add('dark-mode');
//     }

//     toggle.addEventListener('click', function () {
//         document.body.classList.toggle('dark-mode');
//         const isDark = document.body.classList.contains('dark-mode');
//         localStorage.setItem('darkMode', isDark);
//         toggle.textContent = isDark ? '☀️' : '🌙';
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedPref = localStorage.getItem('darkMode');

  if (savedPref === null) {
    // 用户没设置过，则跟随系统偏好
    if (prefersDarkScheme) {
      document.body.classList.add('dark-mode');
      document.getElementById('dark-mode-toggle').textContent = '☀️';
    }
  } else if (savedPref === 'true') {
    document.body.classList.add('dark-mode');
    document.getElementById('dark-mode-toggle').textContent = '☀️';
  } else {
    document.body.classList.remove('dark-mode');
    document.getElementById('dark-mode-toggle').textContent = '🌙';
  }

  // 手动切换按钮
  document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    document.getElementById('dark-mode-toggle').textContent = isDark ? '☀️' : '🌙';
  });
});
