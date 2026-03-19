// animação de entrada dos elementos da home
function animateHome() {
  const els = [...document.querySelectorAll('.home-left > *')];

  els.forEach(el => {
    el.style.transition = 'none';
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(24px)';
  });

  requestAnimationFrame(() => requestAnimationFrame(() => {
    els.forEach((el, i) => {
      el.style.transition = `opacity .65s ease ${i * .11}s, transform .65s ease ${i * .11}s`;
      el.style.opacity    = '1';
      el.style.transform  = 'translateY(0)';
    });
    setTimeout(animateSubtitle, 400);
  }));
}

// efeito glitch + highlight nas palavras-chave
function animateSubtitle() {
  const sub = document.getElementById('heroSub');

  ['hl1', 'hl2', 'hl3'].forEach(id => {
    document.getElementById(id).classList.remove('lit');
  });

  sub.classList.remove('glitch');
  void sub.offsetWidth;
  sub.classList.add('glitch');

  setTimeout(() => document.getElementById('hl1').classList.add('lit'),  700);
  setTimeout(() => document.getElementById('hl2').classList.add('lit'),  950);
  setTimeout(() => document.getElementById('hl3').classList.add('lit'), 1200);
}

window.addEventListener('load', animateHome);
