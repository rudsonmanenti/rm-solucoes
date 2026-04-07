const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  });
}

const elementosReveal = document.querySelectorAll('.reveal');

if (elementosReveal.length) {
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('show');
      }
    });
  }, { threshold: 0.14 });

  elementosReveal.forEach((elemento) => observador.observe(elemento));
}
