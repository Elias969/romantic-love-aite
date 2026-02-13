import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/i18n';
import { Music } from 'lucide-react';

export function MusicPlayer() {
  const { language } = useLanguage();

  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-3xl p-8 text-center shadow-soft border-2 border-pink-200">
        
        <div className="flex justify-center mb-4">
          <div className="bg-gradient-to-r from-pink-100 to-red-100 p-4 rounded-full">
            <Music className="w-12 h-12 text-red-500" />
          </div>
        </div>

        <h3 className="text-2xl font-bold mb-2 text-accent">
          {t('music.title', language)}
        </h3>

        <p className="text-foreground/70 mb-6">
          {t('music.description', language)}
        </p>

        {/* Player do YouTube */}
        <div className="mt-6">
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/e23BTGIJcq8"
            title="YouTube music player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl shadow-soft"
          />
        </div>

        <p className="text-xs text-foreground/50 mt-4">
          Nossa música ❤️
        </p>

      </div>
    </div>
  );
}
