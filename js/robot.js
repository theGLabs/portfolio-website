const rHead = document.getElementById('rHead');
const irisL = document.getElementById('irisL');
const irisR = document.getElementById('irisR');

let targetDX = 0, targetDY = 0;
let currentDX = 0, currentDY = 0;

document.addEventListener('mousemove', e => {
  targetDX = (e.clientX - window.innerWidth  / 2) / (window.innerWidth  / 2);
  targetDY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
});

(function track() {
  currentDX += (targetDX - currentDX) * .08;
  currentDY += (targetDY - currentDY) * .08;

  if (rHead) {
    rHead.style.transform = `rotateY(${currentDX * 22}deg) rotateX(${-currentDY * 15}deg)`;
  }

  const MAX = 4;
  const px  = Math.max(-MAX, Math.min(MAX, currentDX * MAX));
  const py  = Math.max(-MAX, Math.min(MAX, currentDY * MAX));
  const t   = `translate(calc(-50% + ${px}px), calc(-50% + ${py}px))`;

  if (irisL) irisL.style.transform = t;
  if (irisR) irisR.style.transform = t;

  requestAnimationFrame(track);
})();