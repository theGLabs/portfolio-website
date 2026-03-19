const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursor-ring');

const isMobile = window.matchMedia('(pointer: coarse)').matches;

if (isMobile) {
  // esconde o cursor customizado no mobile
  cursor.style.display = 'none';
  ring.style.display   = 'none';
  // restaura o cursor padrão
  document.body.style.cursor = 'auto';
} else {
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
  });

  (function loop() {
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
    rx += (mx - rx) * .12;
    ry += (my - ry) * .12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(loop);
  })();

  document.querySelectorAll('a, button, .stat-box, .skill-card, .project-card, .nav-logo').forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hovered'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hovered'));
  });
}
