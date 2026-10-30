// src/components/AnimatedBackground.jsx
import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animId;
    let w, h;
    let particles = [];

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }

    resize();
    window.addEventListener('resize', resize);

    // Particle system
    const PARTICLE_COUNT = 80;

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.size = Math.random() * 1.8 + 0.4;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.opacityDelta = (Math.random() - 0.5) * 0.003;
        // Color: mix of indigo / violet / blue
        const hue = Math.random() < 0.5
          ? 230 + Math.random() * 30  // indigo-blue range
          : 260 + Math.random() * 30; // violet range
        this.hue = hue;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity += this.opacityDelta;

        if (this.opacity <= 0.05 || this.opacity >= 0.65) {
          this.opacityDelta *= -1;
        }

        if (this.x < -10) this.x = w + 10;
        if (this.x > w + 10) this.x = -10;
        if (this.y < -10) this.y = h + 10;
        if (this.y > h + 10) this.y = -10;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 80%, 70%, ${this.opacity})`;
        ctx.fill();
      }
    }

    // Flowing line system
    const LINES = 5;
    class FlowLine {
      constructor(index) {
        this.index = index;
        this.reset();
      }

      reset() {
        this.points = [];
        this.y = (h / (LINES + 1)) * (this.index + 1);
        this.amplitude = 60 + Math.random() * 80;
        this.frequency = 0.003 + Math.random() * 0.003;
        this.speed = 0.4 + Math.random() * 0.4;
        this.phase = Math.random() * Math.PI * 2;
        this.opacity = 0.04 + Math.random() * 0.06;
        this.hue = 220 + Math.random() * 60;
        this.width = 1 + Math.random();
      }

      update(t) {
        this.phase += this.speed * 0.01;
      }

      draw(t) {
        ctx.beginPath();
        ctx.moveTo(0, this.y);

        for (let x = 0; x <= w; x += 4) {
          const y = this.y
            + Math.sin(x * this.frequency + this.phase) * this.amplitude
            + Math.sin(x * this.frequency * 1.7 + this.phase * 0.6) * (this.amplitude * 0.4);
          ctx.lineTo(x, y);
        }

        ctx.strokeStyle = `hsla(${this.hue}, 70%, 65%, ${this.opacity})`;
        ctx.lineWidth = this.width;
        ctx.stroke();
      }
    }

    // Initialize
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }

    const lines = Array.from({ length: LINES }, (_, i) => new FlowLine(i));

    // Draw connections between nearby particles
    function drawConnections() {
      const maxDist = 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(130, 120, 220, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
    }

    let t = 0;

    function animate() {
      animId = requestAnimationFrame(animate);
      t++;

      // Clear with very slight persistence for trail effect
      ctx.fillStyle = 'rgba(5, 10, 20, 0.15)';
      ctx.fillRect(0, 0, w, h);

      // Draw flowing lines
      lines.forEach(line => {
        line.update(t);
        line.draw(t);
      });

      // Draw connections
      drawConnections();

      // Draw & update particles
      particles.forEach(p => {
        p.update();
        p.draw();
      });
    }

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="bg-canvas"
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw', height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
