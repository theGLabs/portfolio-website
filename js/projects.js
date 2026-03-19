// fade up com IntersectionObserver
function observeFades() {
  const io = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        io.unobserve(e.target);
      }
    });
  }, { threshold: .05 });

  document.querySelectorAll('.fade-up').forEach(el => io.observe(el));
}

window.addEventListener('load', observeFades);
