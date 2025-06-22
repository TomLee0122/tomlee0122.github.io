// This script is for the button of "back to top".
// -----------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    let lastScrollY = window.scrollY;
    const THRESHOLD = 400;
    const HIDE_DELAY = 2500;
    let hideTimeout = null;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const deltaY = Math.abs(currentScrollY - lastScrollY);

        if (deltaY > THRESHOLD) {
            btn.style.display = 'block';

            if (hideTimeout) clearTimeout(hideTimeout);
            hideTimeout = setTimeout(() => {
                btn.style.display = 'none';
            }, HIDE_DELAY);

            lastScrollY = currentScrollY;
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

