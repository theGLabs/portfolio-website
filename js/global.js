// menu mobile
function toggleMenu() {
  document.getElementById('burger').classList.toggle('open');
  document.getElementById('navMobile').classList.toggle('open');
}

// barra de progresso de scroll
const pbar = document.getElementById('progress-bar');
document.addEventListener('scroll', () => {
  const d   = document.documentElement;
  const pct = (d.scrollTop / (d.scrollHeight - d.clientHeight)) * 100;
  pbar.style.width = Math.min(pct, 100) + '%';
});

// ano do footer
document.getElementById('footerYear').textContent = new Date().getFullYear();
