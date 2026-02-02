document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.Warning').forEach(warning => {
    const id = warning.dataset.warningId || warning.id;
    if (id && localStorage.getItem('dismissed-warning-' + id)) {
      warning.remove();
    }
  });

  const warningButtons = document.querySelectorAll('.close-warning');
  warningButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const warning = btn.closest('.Warning');
      if (!warning) return;
      const id = warning.dataset.warningId || warning.id || '';
      warning.classList.add('fade-out');
      warning.addEventListener('transitionend', () => warning.remove(), { once: true });
      if (id) localStorage.setItem('dismissed-warning-' + id, '1');
    });
  });
});