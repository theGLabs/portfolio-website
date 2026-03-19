const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

let W, H;

function resize() {
  W = canvas.width  = window.innerWidth;
  H = canvas.height = window.innerHeight;
}

resize();
window.addEventListener('resize', resize);

class Particle {
  constructor() { this.reset(); }

  reset() {
    this.x  = Math.random() * W;
    this.y  = Math.random() * H;
    this.s  = Math.random() * 1.4 + .3;
    this.vx = (Math.random() - .5) * .28;
    this.vy = (Math.random() - .5) * .28;
    this.o  = Math.random() * .45 + .08;
    this.c  = Math.random() > .5 ? '124,58,237' : '168,85,247';
  }

  update(mx, my) {
    this.x += this.vx;
    this.y += this.vy;

    const dx = mx - this.x;
    const dy = my - this.y;
    const d  = Math.sqrt(dx * dx + dy * dy);

    if (d < 90) {
      this.x -= dx * .014;
      this.y -= dy * .014;
    }

    if (this.x < 0) this.x = W;
    if (this.x > W) this.x = 0;
    if (this.y < 0) this.y = H;
    if (this.y > H) this.y = 0;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.s, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.c}, ${this.o})`;
    ctx.fill();
  }
}

const particles = Array.from({ length: 110 }, () => new Particle());

let pmx = 500, pmy = 400;
document.addEventListener('mousemove', e => { pmx = e.clientX; pmy = e.clientY; });

(function animate() {
  ctx.clearRect(0, 0, W, H);

  particles.forEach(p => { p.update(pmx, pmy); p.draw(); });

  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const d  = Math.sqrt(dx * dx + dy * dy);

      if (d < 75) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(124,58,237,${(1 - d / 75) * .1})`;
        ctx.lineWidth   = .5;
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(animate);
})();
