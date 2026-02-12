import React, { useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { t } from '@/lib/i18n';
import { Music, Play, Pause } from 'lucide-react';

export function MusicPlayer() {
  const { language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          // Silenciar erro se não houver áudio disponível
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

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

        <button
          onClick={togglePlay}
          className="w-full bg-gradient-to-r from-pink-400 to-red-400 hover:from-pink-500 hover:to-red-500 text-white font-bold py-3 px-6 rounded-full transition-all flex items-center justify-center gap-2 hover:shadow-lg hover:scale-105 shadow-soft"
        >
          {isPlaying ? (
            <>
              <Pause className="w-5 h-5" />
              {t('music.pause', language)}
            </>
          ) : (
            <>
              <Play className="w-5 h-5" />
              {t('music.play', language)}
            </>
          )}
        </button>

        <p className="text-xs text-foreground/50 mt-4">
          Adicione sua música favorita ao atributo src do áudio abaixo
        </p>

        <audio
          ref={audioRef}
          onEnded={() => setIsPlaying(false)}
          className="hidden"
        >
          <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
}
