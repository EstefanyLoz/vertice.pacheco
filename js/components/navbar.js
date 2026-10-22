/** Control de navegación en pantallas pequeñas. */
export function initializeNavbar() {
  const button = document.querySelector('.mobile-toggle');
  const menu = document.getElementById('main-nav');
  if (!button || !menu) return;
  const close = () => {
    menu.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
    button.textContent = 'Menú ☰';
  };
  button.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    button.setAttribute('aria-expanded', String(open));
    button.textContent = open ? 'Cerrar ✕' : 'Menú ☰';
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); });
}
