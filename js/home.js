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

// tooltip em loop com frases alternadas
const tooltipPhrases = [
  'psst... me olha! 👀',
  'mexe o mouse aqui! 🖱️',
  'to de olho em você 👀',
  'beep boop 🤖',
  'erro 404: atenção não encontrada 💀',
];

let tooltipIndex = 0;

function loopTooltip() {
  const tooltip = document.querySelector('.robot-tooltip');
  if (!tooltip) return;

  // troca o texto
  tooltip.textContent = tooltipPhrases[tooltipIndex];
  tooltipIndex = (tooltipIndex + 1) % tooltipPhrases.length;

  // aparece
  tooltip.classList.remove('hide');
  tooltip.classList.add('show');

  // some depois de 2.5s
  setTimeout(() => {
    tooltip.classList.remove('show');
    tooltip.classList.add('hide');
  }, 2500);

  // próxima frase depois de 4s
  setTimeout(loopTooltip, 4000);
}

window.addEventListener('load', () => {
  animateHome();
  // começa o loop depois de 2s
  setTimeout(loopTooltip, 2000);
});
