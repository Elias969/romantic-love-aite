import React, { useEffect, useRef } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  type: 'heart' | 'sparkle' | 'glow';
}

export function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle: Particle = {
        id: idRef.current++,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 2,
        type: ['heart', 'sparkle', 'glow'][Math.floor(Math.random() * 3)] as any,
      };

      particlesRef.current.push(particle);

      const element = document.createElement('div');
      element.className = 'particle';
      element.style.left = `${particle.x}%`;
      element.style.top = `${particle.y}%`;
      element.style.animation = `particleFloat ${particle.duration}s linear ${particle.delay}s forwards`;

      if (particle.type === 'heart') {
        element.innerHTML = '♥';
        element.style.color = '#d4af37';
        element.style.fontSize = '1.5rem';
        element.style.opacity = '0.6';
      } else if (particle.type === 'sparkle') {
        element.innerHTML = '✨';
        element.style.fontSize = '1rem';
        element.style.opacity = '0.5';
      } else {
        element.innerHTML = '•';
        element.style.color = '#b76e79';
        element.style.fontSize = '0.8rem';
        element.style.opacity = '0.4';
      }

      container.appendChild(element);

      // Remover elemento após animação
      setTimeout(() => {
        element.remove();
        particlesRef.current = particlesRef.current.filter(p => p.id !== particle.id);
      }, (particle.duration + particle.delay) * 1000);
    };

    // Criar partículas continuamente
    const interval = setInterval(createParticle, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        perspective: '1000px',
      }}
    />
  );
}
