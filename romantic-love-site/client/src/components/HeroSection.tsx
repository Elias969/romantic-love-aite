import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/i18n';
import { ParticleBackground } from './ParticleBackground';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  const { language } = useLanguage();

  const scrollToNext = () => {
    const nextSection = document.getElementById('gallery');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-b from-pink-100 via-white to-red-50">
      {/* Decoração de fundo com padrão suave */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-200 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-200 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-36 h-36 bg-rose-200 rounded-full blur-3xl" />
      </div>

      {/* Partículas animadas */}
      <ParticleBackground />

      {/* Conteúdo */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        {/* Decoração superior com emojis */}
        <div className="mb-8 flex justify-center gap-4 text-4xl opacity-80">
          <span className="animate-float">💕</span>
          <span className="animate-float" style={{ animationDelay: '0.5s' }}>
            ✨
          </span>
          <span className="animate-float" style={{ animationDelay: '1s' }}>
            💕
          </span>
        </div>

        {/* Título principal */}
        <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-rose-500 mb-4 animate-glow">
          {t('hero.title', language)}
        </h1>

        {/* Subtítulo */}
        <p className="text-xl md:text-2xl text-foreground mb-8 italic font-semibold">
          {t('hero.subtitle', language)}
        </p>

        {/* Decoração com bandeiras e coração */}
        <div className="flex justify-center gap-6 mb-12 text-4xl">
          <span className="animate-float">🇧🇷</span>
          <span className="text-5xl text-red-500 animate-heartbeat">❤️</span>
          <span className="animate-float" style={{ animationDelay: '0.5s' }}>
            🇨🇱
          </span>
        </div>

        {/* Indicador de scroll */}
        <button
          onClick={scrollToNext}
          className="mt-12 flex flex-col items-center gap-2 mx-auto text-foreground/60 hover:text-accent transition-colors"
        >
          <span className="text-sm uppercase tracking-widest font-semibold">
            {t('hero.scroll', language)}
          </span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </div>

      {/* Divider decorativo */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
