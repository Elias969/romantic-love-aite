import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/i18n';

export function Footer() {
  const { language } = useLanguage();

  return (
    <footer className="w-full bg-gradient-to-r from-pink-100 to-red-100 border-t-2 border-pink-200 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Decoração */}
        <div className="flex justify-center gap-4 mb-6 text-3xl">
          <span className="animate-float">🇧🇷</span>
          <span className="text-red-500 animate-heartbeat">❤️</span>
          <span className="animate-float" style={{ animationDelay: '0.5s' }}>
            🇨🇱
          </span>
        </div>

        {/* Texto central */}
        <div className="text-center">
          <p className="text-foreground text-lg mb-2 font-semibold">
            {t('footer.text', language)}
          </p>
          <p className="text-foreground/60 text-sm">
            © {t('footer.year', language)} - Feito com Amor
          </p>
        </div>

        {/* Decoração inferior */}
        <div className="mt-6 pt-6 border-t-2 border-pink-200 text-center">
          <div className="inline-flex gap-2 text-2xl">
            <span className="animate-heartbeat">❤️</span>
            <span className="animate-heartbeat" style={{ animationDelay: '0.3s' }}>
              💕
            </span>
            <span className="animate-heartbeat" style={{ animationDelay: '0.6s' }}>
              ❤️
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
