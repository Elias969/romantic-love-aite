import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/i18n';

export function StorySection() {
  const { language } = useLanguage();

  return (
    <div className="w-full py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-accent">
        {t('story.title', language)}
      </h2>
      <p className="text-center text-foreground/70 mb-8 italic">
        {t('story.subtitle', language)}
      </p>

      <div className="max-w-3xl mx-auto space-y-8">
        {/* Introdução */}
        <div className="text-center mb-8">
          <p className="text-lg text-foreground italic font-semibold">
            {t('story.intro', language)}
          </p>
        </div>

        {/* Como Nos Conhecemos */}
        <div className="bg-white rounded-3xl p-8 shadow-soft border-2 border-pink-200">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">💕</span>
            <h3 className="text-2xl font-bold text-accent">
              {t('story.meeting', language)}
            </h3>
          </div>
          <p className="text-foreground leading-relaxed">
            {t('story.meetingText', language)}
          </p>
        </div>

        {/* Qualidades Admiradas */}
        <div className="bg-white rounded-3xl p-8 shadow-soft border-2 border-pink-200">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">✨</span>
            <h3 className="text-2xl font-bold text-accent">
              {t('story.qualities', language)}
            </h3>
          </div>
          <p className="text-foreground leading-relaxed">
            {t('story.qualitiesText', language)}
          </p>
        </div>

        {/* Sonhos Futuros */}
        <div className="bg-white rounded-3xl p-8 shadow-soft border-2 border-pink-200">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🌟</span>
            <h3 className="text-2xl font-bold text-accent">
              {t('story.future', language)}
            </h3>
          </div>
          <p className="text-foreground leading-relaxed">
            {t('story.futureText', language)}
          </p>
        </div>

        {/* Decoração Final */}
        <div className="text-center py-4">
          <div className="inline-block">
            <div className="text-4xl animate-heartbeat">❤️</div>
          </div>
        </div>
      </div>
    </div>
  );
}
