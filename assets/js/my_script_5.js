document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.collapse-toggle').forEach(btn => {
    const panelId = btn.getAttribute('aria-controls');
    const panel = document.getElementById(panelId);
    if (!panel) return;

    // const onEnd = (cb) => (ev) => {
    //   // 只处理当前面板自身的 height 过渡
    //   if (ev.target !== panel || ev.propertyName !== 'height') return;
    //   cb();
    //   ev.currentTarget.removeEventListener('transitionend', onEnd(cb)); // 不能这样移除（函数不同）
    // };

    // 用 once + 过滤器，避免重复触发
    const openPanel = () => {
      btn.setAttribute('aria-expanded', 'true');
      // btn.style.backgroundColor = '#c27342';

      // 先显示，再量高度
      panel.hidden = false;
      panel.style.height = '0px';          // 从 0 开始
      const h = panel.scrollHeight;        // 现在能拿到真实高度了
      // 下一帧再触发过渡
      requestAnimationFrame(() => { panel.style.height = h + 'px'; });

      panel.addEventListener('transitionend', function handler(ev) {
        if (ev.target !== panel || ev.propertyName !== 'height') return;
        panel.style.height = 'auto';       // 展开后恢复自适应
        panel.removeEventListener('transitionend', handler);
      });
    };

    const closePanel = () => {
      btn.setAttribute('aria-expanded', 'false');
      //del the btn.style.backgroundColor property
      // btn.style.removeProperty('background-color');

      // 从 auto 回到具体高度，再收起到 0
      const h = panel.scrollHeight;
      panel.style.height = h + 'px';
      requestAnimationFrame(() => { panel.style.height = '0px'; });

      panel.addEventListener('transitionend', function handler(ev) {
        if (ev.target !== panel || ev.propertyName !== 'height') return;
        panel.hidden = true;               // 过渡结束后再真正隐藏
        panel.removeEventListener('transitionend', handler);
      });
    };

    // 初始状态同步（若 HTML 中 aria-expanded="true"）
    if (btn.getAttribute('aria-expanded') === 'true') {
      panel.hidden = false;
      panel.style.height = 'auto';
    }

    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      expanded ? closePanel() : openPanel();
      // 可选：切换按钮文案
    //   btn.textContent = expanded ? '展开更多' : '收起内容';
    });
  });
});
