// fade up com IntersectionObserver
function observeFades() {
  const io = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 60);
        io.unobserve(e.target);
      }
    });
  }, { threshold: .05 });

  document.querySelectorAll('.fade-up').forEach(el => io.observe(el));
}

// barras de habilidade animadas
function animateBars() {
  document.querySelectorAll('.skill-level-fill').forEach(bar => {
    setTimeout(() => bar.style.width = bar.dataset.width + '%', 200);
  });
}

// contadores animados
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = +el.dataset.count;
    let cur = 0;
    const iv = setInterval(() => {
      cur = Math.min(cur + 1, target);
      el.textContent = cur;
      if (cur >= target) clearInterval(iv);
    }, 50);
  });
}

window.addEventListener('load', () => {
  observeFades();
  setTimeout(animateBars,     300);
  setTimeout(animateCounters, 500);
});
