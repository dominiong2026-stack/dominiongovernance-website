const header = document.querySelector('[data-header]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-nav]');
const tabs = document.querySelectorAll('[data-tab]');
const panels = document.querySelectorAll('[data-panel]');
const reveals = document.querySelectorAll('.reveal');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (tabs.length) {
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      tabs.forEach(btn => {
        btn.classList.toggle('active', btn === tab);
        btn.setAttribute('aria-selected', String(btn === tab));
      });
      panels.forEach(panel => {
        panel.classList.toggle('active', panel.dataset.panel === target);
      });
    });
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
reveals.forEach(item => observer.observe(item));

window.addEventListener('scroll', () => {
  if (!header) return;
  header.style.background = window.scrollY > 20
    ? 'rgba(3, 3, 3, 0.92)'
    : 'rgba(3, 3, 3, 0.86)';
});

document.querySelector('[data-year]')?.append(new Date().getFullYear());
