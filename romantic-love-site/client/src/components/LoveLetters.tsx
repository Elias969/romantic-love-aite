import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/i18n';
import { Heart } from 'lucide-react';

export function LoveLetters() {
  const { language } = useLanguage();
  const [randomMessage, setRandomMessage] = useState('');

  const messages = [
    t('letters.message1', language),
    t('letters.message2', language),
    t('letters.message3', language),
    t('letters.message4', language),
  ];

  const showRandomMessage = () => {
    const random = messages[Math.floor(Math.random() * messages.length)];
    setRandomMessage(random);
    setTimeout(() => setRandomMessage(''), 4000);
  };

  return (
    <div className="w-full py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-accent">
        {t('letters.title', language)}
      </h2>

      <div className="max-w-2xl mx-auto space-y-6">
        {/* Carta Principal */}
        <div className="bg-white rounded-3xl p-8 relative shadow-soft border-2 border-pink-200">
          <div className="absolute top-4 right-4 text-red-500 text-3xl animate-heartbeat">
            ❤️
          </div>

          <div className="whitespace-pre-line text-foreground leading-relaxed italic font-serif text-lg">
            {t('letters.main', language)}
          </div>

          <div className="mt-6 text-right text-red-500 font-semibold">
            Com todo meu amor 💕
          </div>
        </div>

        {/* Mensagens Aleatórias */}
        <div className="text-center">
          <button
            onClick={showRandomMessage}
            className="bg-gradient-to-r from-pink-400 to-red-400 hover:from-pink-500 hover:to-red-500 text-white font-bold py-3 px-8 rounded-full transition-all flex items-center justify-center gap-2 mx-auto hover:shadow-lg hover:scale-105 shadow-soft"
          >
            <Heart className="w-5 h-5" />
            Revelar Mensagem Especial
          </button>

          {randomMessage && (
            <div className="mt-6 bg-gradient-to-r from-pink-100 to-red-100 border-2 border-pink-300 rounded-2xl p-6 animate-fade-in-up">
              <p className="text-foreground italic text-lg font-semibold">
                "{randomMessage}"
              </p>
            </div>
          )}
        </div>

        {/* Decoração */}
        <div className="flex justify-center gap-4 text-3xl opacity-70">
          <span className="animate-float">💕</span>
          <span className="animate-float" style={{ animationDelay: '0.3s' }}>
            ✨
          </span>
          <span className="animate-float" style={{ animationDelay: '0.6s' }}>
            💕
          </span>
        </div>
      </div>
    </div>
  );
}
