document.addEventListener('DOMContentLoaded', function adjustHeroHeight() {
    const masthead = document.querySelector('.masthead');
    const hero = document.querySelector('.my_hero');

    if (!masthead || !hero) return;

    const mastheadHeight = masthead.offsetHeight;
    const viewportHeight = window.innerHeight;

    // 设置 .my_hero 高度为“屏幕高度减去 masthead 的高度”
    hero.style.height = (viewportHeight - mastheadHeight) + 'px';

    window.addEventListener('load', adjustHeroHeight);
    window.addEventListener('resize', adjustHeroHeight);
});

// document.addEventListener('DOMContentLoaded', function () {
//   function updateHeroBackground() {
//     const hero = document.querySelector('.my_hero');
//     if (!hero) return;

//     const lightImg = hero.getAttribute('data-bg-light');
//     const darkImg = hero.getAttribute('data-bg-dark');

//     const isDarkMode = document.body.classList.contains('dark-mode');
//     const bg = isDarkMode ? darkImg : lightImg;
//     if (bg) {
//       hero.style.backgroundImage = `url('${bg}')`;
//     }
//   }

//   // 页面加载时设定背景
//   updateHeroBackground();

//   // 按钮点击后更新背景
//   const toggleBtn = document.getElementById('dark-mode-toggle');
//   if (toggleBtn) {
//     toggleBtn.addEventListener('click', function () {
//       setTimeout(updateHeroBackground, 50); // 延迟确保 class 已切换
//     });
//   }
// });
