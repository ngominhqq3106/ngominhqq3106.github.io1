import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
  type: 'petal' | 'leaf-green' | 'leaf-gold' | 'firefly' | 'dew';
  wobble: number;
  wobbleSpeed: number;
  flutterPhase: number;
  flutterSpeed: number;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
}

export const MorningDewCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const petalColors = [
      'rgba(255, 235, 245, ',
      'rgba(254, 243, 199, ',
      'rgba(255, 228, 230, ',
      'rgba(240, 253, 244, ',
      'rgba(254, 215, 226, ',
    ];
    const greenLeafColors = [
      'rgba(52, 211, 153, ',
      'rgba(16, 185, 129, ',
      'rgba(74, 222, 128, ',
      'rgba(110, 231, 183, ',
      'rgba(34, 197, 94, ',
    ];
    const goldLeafColors = [
      'rgba(245, 197, 66, ',
      'rgba(251, 191, 36, ',
      'rgba(217, 119, 6, ',
      'rgba(244, 208, 63, ',
      'rgba(234, 179, 8, ',
    ];

    const particles: Particle[] = [];
    const ripples: Ripple[] = [];
    // High particle count for persistent, beautiful falling leaves across exploration
    const count = Math.min(Math.floor((width * height) / 12000), 95);

    for (let i = 0; i < count; i++) {
      const rand = Math.random();
      const type = rand < 0.38 ? 'leaf-green' : rand < 0.65 ? 'leaf-gold' : rand < 0.88 ? 'petal' : 'firefly';

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: type === 'firefly' ? Math.random() * 2 + 1.2 : Math.random() * 9 + 5,
        speedY: type === 'firefly' ? (Math.random() - 0.5) * 0.4 : Math.random() * 0.95 + 0.45,
        speedX: (Math.random() - 0.5) * 0.9,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.035,
        opacity: Math.random() * 0.55 + 0.35,
        color:
          type === 'firefly'
            ? 'rgba(253, 224, 71, '
            : type === 'petal'
            ? petalColors[Math.floor(Math.random() * petalColors.length)]
            : type === 'leaf-gold'
            ? goldLeafColors[Math.floor(Math.random() * goldLeafColors.length)]
            : greenLeafColors[Math.floor(Math.random() * greenLeafColors.length)],
        type,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.035 + 0.015,
        flutterPhase: Math.random() * Math.PI * 2,
        flutterSpeed: Math.random() * 0.03 + 0.015,
      });
    }

    // Interactive cursor ripple
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

      if (Math.random() > 0.6) {
        ripples.push({
          x: clientX,
          y: clientY,
          radius: 3,
          maxRadius: Math.random() * 32 + 22,
          opacity: 0.65,
        });
      }
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });

    let time = 0;

    const render = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      // 1. Water ripple reflections
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += 1.0;
        r.opacity *= 0.96;

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(167, 243, 208, ${r.opacity})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius * 0.5, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${r.opacity * 0.75})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        if (r.opacity < 0.02 || r.radius >= r.maxRadius) {
          ripples.splice(i, 1);
        }
      }

      // 2. Render falling leaves and petals throughout the entire scene
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.wobble += p.wobbleSpeed;
        p.flutterPhase += p.flutterSpeed;
        p.rotation += p.rotationSpeed;
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(p.wobble) * 0.85;

        // Wrap around borders
        if (p.y > height + 35) {
          p.y = -35;
          p.x = Math.random() * width;
        } else if (p.y < -35) {
          p.y = height + 35;
          p.x = Math.random() * width;
        }
        if (p.x > width + 35) p.x = -35;
        else if (p.x < -35) p.x = width + 35;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        // 3D flutter scale simulation
        const flutterScale = Math.sin(p.flutterPhase);
        ctx.scale(1, Math.max(0.2, Math.abs(flutterScale)));

        if (p.type === 'firefly') {
          const glow = (Math.sin(time * 3 + p.wobble) + 1) / 2;
          const currentOpacity = p.opacity * (0.3 + glow * 0.7);

          const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size * 3.5);
          grad.addColorStop(0, `${p.color}${currentOpacity})`);
          grad.addColorStop(0.4, `${p.color}${currentOpacity * 0.4})`);
          grad.addColorStop(1, 'rgba(253, 224, 71, 0)');

          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 3.5, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = `rgba(255, 255, 255, ${currentOpacity * 0.9})`;
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.6, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'petal') {
          // Delicate flower petal
          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.bezierCurveTo(p.size * 0.85, -p.size * 0.5, p.size * 0.85, p.size * 0.5, 0, p.size);
          ctx.bezierCurveTo(-p.size * 0.85, p.size * 0.5, -p.size * 0.85, -p.size * 0.5, 0, -p.size);
          ctx.fillStyle = `${p.color}${p.opacity * 0.78})`;
          ctx.fill();

          // Delicate vein
          ctx.strokeStyle = `rgba(255, 255, 255, ${p.opacity * 0.45})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 0.7);
          ctx.lineTo(0, p.size * 0.7);
          ctx.stroke();
        } else {
          // Botanical green or golden leaf with midrib and leaf lobes
          const isGold = p.type === 'leaf-gold';
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 1.35);
          ctx.quadraticCurveTo(p.size * 1.15, 0, 0, p.size * 1.35);
          ctx.quadraticCurveTo(-p.size * 1.15, 0, 0, -p.size * 1.35);
          ctx.fillStyle = `${p.color}${p.opacity * 0.68})`;
          ctx.fill();

          // Midrib line
          ctx.strokeStyle = isGold
            ? `rgba(254, 240, 138, ${p.opacity * 0.65})`
            : `rgba(255, 255, 255, ${p.opacity * 0.5})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 1.15);
          ctx.lineTo(0, p.size * 1.15);
          ctx.stroke();

          // Glistening morning dew droplet on leaf tip
          ctx.beginPath();
          ctx.arc(0, p.size * 0.98, p.size * 0.24, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity * 0.92})`;
          ctx.fill();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-10 w-full h-full"
    />
  );
};
